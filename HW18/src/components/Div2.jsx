import {useState} from "react";
function Div2(){
    const [counts, setCount] = useState(0);
    let Link = null;
    if (counts === 1) {
        return (
            <a href="https://www.imdb.com/title/tt10366206/?ref_=nv_sr_srsg_3_tt_5_nm_3_in_0_q_john%2520wi">Click here!</a>
        );
    }
    return (
        <div>
            <button className="film" onClick={()=>{setCount(counts + 1)}}>See the film</button>
        </div>
    );
}
export default Div2;
