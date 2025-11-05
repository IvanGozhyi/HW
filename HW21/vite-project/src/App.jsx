import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ErrorPage from "./pages/ErrorPage.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import AboutUser from "./pages/AboutUser.jsx";
import MainPage from "./pages/MainPage.jsx";
import {LanguageContext, ThemeContext} from "./contexts/context.js";
import {useState, useEffect} from "react";

function App() {
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("EN");

    useEffect(() => {
        const normalized = String(theme).toLowerCase();
        document.body.classList.remove('theme-light', 'theme-dark');
        document.body.classList.add(`theme-${normalized}`);
        return () => {
            document.body.classList.remove('theme-light', 'theme-dark');
        };
    }, [theme]);

    return (
        <BrowserRouter>
            <div className={"app-root theme-" + theme.toLowerCase()}>
                <ThemeContext.Provider value={{theme, setTheme}}>
                    <LanguageContext.Provider value={{language, setLanguage}}>
                        <Header />

                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/aboutuser" element={<AboutUser />} />
                            <Route path="/contact/list" element={<ContactList />} />
                            <Route path="/contact/create" element={<ContactForm />} />
                            <Route path="*" element={<ErrorPage />} />
                        </Routes>

                        <Footer />
                    </LanguageContext.Provider>
                </ThemeContext.Provider>
            </div>
        </BrowserRouter>
    );
}

export default App
