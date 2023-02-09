import Headernot from "./component/404page/headernot";
import Loading from "./component/404page/loading";
import Footer from "./component/footer";
import "./component/404page/notfound.css";

function About() {
    return (
        <div>
            <div className="container-notfound">
                <Headernot />
                <Loading />
            </div>
            <Footer />
        </div>
    );
}

export default About