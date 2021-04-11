import React from 'react'
import { assertIsTrue } from '../utils/assert'

export default function Block(props) {
    assertIsTrue(props.sprite,'props.sprite required')
    assertIsTrue(props.position,'props.position required')

    const style = {
        boxSizing: 'border-box',
        width: '32px',
        height: '32px',
        backgroundImage: `url(${props.sprite})`,
        backgroundPosition: props.position,
    }
    return (<div style={style} />)
}