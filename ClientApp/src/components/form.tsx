// import React, { useState } from 'react';

// export const FormContext = React.createContext({
//   form: {}
// });

// export function Form(props: { children: any; submit?: (() => void) | undefined; initialValues: any; }) {
//   const { children, submit = () => {}, initialValues } = props;

//   const [form, setForm] = useState(initialValues);

//   const handleFormChange = (event: { target: { name: any; value: any; }; }) => {
//     // Get the name of the field that caused this change event
//     // Get the new value of this field
//     const { name, value } = event.target;

//     // Update state
//     // Assign new value to the appropriate form field
//     setForm({
//       ...form,
//       [name]: value
//     });
//   };

//   return (
//     <form className="Form">
//       <FormContext.Provider value={{
//         form,
//         handleFormChange
//       }}>
//         {children}
//       </FormContext.Provider>

//       <button type="button" onClick={() => submit(form)}>
//         Submit
//       </button>
//     </form>
//   );
// }
