import React from "react";
import Form from "./Components/Form/form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer position="top-center" />
      <Form />
    </div>
  );
};

export default App;
