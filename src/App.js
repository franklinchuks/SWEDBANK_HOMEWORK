import { useState } from "react";
import './App.css';
import FormInput from './components/FormInput';

const App = () => {

  const [values, setValues] = useState({
    invoiceAmount: 10000,
    advanceRate: 90,
    interestRate: 3,
    paymentTerm: 30,
    commFee: 0.3,
  });

  const inputs = [
    {
      id: 1,
      name: "invoiceAmount",
      type: "number",
      value: "10000",
      errorMessage: "Please fill out this field.",
      label: "Invoice amount",
      required: true
    },
    {
      id: 2,
      name: "advanceRate",
      type: "number",
      label: "Advance rate",
      options: [
        { value: "75", label: "75%" },
        { value: "80", label: "80%" },
        { value: "85", label: "85%" },
        { value: "90", label: "90%" }
      ]
    },
    {
      id: 3,
      name: "interestRate",
      type: "number",
      errorMessage: "Please fill out this field.",
      label: "Interest rate",
      required: true
    },
    {
      id: 4,
      name: "paymentTerm",
      type: "number",
      label: "Payment term",
      options: [
        { value: "30", label: "75 days" },
        { value: "60", label: "80 days" },
        { value: "90", label: "85 days" },
        { value: "120", label: "120 days" }
      ]
    },
    {
      id: 5,
      name: "commFee",
      type: "number",
      errorMessage: "Please fill out this field.",
      label: "Commission fee",
      required: true
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  return <div className='App'>
    <form onSubmit = {handleSubmit}>
      <h2>Factoring calculator</h2>
      {inputs.map((input) => (
      <FormInput key = {input.id} {...input} value = {values[input.name]} onChange = {onChange} />
      ))}
      <button className="infoBtn" id="calculate">Calculate</button>
      </form>
  </div>
}

export default App;
