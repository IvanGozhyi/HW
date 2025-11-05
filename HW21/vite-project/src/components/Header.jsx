import React, {useContext} from 'react';
import {LanguageContext, ThemeContext} from "../contexts/context.js";

function Header() {
    const { language, setLanguage } = useContext(LanguageContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const handleLanguageChange = () => {
        setLanguage((prev) => (prev === "EN" ? "UA" : "EN"));
    }
    const handleThemeChange = () => {
        setTheme((prev) => (String(prev).toLowerCase() === "light" ? "dark" : "light"));
    }
    return (
        <header className="site-header">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><a className="nav-link" href="/">
                        {language === "EN" ? "Main page" : "Головна"}
                    </a> </li>
                    <li className="nav-item"><a className="nav-link" href="/contact/create">
                        {language === "EN" ? "Create contact" : "Додати контакт"}
                    </a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact/list">
                        {language === "EN" ? "List of contacts" : "Список контактів"}
                    </a></li>
                    <li className="nav-item"><a className="nav-link" href="/aboutuser">
                        {language === "EN" ? "About user" : "Про користувача"}
                    </a></li>
                </ul>
                <div className="header-actions">
                    <button type="button" className="btn-language" aria-label="Change language" onClick={handleLanguageChange}>{language}</button>
                    <button type="button" className="btn-theme" aria-label="Toggle theme" onClick={handleThemeChange}>{String(theme).toLowerCase()}</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;