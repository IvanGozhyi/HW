import React, {useContext} from 'react';
import {LanguageContext} from "../contexts/context.js";

function MainPage() {
    const {language} = useContext(LanguageContext);
    return (
        <main className="app-container page-content">
            <h1 className="page-title">
                {language === "EN" ? "Main page" : "Головна"}
            </h1>
        </main>
    );
}

export default MainPage;