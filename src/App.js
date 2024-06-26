import { useState } from "react";
import './App.css';
import FormInput from './components/FormInput';
import FormOutput from './components/FormOutput';

const App = () => {

  const [values, setValues] = useState({
  calc_d5: 10000,
  calc_d6: 90,
  calc_d7: 3,
  calc_d8: 30,
  calc_d9: 0.3,
  invoiceAmountPercent: "0",
  financingCharge: "0.00"
  });

  const labels = [
    {
      id: 1,
      name: "invoiceAmountPercent",
      type: "number",
      label: "Invoice Amount Percent",
      value: values.invoiceAmountPercent
    },
    {
      id: 2,
      name: "financingCharge",
      type: "number",
      label: "Financing Charge",
      value: values.financingCharge,
      step: "0.01"
    }
  ]

  const inputs = [
    {
      id: 1,
      name: "calc_d5",
      type: "number",
      value: "10000",
      errorMessage: "Please fill out this field.",
      label: "Invoice amount",
      required: true
    },
    {
      id: 2,
      name: "calc_d6",
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
      name: "calc_d7",
      type: "number",
      errorMessage: "Please fill out this field.",
      label: "Interest rate",
      required: true
    },
    {
      id: 4,
      name: "calc_d8",
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
      name: "calc_d9",
      type: "number",
      errorMessage: "Please fill out this field.",
      label: "Commission fee",
      required: true
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  
    //Parse form input values to float
    const invoiceAmount = parseFloat(values.calc_d5);
    const advanceRate = parseFloat(values.calc_d6) / 100;
    const interestRate = parseFloat(values.calc_d7) / 100;
    const paymentTerm = parseFloat(values.calc_d8);
    const commFee = parseFloat(values.calc_d9) / 100;
  
    //Perform calculation based on parsed values
    //amount advanced
    const amountAdvanced = invoiceAmount * advanceRate;

    //daily interest cost
    const dailyInterestCost = amountAdvanced * paymentTerm * (interestRate / 365);

    //financing charge
    const financingCharge = dailyInterestCost + (commFee * invoiceAmount);
    const invoiceAmountPercent = ((financingCharge * 100) / invoiceAmount);
  
    // Update state with the calculated values
    setValues({
      ...values,
      financingCharge: (financingCharge).toFixed(2),
      invoiceAmountPercent: (invoiceAmountPercent).toFixed(2)
    });
  };
  
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  return <div className ='App'>
    <form onSubmit = {handleSubmit}>
      <div className="formField">
        <h2>Factoring calculator</h2>
        {inputs.map((input) => (
        <FormInput key = {input.id} {...input} value = {values[input.name]} onChange = {onChange} />
        ))}
        <button className="infoBtn" id="calculate-factoring">Calculate</button>
      </div>

      <div className="formResult">
        <label>Invoice financing expenses</label>
        {labels.map((value) => (
        <FormOutput key = {value.id} {...value} value = {values[value.name]} onChange = {onChange} />
        ))}
        <button className="warningBtn">Apply</button>
      </div>
    </form>
  </div>
}

export default App;
