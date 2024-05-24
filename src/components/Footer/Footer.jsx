

import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
    return(
 
        <div className="footer-body">
                <p>&copy;Healthcare</p>
                <p>Contact number +91 9999888800 </p>
                <div className='footer-links'>
                    <Link>
                    Terms and conditions</Link>
                    <Link>Privacy policy</Link>
                </div>
        </div>
 
    )
}
 
 
export default Footer