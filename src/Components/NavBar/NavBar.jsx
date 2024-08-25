import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavbarChild">
        <ul>
          <li>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            Բոլոր նվերները
          </li>
          <li>Սեղանի խաղեր</li>
          <li>Օպտիկա</li>
          <li>Կանանց թոփ 50</li>
          <li>Տղամարդկանց թոփ 50</li>
          <li>Գրասենյակային</li>
        </ul>
      </div>
    </div>
  );
}
