import {useEffect, useState} from "react";
import clsx from 'clsx';
import styles from '../components/ApplePay.module.css';
import axios from "axios";

function ApplePay() {
  const [hasSession, setHasSession] = useState(null);
  const startApplePaySession = () => {
    let supportedNetworks = ["mada", "masterCard", "visa"];
    let capabilities = ["supports3DS", "supportsDebit", "supportsCredit"];

    let applePayRequest = {
      countryCode: "SA",
      currencyCode: "SAR",
      lineItems: [
        {
          label: "Subtotal",
          amount: "100.00",
        },
        {
          label: "Tax",
          amount: "10.00"
        },
      ],
      total: {
        label: "Voucherek",
        amount: "110.00",
        type: "final"
      },

      merchantCapabilities: capabilities,
      shippingType: "delivery",
      supportedNetworks: supportedNetworks,
      requiredBillingContactFields: [
        "postalAddress",
        "name",
        "phoneticName"
      ],
    };
    const applePaySession = new ApplePaySession(6, applePayRequest);
    handleApplePayEvents(applePaySession);
    applePaySession.begin();
    applePaySession.oncancel = function (event) {
      console.log("oncancel");
      console.log(event);
    }
  };

  const handleApplePayEvents = (applePaySession) => {
    applePaySession.onvalidatemerchant = (event) => {
      console.log("onvalidatemerchant");
      console.log(event);
      validateApplePaySession(event.validationURL, (merchantSession) => {
        console.log("merchantSession : " + JSON.stringify(merchantSession));
        applePaySession.completeMerchantValidation(merchantSession);
      });

    };
    applePaySession.onpaymentmethodselected = function (event) {
      console.log('starting session.onpaymentmethodselected');
      console.log(event);
      const newTotal = {
        type: 'final',
        label: "Voucherek",
        amount: parseFloat(123)
      };
      const newLineItems = getNewLineItems();
      applePaySession.completePaymentMethodSelection(newTotal, newLineItems);
    };
    applePaySession.onpaymentauthorized = function (event) {
      console.log('starting session.onpaymentauthorized');
      console.log(event);
      sendPaymentToken(event.payment);
      let result = true;
      if(result){
        const status = ApplePaySession.STATUS_SUCCESS;
        applePaySession.completePayment(status);
        alert("Payment Successfull");
      }else{
        const status = ApplePaySession.STATUS_FAILURE;
        console.log("Payment Failed" + status);
        applePaySession.completePayment(status);
        alert("Payment Failed");
        applePaySession.abort();
      }

    };
  }

  const validateApplePaySession = (appleUrl, callback) => {
    axios.post(
        '/api/validate',
        {
          appleUrl,
        },
        {
          headers: { 'Access-Control-Allow-Origin': '*' },
        },
    )
        .then((response) => {
          callback(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  };
  let getNewLineItems = () => {
    return [
      {
        type: 'final',
        label: 'Sub Total',
        amount: 80
      }, {
        type: 'final',
        label: 'shipping',
        amount: 15
      },
      {
        type: 'final',
        label: 'Tax',
        amount: 12
      },
      {
        type: 'final',
        label: 'Discount',
        amount: '-' + 13
      }
    ];


  };

  let sendPaymentToken = (payment) => {
    let paymentToken = payment.token;

    const data = {
      "request_type": "Mobile",
      "apple_data": paymentToken.paymentData.data,
      "apple_signature": paymentToken.paymentData.signature,
      "apple_version": paymentToken.paymentData.version,
      "apple_ephemeralPublicKey": paymentToken.paymentData.header.ephemeralPublicKey,
      "apple_publicKeyHash": paymentToken.paymentData.header.publicKeyHash,
      "apple_transactionId": paymentToken.paymentData.header.transactionId,
      "apple_displayName": paymentToken.paymentMethod.displayName,
      "apple_network": paymentToken.paymentMethod.network,
      "apple_type": paymentToken.paymentMethod.type,
      "transaction_identifier": paymentToken.transactionIdentifier,
      "order_id": "#100000001",
      "shipping_method": "flaterate_flatrate",
      "request_stage": "cart"
    };
    console.log(`request to payfort ${JSON.stringify(data)}`);



  };

  useEffect(() => {
    if (window.ApplePaySession) {
      setHasSession(true);
    }
  }, []);

  return (
      <>
        {hasSession
            && (
                <>
                  <div onClick={startApplePaySession} className={clsx(styles.applePay, styles.applePayBlack)}/>
                </>
            )}
      </>
  );
}

export default ApplePay;
