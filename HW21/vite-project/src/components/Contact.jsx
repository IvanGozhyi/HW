import React from 'react';


function Contact() {

    const handleSubmitContact = () => {
        event.preventDefault();
        const contactForm = document.forms.contactCreate;
        const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
        const phoneRegex = /^\+?\d{10,15}$/;

        const newContact =
            {
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
        console.log("New contact:", newContact);

        const saved = JSON.parse(localStorage.getItem("contacts")) || [];
        saved.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(saved));

        contactForm.reset();
    };
    const handleCancel = () => {
        window.location.href = "/contact/list";
    }
    return (
        <div className="form-card">
            <form name = "contactCreate">
                <div className="form-row">
                    <input name="contactName" placeholder={"Enter the name of the contact"} />
                </div>
                <div className="form-row">
                    <input name="nickname" placeholder={"Enter the nickname of the contact"}/>
                </div>
                <div className="form-row">
                    <input name="phone" placeholder={"Enter the phone number of the contact"}/>
                </div>
                <div className="form-row">
                    <input name="email" placeholder={"Enter the email of the contact"} />
                </div>
               <div className="form-actions">
                   <button className="primary" type = "submit" onClick={handleSubmitContact}>Submit</button>
                   <button className="secondary" type = "button" onClick={handleCancel}>Cancel</button>
               </div>
            </form>
        </div>
    );
}

export default Contact;