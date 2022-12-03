import { useState } from "react";

export const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({email: "", password: ""});


//   const handleChange = (event) => {
//     let name = event.target.name;
//     let val = event.target.value;

//     setValues({
//       ...values,
//       [name]: val,
//     });
//   };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("There is an Error!");
    }
  };

  const isSubmitting = (e) => {
    console.log('not subtmitting yet :)')
  }

  return {
    values,
    errors,
    // handleChange,
    handleSubmit,
    isSubmitting,
  };
};