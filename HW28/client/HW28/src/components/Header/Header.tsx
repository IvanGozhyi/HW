import Menu from '../Menu/Menu';
import './Header.css';
import {useAppSelector} from "../../store/hooks.ts";

export default function Header() {
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
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