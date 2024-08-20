import { useState } from 'react'
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";

function App() {
      const  [inputValue, setInputValue] =  useState('');

    const  handleChange = (event) => {
         //setInputValue(event.target.value);
         console.log(event);
         };

  return (<>
  <Header />
  <Form value={inputValue} onChange={handleChange}/> 
  <Footer />
  </>);
}

export default App;
