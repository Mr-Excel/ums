import React from 'react'

function App() {
    const [val, setVal] = React.useState('')
  function onLoad() {
    const form = document.getElementById('my-form')
    console.log(form)
  }
  React.useEffect(onLoad)
  return (
      <>
      <form id="my-form">
        <input type="text" value={val} onInput={(e)=> setVal(e.target.value)}/>
        <input type="text" />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default App
