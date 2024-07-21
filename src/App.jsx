import meals from './assets/components/Data'
import { useState } from 'react'

function App() {
  const [inpValue, setInpValue] = useState(null)
  const [outputValue, setOutputValue] = useState(false)
  const [hide, setHide] = useState(false)

  function search() {
    let result = meals.find((items) => items.name.toLowerCase() === inpValue)

    if (result) {
      setOutputValue(result);
      setHide(false)
    } else {
      setHide(true)
      setOutputValue(false);
    }
    document.querySelector("#inp").value = "";
  }

  return (
    <>
      <p>
         <ul>
            <li>Karahi</li>
            <li>Korma</li>
            <li>Biryani</li>
        </ul>
      </p>
      <input placeholder='Enter Dish Name' type="text" id='inp' onChange={(event) => {
        setInpValue(event.target.value.toLowerCase())
      }} />
      <button onClick={search}>search</button>

      {outputValue &&
        <>
          <h1>{outputValue.name}</h1>
          <h3>{outputValue.recipe}</h3>
        </>}
      {hide &&
        <h1>No Result Found</h1>
      }
    </>
  )
}

export default App