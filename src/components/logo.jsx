import CrownImage from "../assets/logo.png";
import TextImage from "../assets/font.png";

export const CrownLogo = () => (
  <img 
    src={CrownImage} 
    alt="Crown Logo" 
    style={{ width: "48px", height: "48px" }}  
  />
);

export const TextLogo = ({ className = "h-6" }) => (
  <img 
    src={TextImage} 
    alt="Text Logo" 
    className={`font-['Syncopate'] tracking-[0.2em] ${className}`} 
  />
);
