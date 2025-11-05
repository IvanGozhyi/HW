import React, {useState, useEffect, useContext} from 'react';
import {LanguageContext} from "../contexts/context.js";


function ContactList() {
    const [contacts, setContacts] = useState([]);

    const { language } = useContext(LanguageContext) || { language: "EN" };

    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
        setContacts(savedContacts);
    }, []);


    const deleteContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    };

    return (
        <div className="contact-list">

            <h1 className="page-title">{language === "EN" ? "Contacts" : "Контакти"}</h1>
            <ul>
                {contacts.map((c, i) => (
                    <li key={i} className="contact-item">
                        <div>
                            <div><strong>{c.contactName}</strong> ({c.nickname})</div>
                            <div className="contact-meta">{c.phone} · {c.email}</div>
                        </div>
                        <div>
                            <button className="delete-btn" onClick={() => deleteContact(i)}>✕</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;
