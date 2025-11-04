import React from 'react';

function Header() {

    return (
        <header className="site-header">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><a className="nav-link" href="/">Main page</a> </li>
                    <li className="nav-item"><a className="nav-link" href="/contact/create">Create contact</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact/list">List of contacts</a></li>
                    <li className="nav-item"><a className="nav-link" href="/aboutuser">About User</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;