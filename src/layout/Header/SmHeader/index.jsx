import LocaleSwitcher from "@/components/global/locale-switcher";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import navigationData from "@/data/static.json";

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SmHeader() {
  const router = useRouter();

  const { t } = useTranslation();

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navigationData[0]?.Navigation?.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.path}
            className={classNames(
              item.title ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
              'block rounded-md py-2 px-3 text-base font-medium'
            )}
            aria-current={item.title ? 'page' : undefined}
          >
            {t(item.title)}
          </Disclosure.Button>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-4 pb-3">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <Image width={50} height={50} className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">{user.name}</div>
            <div className="text-sm font-medium text-gray-500">{user.email}</div>
          </div>
          <button
            type="button"
            className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          {userNavigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  )
}

export default SmHeader



    // <nav className="container">
    //   <div id="navigation-bar">
    //     <nav>
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         {navigationData[0]?.Navigation?.map((item , key) => (
    //           <li key={key}>
    //             <Link
    //               href={item?.path}
    //               className={`nav-link ${
    //                 router?.pathname === item?.path ? "active" : ""
    //               }`}
    //             >
    //               {t(item?.title)}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //       <LocaleSwitcher />
    //     </nav>
    //   </div>
    // </nav>