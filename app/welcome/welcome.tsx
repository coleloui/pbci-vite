import { useEffect, useState } from 'react'
import { Header } from '~/header/header'
// import { Background } from './background'

import Tyler from './Tyler.jpg'
import Trusses from './Trusses.jpg'
import Const from './1116220932_HDR.jpg'
import classNames from 'classnames'

export function Welcome() {

  const [pic, setPic] = useState(Tyler)
  const [index, setIndex] = useState(0)
  const picArr = [Tyler, Trusses, Const]

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((index + 1) % picArr.length)
      setPic(picArr[index])
    }, 5500)

    return () => {
      clearInterval(id)
    }
  }, [index])

  return (

    <div className='bg-white'>
      <Header />
      <main className={classNames("flex items-center justify-center pb-4 md:h-275 min-h-200")}>
        <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
          <div className="max-w-[800px] w-full space-y-6 px-6">
            <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-10">
              <p className="text-pbci font-bold text-2xl text-center text-wrap">
                Do It Save, Do It Right, Keep It Clean, Customer Service
              </p>
              <p className=" text-pbci font-bold text-xl text-center text-wrap">
                Providing Quality Craftsmanship and Service for Over 30 Years
              </p>
            </nav>
          </div>
        </div>
      </main>
    </div>

  )
}

// {
//   href: "https://reactrouter.com/docs",
//   text: "React Router Docs",
//   icon: (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="20"
//       viewBox="0 0 20 20"
//       fill="none"
//       className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
//     >
//       <path
//         d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   ),
// }