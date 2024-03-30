import { useState } from "react";
import './App.css';

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

  return <div className='App'>
    Hello...
  </div>
}

export default App;
