import type { JSX } from 'react'
import { useEffect, useState } from 'react'

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
        }, 2000)

        return () => {
            clearInterval(id)
        }
    }, [index])

    return (
        <div style={{ zIndex: -1 }}>
            <img src={`${pic}`} className='testing' />
        </div>
    )
}