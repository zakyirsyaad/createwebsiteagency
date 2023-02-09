import { Link } from 'react-router-dom';
import './loading.css';

function Loading(){
    return(
        <div className="contain-loading">
           <span class="loader"></span>
           <div className="button-loading">
            <Link to="/">
            <button className="btn-loading">
                Back to Home
            </button></Link>
           </div>
        </div>
    );
}

export default Loading