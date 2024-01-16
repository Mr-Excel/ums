import Names from "./test"

function App() {
  return (
    <>
      <p>
        My First Name is <b>{Names.first}</b> and last name is <b>{Names.last}</b>
        <sup>({ Names.full})</sup>
     </p>
    </>
  )
}

export default App
