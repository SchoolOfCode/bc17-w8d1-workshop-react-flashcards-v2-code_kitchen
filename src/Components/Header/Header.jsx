import Image from "../Image/Image"
import ImageIcon from "../../assets/Images/ReactLogo.png"
import "./header.css" 

export default function Header () {
    return ( <header className="header" >
{/* <img className="headerImg" src="src/assets/Images/ReactLogo.png" alt="React logo image" /> */}
<Image className="headerImage" src={ImageIcon} height="30px" width="30px" />
<h1 className="headerTitle"> React Flashcards </h1>
<p className="headerDescription"> 🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌</p>
</header>
    )
}; 