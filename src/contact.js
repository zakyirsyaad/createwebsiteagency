import Form from "./component/contact/form";
import Maps from "./component/contact/maps";
import Footer from "./component/footer";
import './contact.css';

function Contact (){
    return (
        <div className="contain-contact">
            <div className="container-contact"> 
                <Maps />
                <Form />
            </div>
            <Footer />
        </div>
    );
}

export default Contact;