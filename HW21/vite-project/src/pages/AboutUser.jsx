import React, { useContext } from 'react';
import { LanguageContext } from "../contexts/context.js";

function AboutUser() {
    const { language } = useContext(LanguageContext) || { language: "EN" };

    return (
        <main className="app-container page-content">
            <h1 className="page-title">
                {language === "EN" ? "About user" : "Про користувача"}
            </h1>
        </main>
    );
}

export default AboutUser;