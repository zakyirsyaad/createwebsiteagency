import Counting from './component/counting';
import Expertise from './component/expertise';
import Faq from './component/faq';
import Footer from './component/footer';
import Introductionvid from './component/introductionvid';
import Letsgo from './component/letsgo';
import Reading from './component/reading';
import Welcome from './component/welcome';

function Home(){
    return(
        <div>
            <Welcome />
            <Counting />
            <Introductionvid />
            <Reading />
            <Expertise />
            <Faq />
            <Letsgo />
            <Footer />
        </div>
    );
}

export default Home;