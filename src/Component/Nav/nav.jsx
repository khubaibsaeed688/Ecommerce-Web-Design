import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Category</Link></li>
                <li><Link to="/grid">Grid</Link></li>
                <li><Link to="*">Summer clothing</Link></li>
            </ul>
        </nav>
    )
}

export default Nav