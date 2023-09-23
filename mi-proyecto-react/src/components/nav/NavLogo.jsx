import { Link } from 'react-router-dom';

export const NavLogo = () => {
    return (
        <div className='center'>
            <Link to={'/'}>
                <img src="./logo.jpg" alt="Logo Zonix Store" />
            </Link>
        </div>
    );
};
    export default NavLogo