import { Link, NavLink,useNavigate } from 'react-router-dom';
import { Form } from '../form/Form'

export const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login',{
            replace: true
        });
    }
    return(
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
            <Link className='navbar-brand' to='/'>Biblioteca</Link>

            <div className='navbar-collapse'>
                <div className='navbar-nav'>
                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} to='books'>Books</NavLink>
                </div>
            </div>
            <div className='navbar-collapese'>
                <Form />
            </div>
            <div className='navbar-collapse w-100 order-3 dual-collapse-2 d-flex justify-content-end'>
                <ul className='navbar-nav ml-auto'>
                    <span className='nav-item nav-link text-info'>
                        Guido
                    </span>
                    <button className='nav-item nav-link btn' onClick={ handleLogout }>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}