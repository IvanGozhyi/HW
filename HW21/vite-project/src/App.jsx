import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ErrorPage from "./pages/ErrorPage.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import AboutUser from "./pages/AboutUser.jsx";
import MainPage from "./pages/MainPage.jsx";

function App() {


  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/aboutuser" element={<AboutUser/>} />
            <Route path="/contact/list" element={<ContactList />} />
            <Route path="/contact/create" element={<ContactForm /> } />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
