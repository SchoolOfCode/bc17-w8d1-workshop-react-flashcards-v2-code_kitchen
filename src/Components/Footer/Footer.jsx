import ReactLogo from "../../assets/Images/ReactLogo.png";

export default function Footer () {
    return ( 
        <footer className= "footer">
            <p className="footerDescription"> Built with React 
            <img src={ReactLogo} alt="React Logo" className="reactLogo" width="16px" height="16px"/>
            </p>
        </footer>
    )
}