import {useState} from "react";
function Input({regExp}) {
    const [url, setUrl] = useState("");

    let goToUrl = () => {
        if(url.match(regExp)){
            console.log(url);
            window.open(url);
        }else {
            alert("Please enter a valid url");
        }
    }

    return (
        <div className="inputDiv">
            <input className="forUrl" placeholder = "Enter url" value={url}
                   onChange={(e) => setUrl(e.target.value)} />
            <button className="submit" value={url} onClick={goToUrl}>GO!</button>
        </div>

    );
}
export default Input;