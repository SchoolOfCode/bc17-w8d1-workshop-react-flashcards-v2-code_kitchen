// import { useState } from 'react'
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Flashcards from "./Components/Flashcards/Flashcards"


function App() {
  return (
    <>
      <Header />
      <Form />
      <Flashcards />
      <Footer />
    </>
  );
}

export default App;
