import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'

export default function Game() {

    const [x, setX] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setX((x) => (x + 1) % 4)
        }, 250)
    }, [])

    return (
        <>
            <h2 className="text-center">魔塔</h2>
            <div style={{ display: 'flex' }}>
                <Hero x={x} y={0} />
                <Hero x={x} y={1} />
                <Hero x={x} y={2} />
                <Hero x={x} y={3} />
            </div>
        </>
    )
}

