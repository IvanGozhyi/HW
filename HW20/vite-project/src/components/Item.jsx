import {useState} from "react";
import {useEffect} from "react";


export default function Item ({emoji}) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const saved = localStorage.getItem(`vote_${emoji}`);
        if (saved) setCount(Number(saved));
    }, [emoji]);

    const handleVote  = () =>{
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem(`vote_${emoji}`, newCount);
    };

    return (
        <>
            <button onClick = {handleVote}>{emoji}</button>
            <span>{count}</span>
        </>
    )
}
