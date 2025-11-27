
import Menu from '../Menu/Menu';
import './Header.css';
import {useSelector} from "react-redux";

export default function Header() {
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  return (
    <div className='header'>
      <Menu />

        {
            isLoggedIn ? (
               <></>
            ) : (
                <button type="button" className="forloginbtn" onClick={() => {
                    window.location.href = '/login';
                }}>Login</button>
            )
        }

    </div>
  )
}