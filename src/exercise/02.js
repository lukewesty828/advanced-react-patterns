// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'
// 📜 https://reactjs.org/docs/react-api.html#reactchildren
// 📜 https://reactjs.org/docs/react-api.html#cloneelement
// 🐨 replace this with a call to React.Children.map and map each child in
// props.children to a clone of that child with the props they need using
// React.cloneElement.
// 💰 React.Children.map(props.children, child => {/* return child clone here */})
// return <Switch on={on} onClick={toggle} />

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  return React.Children.map(children, child =>
    React.cloneElement(child, {on, toggle}),
  )
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
function ToggleOn({on, children}) {
  return on ? children : null
}

// Accepts `on` and `children` props and returns `children` if `on` is false
function ToggleOff({on, children}) {
  return on ? null : children
}

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
function ToggleButton({on, toggle, ...props}) {
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
