import Card from "../card/Card";
import "./Main.css";

const Main = (props) => {
  // console.log(data);
  return (
    <div className="container">
      <Card data={props.data} />
    </div>
  );
};

export default Main;
