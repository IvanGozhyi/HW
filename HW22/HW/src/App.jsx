import React, { useState } from 'react';
import Contact from './components/Contact.jsx';
import ContactList from './components/ContactList.jsx';

function App() {
    const [page, setPage] = useState("list");

    const goToList = () => setPage("list");
    const goToCreate = () => setPage("create");

    return (
        <div className="app-container">
            <header className="header">
                <nav className="nav">
                    <button
                        className={`nav-btn ${page === "list" ? "active" : ""}`}
                        onClick={goToList}
                    >
                        Contact List
                    </button>
                    <button
                        className={`nav-btn ${page === "create" ? "active" : ""}`}
                        onClick={goToCreate}
                    >
                        Add Contact
                    </button>
                </nav>
            </header>

            <main className="page-content">
                {page === "list" ? <ContactList /> : <Contact onBack={goToList} />}
            </main>
        </div>
    );
}

export default App;
