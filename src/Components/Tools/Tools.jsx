import {
  faBasketShopping,
  faEnvelope,
  faHeart,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import "./Tools.css";

export default function Tools() {
  return (
    <div className="Tools">
      <div className="ToolsChild">
        <div className="Massage">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="Icons"
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faPhone} className="Icons"></FontAwesomeIcon>
        </div>
        <div className="Logo">
          <img src={logo} alt="" />
        </div>
        <div className="Registration">
          <FontAwesomeIcon icon={faHeart} className="Icons"></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="Icons"
          ></FontAwesomeIcon>
          <button>Մուտք</button>
        </div>
      </div>
    </div>
  );
}
