import { getRegionAreas, setBillingAddress } from '@/lib/redux/slices/checkout'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from './CustomInput'
import Select from './CustomSelect'
import { useState } from 'react'
import { addressValidationSchema } from '@/utils/validation/checkout'
import { BILLINGADDRESS, getBillAddress, setShip_BillAddress } from '@/services/checkout'
import { toast } from 'react-toastify'

const AddAddress = ({ closeModal, address, IsnewAddress }) => {
  const dispatch = useDispatch()
  const [selectReg, setSelectReg] = useState([0])
  const { regions, regionAreas } = useSelector(state => state.checkout)
  const regionsOptions = regions && regions?.map(region => ({ label: region.title, value: region.value }))
  const regAreasOptions = regionAreas && regions.find(reg => reg.value === selectReg)?.areas?.map(area => ({ label: area, value: area }))

  const initialValues = {
    "region_id": address?.region_id || "",
    "street": address?.street?.join('') || "",
    "telephone": address?.telephone || "966569898888",
    "city": address?.city || "",
    "firstname": address?.firstname || "Ahmed",
    "lastname": address?.lastname || "Gabr",
    "email": address?.email || "ahmed@gmail.com"
  }
  return (
    <>
      <Formik
        validationSchema={addressValidationSchema}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.isSubm
          const data = {
            ...values,
            street: String(values?.street),
            region: regionAreas?.title,
            region_code: regionAreas?.title,
            country_id: regionAreas.country_id,
          }
          console.log({ data })
          setShip_BillAddress(data).then(async data => {
            toast.success(data?.msg)

            if (data?.msg === 'Shipping address saved') {
              await BILLINGADDRESS().then(res => {
                dispatch(setBillingAddress(res?.data?.cart))
              })
            }
          })
          setTimeout(() => {
            closeModal(false)
          }, 1000);

        }}
        className="bg-red-300">
        {({ handleChange }) => (
          <Form className="w-full px-4 py-6 sm:p-8 grid grid-cols-4 gap-x-4 gap-y-4 md:gap-y-8">
            <Input
              cols='col-span-4'
              label='Email address'
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 "
            />
            <Input
              cols='md:col-span-2'
              label='First name'
              id="firstname"
              name="firstname"
              type="text"
              autoComplete="firstname"
              className="block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 "
            />
            <Input
              cols='md:col-span-2'
              label='Last name'
              id="lastname"
              name="lastname"
              type="text"
              autoComplete="lastname"
              className="block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 "
            />
            <Input
              cols='col-span-full'
              label='Mobile number'
              id="telephone"
              name="telephone"
              type="text"
              autoComplete="telephone"
              className="block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 "
            />


            <Select
              options={regionsOptions}

              placeholder='Select regions'
              cols='col-span-2'
              label='Select Region'
              id="region_id"
              name="region_id"
              onChange={e => {
                handleChange
                setSelectReg(e.value)
                dispatch(getRegionAreas(e.value))
              }}
              autoComplete="region_id"
              className="block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:max-w-xs max-h-16 overflow-y-auto no-scrollbar"
            />
            <Select
              onChange={e => handleChange}
              cols='col-span-2'
              placeholder='Select City'
              label='Select city'
              id="city"
              name="city"
              options={regAreasOptions}
              autoComplete="city-name"
              className="block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:max-w-xs max-h-16 overflow-y-auto no-scrollbar"
            />
            <Input
              cols='col-span-full'
              label='Street Address'
              id="street"
              name="street"
              type="text"
              autoComplete="street"
              className="block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 "
            />


            <div className="flex items-center justify-start gap-4">
              {IsnewAddress && <button onClick={() => closeModal(false)} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>}
              <button
                type="submit"
                className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Save
              </button>
            </div>
          </Form>

        )}
      </Formik>
    </>
  )
}

export default AddAddress