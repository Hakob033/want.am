import "./SpecialCategory.css";
import img1 from "../../assets/SpecialCategoriImages/68292-1.jpeg.jpg";
import img2 from "../../assets/SpecialCategoriImages/71102-1.jpeg.jpg";
import img3 from "../../assets/SpecialCategoriImages/U0437307_big.jpeg.jpg";

export default function SpecialCategory() {
  return (
    <div className="Special">
      <div className="SpecialChild">
        <div className="SpecialCard">
          <img src={img1} alt="" />
          <div className="SpecialCardInfo">
            <h2>Կանանց նվերներ</h2>
            <p>219 իր</p>
            <span>Սկսած 3900֏</span>
          </div>
        </div>
        <div className="SpecialCard">
          <img src={img3} alt="" />
          <div className="SpecialCardInfo">
            <h2>Տղամարդկանց նվերներ</h2>
            <p>309 իր</p>
            <span>Սկսած 3000֏</span>
          </div>
        </div>
        <div className="SpecialCard">
          <img src={img2} alt="" />
          <div className="SpecialCardInfo">
            <h2>Հոբբի</h2>
            <p>1721 իր</p>
            <span>Սկսած 2500֏</span>
          </div>
        </div>
      </div>
    </div>
  );
}
