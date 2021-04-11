import { render } from 'react-dom'
import { createElement } from 'react'

import './styles/reset.css'
import './styles/utilities.css'
import Game from './Game.jsx'

render(createElement(Game), document.querySelector('#app'))
