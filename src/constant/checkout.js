export const PayingOffData = [
  {
    id: "debit",
    title: "debit_credit_card",
    name: "payment_method",
    value:'debit',
    warning: null,
    logo: "/assets/images/checkout/payments.jpg",
  },
  {
    id: "cash",
    title: "Payment_in_cash",
    name: "payment_method",
    value:'cash',
    warning: "Additional_fees_may_apply",
    logo: "/assets/images/checkout/Cash-Logo 1.jpg",
  },
  {
    id: "stcPay",
    title: "Payment_with_STC-pay",
    name: "payment_method",
    value:'stc',
    warning: null,
    logo: "/assets/logo/Stc_pay.svg",
  },
  {
    id: "tabby",
    title: "payment_with_tabby",
    name: "payment_method",
    value:'tabby',
    warning: null,
    logo: "/assets/images/checkout/Vector.jpg",
  },
  {
    id: "tamara",
    title: "payment_with_tamara",
    name: "payment_method",
    value:'tamara',
    warning: null,
    logo: "/assets/images/checkout/tamara_logo_ar 2.jpg",
  },
];


export const DeliveryOptionsData = [
  {
    id: "I leave it at the door",
    title: "I leave it at the door",
    name: "DeliveryOptionsData",
    msg: "We'll leave your order at the door and send a photo to you for confirmation Available on prepaid options only",
    // logo: "/assets/images/checkout/Door.svg",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 46 46"
      >
        <path
          stroke="#358CCB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M4.313 40.25h37.374M10.063 40.25V7.187A1.438 1.438 0 0111.5 5.75h23a1.438 1.438 0 011.438 1.438V40.25"
        ></path>
        <path
          fill="#358CCB"
          d="M28.031 25.156a2.156 2.156 0 100-4.312 2.156 2.156 0 000 4.312z"
        ></path>
      </svg>
    ),
  },
  {
    id: "Receive it at once",
    title: "Receive it at once",
    name: "DeliveryOptionsData",
    msg: "Help us reduce the number of packages and deliveries and choose the option to deliver orders at one time",
    // logo: "/assets/images/checkout/Package.jpg",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 46 46"
      >
        <path
          stroke="#358CCB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M40.25 31.858V14.141a1.456 1.456 0 00-.737-1.258L23.701 3.99a1.402 1.402 0 00-1.402 0L6.487 12.883a1.456 1.456 0 00-.737 1.258v17.717a1.456 1.456 0 00.737 1.258l15.812 8.894a1.402 1.402 0 001.402 0l15.812-8.894a1.457 1.457 0 00.737-1.258z"
        ></path>
        <path
          stroke="#358CCB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M31.805 27.402V18.06l-17.43-9.614"
        ></path>
        <path
          stroke="#358CCB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M40.05 13.402l-16.89 9.596-17.215-9.596M23.162 23L23 42.19"
        ></path>
      </svg>
    ),
  },
  {
    id: "Receive it today",
    title: "Receive it today",
    name: "DeliveryOptionsData",
    msg: "Select this option to receive all products",
    // logo: "/assets/images/checkout/Alarm.jpg",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 46 46"
      >
        <path
          stroke="#1B9FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M23 12.938V23h10.063"
        ></path>
        <path
          stroke="#1B9FFF"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M23 38.813c8.733 0 15.813-7.08 15.813-15.813S31.733 7.187 23 7.187 7.187 14.268 7.187 23 14.268 38.813 23 38.813z"
        ></path>
        <path
          stroke="#1B9FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M35.203 4.707l6.091 6.091M4.707 10.798l6.091-6.091"
        ></path>
      </svg>
    ),
    price: "20 SAR",
  },
]