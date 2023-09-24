import { Link } from 'react-router-dom';
import './nav.css'

export const NavLogo = () => {
    return (
        <div className='center'>
            <Link to={'/'}>
                <img src="../../../vite.svg" alt="Logo Zonix Store" />
                <p className='logo'>Zonix Store</p>
            </Link>
        </div>
    );
};
    export default NavLogo