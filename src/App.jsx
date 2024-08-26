import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import SelectMainBanner from "./Components/SelectMainBanner/SelectMainBanner";
import SpecialCategory from "./Components/SpecialCategory/SpecialCategory";
import Tools from "./Components/Tools/Tools";

function App() {
  return (
    <>
      <Header></Header>
      <Tools></Tools>
      <NavBar></NavBar>
      <Main></Main>
      <SelectMainBanner></SelectMainBanner>
      <SpecialCategory></SpecialCategory>
<<<<<<< HEAD
      <GiftComponent
        data={data.requested}
        title={data.titles[0]}
        hasTitle={true}
      ></GiftComponent>
      {data.newGifts.map((val, i) => {
        let bool = true;
        if (i >= 1) {
          bool = false;
        }
        return (
          <GiftComponent
            data={val}
            hasTitle={bool}
            title={data.titles[1]}
          ></GiftComponent>
        );
      })}
=======
>>>>>>> parent of b30f104 (adding gifts category)
    </>
  );
}

export default App;
