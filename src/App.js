import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { useState } from "react";
import * as yup from 'yup';
import Home from "./Home";
import Form from "./Form";
import FormSchema from "./FormSchema";
import axios from "axios";

const initialFormValues = {
  name: '', 
  size: '',
  toppings: [],
  notes: ''
};

const initalFormErrors = {
  name: '', 
  size: '',
  toppings: [],
  notes: ''
};



const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);

  const handleSubmit = () => {
    console.log("handleSubmit is being called");
    axios.post(`https://reqres.in/api/users`, formValues)
      .then(res => {
        
      })
      .catch(err => console.log(err))
      console.log(formValues);
  }

  const validate = (name, value) => {
    yup.reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    console.log(name, value);
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  };

  return (
    <div>
      <nav>
        <Link to="/">Home Screen</Link>&nbsp;
        <Link to="/pizza">Order Pizza</Link>&nbsp;
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={
          <Form 
            values={formValues} 
            change={handleChange}
            errors={formErrors}
            handleSubmit={handleSubmit}
            /> } />
      </Routes>
    </div>
  );
};
export default App;
