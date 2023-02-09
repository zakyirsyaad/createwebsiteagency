import Reactvideo from './Reactvideo';
import './introductionvid.css';

function Introductionvid(){
    return(
        <div className="container-introduction">
            <div className="header-introduction">Around 30 Projects 10 Countries</div>
            <div className="reviews">
                5.0 <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> from 06 reviews.
            </div>
            <Reactvideo />
        </div>
    );
}

export default Introductionvid