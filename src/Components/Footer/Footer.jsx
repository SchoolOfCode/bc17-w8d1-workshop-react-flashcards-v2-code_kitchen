import ReactLogo from "../../assets/Images/ReactLogo.png";
import Image from "../Image/Image";
import "./footer.css"

export default function Footer () {
    return ( 
        <footer className= "footer">
            <p className="footerDescription"> Built with React  
            {/* <img src={ReactLogo} alt="React Logo" className="reactLogo" width="16px" height="16px"/> */}
            <Image className="footerImage" src={ReactLogo} height="18px" width="18px"/>
            </p>
        </footer>
    )
}


{/* <img className={props.className} src={props.src} alt="description" height={props.height} width={props.width}/> */}