import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSWAPI} from "../store/swapiSlice.js";

function NavBar() {
    const dispatch = useDispatch();
    const active = useSelector(s => s.swapi.activeCategory);

    return (
        <div>
            <nav className="navbar">
                <button onClick={() => dispatch(fetchSWAPI("people"))}>People</button>
                <button onClick={() => dispatch(fetchSWAPI("planets"))}>Planets</button>
                <button onClick={() => dispatch(fetchSWAPI("vehicles"))}>Vehicles</button>
            </nav>
        </div>
    );
}

export default NavBar;