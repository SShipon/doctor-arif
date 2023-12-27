import { useState } from "react";
import { useForm } from "react-hook-form"

export default function App() {
  const { register, getValues } = useForm()
  

  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };
   





  return (
    <form>
      <input {...register("test")} />
      <input {...register("test1")} />
  

      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <button
        type="button"
        onClick={() => {
          const values = getValues() // { test: "test-input", test1: "test1-input" }
          const singleValue = getValues("test") // "test-input"
          const multipleValues = getValues(["test", "test1"])
// ["test-input", "test1-input"]
        }}
      >
        Get Values
      </button>
    </form>



  )
}