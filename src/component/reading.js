import './reading.css';
import imageReading from './image/MacBook_Air_Open_Front_L.png';

function Reading(){
    return(
        <section className="container-reading">
            <div className='img-reading'>
                <img src={imageReading}></img>
            </div>
            <div className="text-reading">
                <div className="header-reading">Reading App Interface</div>
                <div className="desc-reading">
                For Everybody else it's the simplest way
                to send big files <b>Around the World</b>. and for bigger Impact
                </div>
                <div className="button-reading">
                    <button className="btn-reading">Get Quote</button>
                </div>
                <div className="data-reading">
                    <div className="container-data">
                        <div className="number-reading">5x</div>
                        <div className="text-data-reading">Plus Growth</div>
                    </div>
                    <div className="container-data data-users">
                        <div className="number-reading">3K</div>
                        <div className="text-data-reading">Users Per Day</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reading