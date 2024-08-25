import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="HeaderChild">
        <div className="SelectLanguage">
          <select name="" id="">
            <option value="">AM</option>
            <option value="s">RU</option>
          </select>
        </div>
        <div className="Dilivery">
          <a href="#">ԱՌԱՔՈՒՄ ԵՒ ՎՃԱՐՈՒՄ</a>
          <a href="#">ԿՈՆՏԱԿՏՆԵՐ</a>
        </div>
        <div className="Serach">
          <form action="">
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            <input type="text" placeholder="Ապրանքի որոնում" />
          </form>
        </div>
      </div>
    </div>
  );
}
