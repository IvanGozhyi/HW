import Item from './components/Item.jsx'
import {useState} from "react";
import './App.css'

function App() {
    const emojis = ["😀", "😂", "😍", "😎", "🤔", "😭"];
    const [winner, setWinner] = useState("");
    const getWinner = () => {
        const votes = emojis.map((e) => ({
            emoji: e,
            count: Number(localStorage.getItem(`vote_${e}`)) || 0
        }))
        const max = Math.max(...votes.map(v=>v.count));
        const winners = votes.filter(v => v.count === max).map(v => v.emoji);
        return winners.join("");//if there are many winners
    }
    const clearResults = () => {
        emojis.forEach(e => localStorage.removeItem(`vote_${e}`));
        window.location.reload();
    };
    const renderWinner = () => {
        setWinner(getWinner());
    }
  return (
    <>
        <h1>Emoji voting</h1>

        {emojis.map((emoji) => (
            <Item key={emoji} emoji={emoji} />
        ))}
        <div>
            <button type = "button" onClick ={renderWinner}>Get Winner</button>
            <button type = "button" onClick = {clearResults}>Clear Results</button>
        </div>
        {winner && <div>Winner is: {winner}</div>}
    </>
  )
}

export default App
