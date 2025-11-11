import React from 'react';


function Header() {
    return (
        <div className="header">

            <a className="navItem" href="/">Main</a>

            <a className="navItem" href="/todo/create">Create ToDo</a>

            <a className="navItem" href="/todo/list">List of ToDos</a>

        </div>
    );
}

export default Header;