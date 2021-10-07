// import React, { useContext } from 'react'
// import { FormContext } from './form'

// export function FormInput(props: {
//   label: any
//   type?: 'text' | undefined
//   name: any
// }) {
//   const { label, type = 'text', name } = props

//   const formContext = useContext(FormContext)
//   const { form, handleFormChange } = formContext

//   return (
//     <div className="FormInput">
//       <label>{label}</label>
//       <input
//         type={type}
//         name={name}
//         value={form[name]}
//         onChange={handleFormChange}
//       />
//     </div>
//   )
// }
