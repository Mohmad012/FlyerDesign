import {useEffect, useState} from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {useRouter} from 'next/router'
import CustomSelect from '@/components/checkout/forms/CustomSelect'
import Input from '@/components/global/forms/CustomInput'
import {
  handleCreateNewAddressApiRoute,
  handleGettingAlladdressesApiRoute,
} from '@/services/dashbourd/addresses'
import {useQuery} from 'react-query'
import {useSelector} from 'react-redux'

const AboutAddresses = ({setCurrentAddresses, id, regions}) => {
  const {locale} = useRouter()
  const [selectReg, setSelectReg] = useState([0])
  const [initialValues, setInitialValues] = useState({})
  const {id: userId} = useSelector(state => state.user?.user)

  const regionsOptions =
    regions &&
    regions?.map(region => ({label: region.title, value: region.value}))
  const regAreasOptions = regions
    .find(reg => reg.value === selectReg)
    ?.areas?.map(area => ({label: area, value: area}))

  const getCurrAddresses = useQuery({
    queryKey: 'getCurrAddresses',
    queryFn: () => handleGettingAlladdressesApiRoute({locale, document}),
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  })

  useEffect(() => {
    setInitialValues({
      firstName: id ? getCurrAddresses?.data?.data?.items[0]?.firstname : '',
      lastName: id ? getCurrAddresses?.data?.data?.items[0]?.lastName : '',
      city: id ? getCurrAddresses?.data?.data?.items[0]?.city : '',
      countryList: id
        ? getCurrAddresses?.data?.data?.items[0]?.countryList
        : '',
      district: '',
      mobileNumber: id ? getCurrAddresses?.data?.data?.items[0]?.telephone : '',
      email: '',
      region_id: id ? getCurrAddresses?.data?.data?.items[0]?.region_id : '',
      street: id ? getCurrAddresses?.data?.data?.items[0]?.street?.join() : '',
    })
  }, [getCurrAddresses?.data?.data?.items, id])

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email address is required')
      .email('Email address is not valid'),
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('First name is required'),
    telephone: Yup.string()
      .required()
      .label('Phone number')
      .max(12)
      .matches(
        /^(9665)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/,
        'Invalid phone number format, must start with 9665**'
      ),
    region_id: Yup.string().required('Select region is required'),
    city: Yup.string().required('Select city is required'),
  })

  // const initialValues = {
  //   firstName: id ? getCurrAddresses?.data?.data?.items[0]?.firstname : '',
  //   lastName: id ? getCurrAddresses?.data?.data?.items[0]?.lastName : '',
  //   city: id ? getCurrAddresses?.data?.data?.items[0]?.city : '',
  //   countryList: id ? getCurrAddresses?.data?.data?.items[0]?.countryList : '',
  //   district: '',
  //   mobileNumber: id ? getCurrAddresses?.data?.data?.items[0]?.telephone : '',
  //   email: '',
  //   region_id: id ? getCurrAddresses?.data?.data?.items[0]?.region_id : '',
  //   street: id ? getCurrAddresses?.data?.data?.items[0]?.street?.join() : '',
  // }

  return (
    <>
      <div className='flex flex-col gap-5 items-start mb-5'>
        <div
          className='flex gap-1 items-center cursor-pointer'
          onClick={() => setCurrentAddresses('showAddresses')}>
          {locale?.includes('en') ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width='20'
              height='20'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='none'
              viewBox='0 0 32 32'>
              <path
                fill='#666'
                d='M4 16a1 1 0 011-1h19.585l-7.293-7.293a1.001 1.001 0 011.415-1.415l9 9a1.001 1.001 0 010 1.415l-9 9a1 1 0 11-1.415-1.415l7.293-7.293H5a1 1 0 01-1-1z'></path>
            </svg>
          )}
          <span>Back to titles</span>
        </div>
        <h2 className='text-xl font-semibold text-primary-500'>
          Address modification
        </h2>
        <p>
          Manage your saved addresses so you can quickly and easily complete
          purchases across our stores
        </p>
      </div>
      <div className='mt-4'>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={async (values, {setSubmitting}) => {
            try {
              const region = regions.find(fi =>
                fi.value?.includes(values?.region_id)
              )
              const standar = {
                customer_id: userId,
                address: {
                  id: 1,
                  region: {
                    region_code: 'werw',
                    region: ' ضباء',
                    region_id: '734',
                  },
                  region_id: '734',
                  country_id: 'SA',
                  telephone: '966569858396',
                  postcode: '10577',
                  city: 'العزيزية',
                  firstname: 'Abdul1',
                  lastname: 'basit1',
                  street: ['welcome', 'there'],
                },
              }
              let data = {
                customer_id: user?.id,
                address: {
                  ...values,
                  id,
                  region: {
                    region_code: 'werw',
                    region: region?.title,
                    region_id: values?.region_id,
                  },
                  country_id: 'SA',
                  postcode: '10577',
                  street: [values?.street],
                },
              }

              for (let dn in data.address) {
                const keysStandar = Object.keys(standar.address)
                const dnInkeysStandar = keysStandar.includes(dn)
                if (!dnInkeysStandar) {
                  delete data.address[dn]
                }
              }

              await handleCreateNewAddressApiRoute({
                data,
                locale,
              })
            } catch (error) {
              console.log('error', error)
            } finally {
              setSubmitting(false)
              setCurrentAddresses('showAddresses')
            }
          }}
          className='bg-red-300'>
          {({handleChange, isSubmitting}) => (
            <Form className='w-full px-4 py-6 sm:p-8 grid grid-cols-4 gap-x-4 gap-y-4 md:gap-y-8'>
              <Input
                cols='col-span-4'
                label='Email address'
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                className='block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 '
              />
              <Input
                cols='md:col-span-2'
                label='First name'
                id='firstname'
                name='firstname'
                type='text'
                autoComplete='firstname'
                className='block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 '
              />
              <Input
                cols='md:col-span-2'
                label='Last name'
                id='lastname'
                name='lastname'
                type='text'
                autoComplete='lastname'
                className='block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 '
              />
              <Input
                cols='col-span-full'
                label='Mobile number'
                id='telephone'
                name='telephone'
                type='text'
                autoComplete='telephone'
                className='block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 '
              />

              <CustomSelect
                options={regionsOptions}
                placeholder='Select regions'
                cols='col-span-2'
                label='Select Region'
                id='region_id'
                name='region_id'
                onChange={e => {
                  handleChange
                  setSelectReg(e.value)
                }}
                autoComplete='region_id'
                className='block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:max-w-xs max-h-16 overflow-y-auto no-scrollbar'
              />
              <CustomSelect
                onChange={e => handleChange}
                cols='col-span-2'
                placeholder='Select City'
                label='Select city'
                id='city'
                name='city'
                options={regAreasOptions}
                autoComplete='city-name'
                className='block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:max-w-xs max-h-16 overflow-y-auto no-scrollbar'
              />
              <Input
                cols='col-span-full'
                label='Street Address'
                id='street'
                name='street'
                type='text'
                autoComplete='street'
                className='block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 '
              />

              <div className='flex items-center justify-start gap-4'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='py-2 px-4 text-white bg-primary-500 rounded hover:bg-primary-600'>
                  {isSubmitting ? 'Saving...' : 'Save Address'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default AboutAddresses
