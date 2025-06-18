import type { JSX } from 'react'

import pelican from './PeliSmall.png'

export function Header(): JSX.Element {
    return (
        <header>
            <nav className="p-4 lg:mx-6 bg-transparent">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://pelicanbuilding.com" className="flex items-center">
                        <img src={pelican} className="mr-3 lg:h-24 xs:h-10 h-16 object-contain" alt="Pelican Logo" />
                        <span className="self-center text-xl font-semibold  dark:text-pbci">Pelican Building Contracting, Inc.</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a href="#" className="text-pbci hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none lg:block hidden">About Us</a>
                        <a href="#" className="text-pbci hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none lg:block hidden">Gallery</a>
                        <a href="#" className="text-pbci hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none lg:block hidden">Contact Us</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-pbci rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}