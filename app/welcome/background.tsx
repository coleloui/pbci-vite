import type { JSX } from 'react'
import { useEffect, useState } from 'react'
import classNames from 'classnames'


import Tyler from './Tyler.jpg'
import Trusses from './Trusses.jpg'
import Const from './1116220932_HDR.jpg'

export function Background(): JSX.Element {
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
        <div className='md:h-275 min-h-200'>
            {/* <img src={pic} className={classNames('opacity-0 -z-10', i == index ? 'arrive' : 'drop')} /> */}
            {picArr.map((img, i) => (
                <img key={i} src={img} className={classNames('opacity-0 -z-10', i == index ? 'arrive' : 'drop')} />
            ))}
        </div>
    )
}