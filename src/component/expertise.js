import './expertise.css';

function Expertise(){
    return(
        <div className="container-expertise">
            <div className="header-expertise">Our Expertise</div>
            <div className="box-expertise">
                <div className="box-a bg-box">
                    <div className="text-box">
                        User Experience and Design Enterprise
                    </div>
                    <div className="more-box">More Details</div>
                </div>
                <div className="box-a bg-boxb">
                    <div className="text-box">
                        Frontend and Backend Development
                    </div>
                    <div className="more-box">More Details</div>
                </div>
            </div>
        </div>
    );
}

export default Expertise