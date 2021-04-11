import React from 'react'
import Block from './Block'

import brave from '../images/brave.png'
import { assertIsNumber } from '../utils/assert'

export default function Hero(props) {
    const { x, y } = props
    assertIsNumber(x, 'props.x must be number')
    assertIsNumber(y, 'props.y must be number')

    return (<Block sprite={brave} position={`${x * -32}px ${y * -32}px`} />)
}