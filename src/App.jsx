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
    </>
  );
}

export default App;
