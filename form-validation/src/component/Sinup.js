import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

const Sinup = () => {
    const formik = useFormik({
      initialValues:{
        name:"",
        email:"",
        password:""

      },
      validationSchema: yup.object({
        name:yup.string().min(2,"Name must be 2 character").required(),
        email:yup.string().min(2,"email must be 2 character").email().required(),
        password:yup.string().min(6,"password must be 6 character").required()
      }),
      onSubmit:(values,{resetForm}) => {
        console.log(values);
        resetForm({
          values:""
        })
      }
       
    })
   console.error(formik.errors)

  return (
    <div>
        <h1>Sinup</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor='name'>Name : </label>
            <input type="text" id="name" name='name' value={formik.values.name} onChange={formik.handleChange}/><br/>
            {formik.touched.name && formik.errors.name && (<span style={{color:'red'}}>{formik.errors.name}</span>)}
        </div>
        <div>
            <label htmlFor='email'>Email : </label>
            <input type="text" id="email" name='email' value={formik.values.email} onChange={formik.handleChange}/><br/>
            {formik.touched.email && formik.errors.email && (<span style={{color:'red'}}>{formik.errors.email}</span>)}
        </div>
        <div>
            <label htmlFor='password'>Password : </label>
            <input type="text" id="password" name='password' value={formik.values.password} onChange={formik.handleChange}/><br/>
            {formik.touched.password && formik.errors.password && (<span style={{color:'red'}}>{formik.errors.password}</span>)}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Sinup
