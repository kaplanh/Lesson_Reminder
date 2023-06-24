import Header from "./components/header/Header";
import Main from "./components/main/Main";
import data from "./helper/data";
import "./App.css";

function App() {
  // console.log(data);
  return (
    <div>
      <Header />

      <Main
        data={data}
        // id={id} name={name} hour={hour} image ={image}
      />
    </div>
  );
}

export default App;
