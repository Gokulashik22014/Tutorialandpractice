import React from 'react'
import axios from 'axios'
const App:React.FC = () => {
  const handleOnClick=async()=>{
    try {
      await axios.post("https://8000-01jg6ynpae1mdjcekfbzjzw72v.cloudspaces.litng.ai/", {
        params: {
          input: "Hi who are you and what are you capable of"
        }
      }).then((res) => console.log(res))
        .catch((err) => console.error(err));
      
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <p>Click this button for response</p>
      <button onClick={handleOnClick}>Click me</button>
    </div>
  )
}

export default App