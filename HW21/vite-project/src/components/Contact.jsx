import React, { useContext } from 'react';
import { LanguageContext } from "../contexts/context.js";

function Contact() {
    const { language } = useContext(LanguageContext) || { language: "EN" };

    const handleSubmitContact = (event) => {
        event.preventDefault();
        const contactForm = event.target;
        const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
        const phoneRegex = /^\+?\d{10,15}$/;

        const newContact = {
            contactName: contactForm.contactName.value.trim(),
            nickname: contactForm.nickname.value.trim(),
            email: contactForm.email.value.trim(),
            phone: contactForm.phone.value.trim(),
        };

        if (!phoneRegex.test(newContact.phone)) {
            alert(language === "EN" ? "Enter valid phone number." : "Введіть правильний номер телефону.");
            return;
        }

        if (!emailRegex.test(newContact.email)) {
            alert(language === "EN" ? "Enter valid email." : "Введіть правильну електронну пошту.");
            return;
        }

        const saved = JSON.parse(localStorage.getItem("contacts")) || [];
        saved.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(saved));

        contactForm.reset();
        alert(language === "EN" ? "Contact saved." : "Контакт збережено.");
    };

    const handleCancel = () => {
        window.location.href = "/contact/list";
    }

    return (
        <div className="form-card">
            <form name="contactCreate" onSubmit={handleSubmitContact}>
                <div className="form-row">
                    <input name="contactName" placeholder={language === "EN" ? "Enter the name of the contact" : "Введіть ім'я контакту"} />
                </div>
                <div className="form-row">
                    <input name="nickname" placeholder={language === "EN" ? "Enter the nickname of the contact" : "Введіть псевдонім контакту"} />
                </div>
                <div className="form-row">
                    <input name="phone" placeholder={language === "EN" ? "Enter the phone number of the contact" : "Введіть номер телефону контакту"} />
                </div>
                <div className="form-row">
                    <input name="email" placeholder={language === "EN" ? "Enter the email of the contact" : "Введіть електронну пошту контакту"} />
                </div>
               <div className="form-actions">
                   <button className="primary" type="submit">{language === "EN" ? "Submit" : "Зберегти"}</button>
                   <button className="secondary" type="button" onClick={handleCancel}>{language === "EN" ? "Cancel" : "Скасувати"}</button>
               </div>
            </form>
        </div>
    );
}

export default Contact;