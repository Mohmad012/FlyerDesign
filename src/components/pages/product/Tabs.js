import { Tab } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"
import { useTranslation } from "react-i18next"
import Reviews from "./Reviews"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Tabs({data:{_source: product} }) {
  const {t} = useTranslation('product')
  const tabs = [
    {
      name: t('Product Description'),
      features: product?.short_description,
    },
    {
      name: t('product specification'),
      features: product?.specifications,
    },
    {
      name: t('Terms and Conditions'),
      features: [product?.terms_and_conditions],
    },
    {
      name: () => (
        <div className="flex items-center justify-center gap-4">
          <h1>{t('ratings')}</h1>
            <div>
              <div className="text-xl text-primary-500">4.5</div>
            <div className="flex">
              {Array.from([1, 2, 3, 4, 5]).map((star) => <StarIcon width={16} key={star} className={`${star === 5 ? 'text-gray-400' : 'text-yellow-500'} text-sm`} />)}
            </div>
            </div>
        </div>
      ),
      features: ['<h1>No reviews to show</h1>']
    },
  ]

  return (
    <div>
      <section aria-labelledby="features-heading" className="mx-auto">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-hidden sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0 w-full">
                <Tab.List className="-mb-px flex overflow-x-scroll no-scrollbar w-full">
                  {tabs.map((tab, idx) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-primary-500 text-primary-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap border-b-2 py-2 text-sm font-bold outline-none px-2'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="pt-10 lg:pt-4">
                  {tab?.features?.map((item, idx) => (
                    <div key={idx} >
                      <div className="mt-6 lg:mt-0">

                         <h3 className=" font-medium text-gray-900"
                          dangerouslySetInnerHTML={{
                            __html: item
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}
