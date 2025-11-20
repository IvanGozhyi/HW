import React from 'react';
import {useSelector} from "react-redux";

function MainPage() {
    const {data, status, error} = useSelector((state) => state.swapi);
    return (
        <div>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && data && (
                <ul>
                    {Object.entries(data).map(([category, items]) => (
                        <li key={category}>
                            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>{item.name || item.title}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}

export default MainPage;