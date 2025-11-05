import React, {useContext} from 'react';
import {LanguageContext} from "../contexts/context.js";

function Footer() {
    const {language} = useContext(LanguageContext);
    return (
        <footer className="site-footer">
            <div>{language === "EN" ?"Made by Hozhyi Ivan":"Зроблено Гожим Іваном"}</div>
        </footer>
    );
}

export default Footer;