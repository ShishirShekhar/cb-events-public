import React from 'react'
import Form from './Components/Form/form';
// import User from "./Components/user";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer position='top-center'/>
      <Form/>
      {/* <User/> */}
      </div>
  )
}

export default App