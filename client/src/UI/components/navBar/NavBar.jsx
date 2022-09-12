import { Link,NavLink,useNavigate } from 'react-router-dom'; 
import { Form } from '../form/Form';


export const NavBar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate("/login",{
            replace: true
        });
    }

  return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                <Link className="navbar-brand" to="/">Biblioteca</Link>
                <Form/>
            </nav>
        </header>

  )
}