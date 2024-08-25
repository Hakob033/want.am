import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import SelectMainBanner from "./Components/SelectMainBanner/SelectMainBanner";
import Tools from "./Components/Tools/Tools";

function App() {
  return (
    <>
      <Header></Header>
      <Tools></Tools>
      <NavBar></NavBar>
      <Main></Main>
      <SelectMainBanner></SelectMainBanner>
    </>
  );
}

export default App;
