import React from 'react';
import "@testing-library/jest-dom";
import Home from "../../../src/pages/index";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("renders a home page", () => {
    render(<Home />);
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
  });

  it("elements are have local keys for translation", () => {
    render(<Home />);
    // check if adds properly
    expect(screen.getByTestId("title")).toHaveTextContent("home_title_key");
    expect(screen.getByTestId("description")).toHaveTextContent("home_description_key");
  });
});



// import LocaleSwitcher from "@/components/global/locale-switcher";
// 
// import GiftboxIcon from "@/assets/icons/GiftboxIcon";
// import CartIcon from "@/assets/icons/CartIcon";
// import WishlistIcon from "@/assets/icons/WishlistIcon";
// import UserIcon from "@/assets/icons/UserIcon";
// import PaymentIcons from "@/assets/icons/PaymentIcons";
// 
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useTranslation } from "next-i18next";
// import { useEffect } from "react";
// import navigationData from "@/data/static.json";
// 
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { MagnifyingGlassIcon , ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import SmHeader from "./SmHeader"
// 
// 
// 
// const userNavigation = [
//   { name: 'city 1', href: '#' },
//   { name: 'city 2', href: '#' },
//   { name: 'city 3', href: '#' },
// ]
// 
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
// 
// function Header() {
//   const router = useRouter();
// 
//   const { t } = useTranslation();
// 
//   useEffect(() => {
//     let dir = router.locale == "ar" ? "rtl" : "ltr";
//     let lang = router.locale == "ar" ? "ar" : "en";
//     document.querySelector("html").setAttribute("dir", dir);
//     document.querySelector("html").setAttribute("lang", lang);
//   }, [router.locale]);
// 
//   return (
//     <Disclosure as="header" className="bg-white shadow">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
//             <div className="relative flex h-16 ">
//               <div className="relative z-10 flex px-2 lg:px-0">
//                 <div className="flex  items-center justify-between w-auto">
//                   <img
//                     className="block h-8 w-auto"
//                     src="/assets/logo/fotshork.svg"
//                     alt="Your Company"
//                   />
// 
//                 <Menu as="div" className="relative ml-4 flex-shrink-0">
//                   <div className={`${router.locale == "ar" ? "mt-0 mr-4 mb-0 ml-2" : "mr-8"}`}>
//                     <Menu.Button className="text-xs flex items-center ring-1 ring-inset gap-2 w-full justify-center rounded-md border-0 border-gray-300 bg-white px-2 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50">
// 			                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
// 			                {t("All Cities")}
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className={`absolute ${router.locale == "ar" ? "right" : "left"}-0 z-10 mt-2 w-48 origin-top-${router.locale == "ar" ? "right" : "left"} rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
//                       {userNavigation.map((item) => (
//                         <Menu.Item key={item.name}>
//                           {({ active }) => (
//                             <a
//                               href={item.href}
//                               className={classNames(
//                                 active ? 'bg-gray-100' : '',
//                                 'block py-2 px-4 text-sm text-gray-700'
//                               )}
//                             >
//                               {item.name}
//                             </a>
//                           )}
//                         </Menu.Item>
//                       ))}
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
// 
//                 <LocaleSwitcher />
//                 </div>
//               </div>
//               <div className="flex justify-end gap-40 w-full">
// 					<div className="relative z-0 flex items-center justify-center px-2">
// 						<div className="w-full">
// 						  <label htmlFor="search" className="sr-only">
// 						    Search
// 						  </label>
// 						  <div className="relative">
// 						    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// 						      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
// 						    </div>
// 						    <input
// 						      id="search"
// 						      name="search"
// 						      className="block w-96 rounded-md border-0 ring-1 ring-inset bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:text-gray-900 focus:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 sm:text-sm"
// 						      placeholder="Search"
// 						      type="search"
// 						    />
// 						  </div>
// 						</div>
// 					</div>
// 	              
// 	              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
// 
// 		            <div className="flex gap-3">
// 		            	<button className="border-2 border-primary-500 p-1 flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
// 		                	<UserIcon className="h-6 w-6 text-primary-500" />
// 		                </button>
// 
// 
// 		                <button className="border-2 border-primary-500 p-1 flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
// 		                	<WishlistIcon className="h-6 w-6 text-primary-500" />
// 		                </button>
// 
// 		                <button className="border-2 border-primary-500 p-1 flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
// 		                	<CartIcon className="h-6 w-6 text-primary-500" />
// 		                </button>
// 
// 		                <button className="border-2 border-primary-500 p-1 flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
// 		                	<GiftboxIcon className="h-6 w-6 text-primary-500" />
// 		                </button>
// 		            </div>
// 	              </div>
//               </div>
//             </div>
//             <nav className="hidden lg:flex lg:space-x-8 lg:py-2 items-center justify-between" aria-label="Global">
//             	<div className="lg:flex lg:mx-2 lg:py-2">
// 		            {navigationData[0]?.Navigation?.map((item , key) => (
// 		                <Link
// 		                	key={key}
// 		                  	href={item?.path}
// 							className={`nav-link mx-2 ${
// 								router?.pathname === item?.path ? "text-primary-500" : ""
// 							}`}
// 		                >
// 		                  {t(item?.title)}
// 		                </Link>
// 		            ))}
//             	</div>
// 
// 	            <div>{t("more")}</div>
//             </nav>
//           </div>
// 
//           {/* <SmHeader /> */}
//         </>
//       )}
//     </Disclosure>
//   )
// }
// 
// export default Header