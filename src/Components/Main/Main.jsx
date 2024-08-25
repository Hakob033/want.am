import banner from "../../assets/111.jpeg";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="MainChild">
        <div className="Information">
          <h2>Մեր հասցեն</h2>
          <p>
            Մենք ունենք խանութ-սրահ Երևանի կենտրոնում։ Հրավիրում ենք գնումների
            Հյուսիսային պողոտա 6/2 հասցեում գտնվող Տաշիր Սթրիթ առևտրի կենտրոն՝
            -1 հարկ:
          </p>
          <button>Ավելին</button>
        </div>
        <div className="Picture">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}
