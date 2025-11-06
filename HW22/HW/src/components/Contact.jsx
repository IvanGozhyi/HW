import React from 'react';

function Contact({ onBack }) {

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
            alert("Enter valid phone number.");
            return;
        }

        if (!emailRegex.test(newContact.email)) {
            alert("Enter valid email.");
            return;
        }

        const saved = JSON.parse(localStorage.getItem("contacts")) || [];
        saved.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(saved));

        alert("Contact added successfully!");
        contactForm.reset();
        onBack();
    };

    const handleCancel = () => {
        onBack();
    };

    return (
        <div className="form-card">
            <form name="contactCreate" onSubmit={handleSubmitContact}>
                <div className="form-row">
                    <input name="contactName" placeholder="Enter the name of the contact" required />
                </div>
                <div className="form-row">
                    <input name="nickname" placeholder="Enter the nickname of the contact" />
                </div>
                <div className="form-row">
                    <input name="phone" placeholder="Enter the phone number of the contact" required />
                </div>
                <div className="form-row">
                    <input name="email" placeholder="Enter the email of the contact" required />
                </div>
                <div className="form-actions">
                    <button className="primary" type="submit">Submit</button>
                    <button className="secondary" type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
