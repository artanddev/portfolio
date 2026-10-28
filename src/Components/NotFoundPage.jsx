import {Link} from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for either does not exist or is unavailable at the current time. 
                Please contact the website owner for more details.</p>
            <Link to="/">Return to Home</Link>
        </div>
    );
}

export default NotFoundPage;