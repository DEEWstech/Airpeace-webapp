import Group from "../assets/Group 45.png";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="text-center bg-dark ">
      <img src={Group} alt="" />
      <div className="gap-3">
      <FaFacebook  className="" color="#ffffff" size="20px"  />
      <AiFillTwitterCircle  className="" color="#ffffff" size="20px"/>
      <FaFacebook  className="" color="#ffffff" size="20px"  />
      <AiFillTwitterCircle  className="" color="#ffffff" size="20px"/>
      <AiFillTwitterCircle  className="" color="#ffffff" size="20px"/>
      </div>
    </div>
  );
}
export default Footer;
