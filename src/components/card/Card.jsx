import "./Card.css";
import "bootstrap/dist/css/bootstrap.css";
const Card = (props) => {
  return (
    <div className="row justify-content-around align-items-center p-4 ">
      {props.data.map((item) => {
        console.log(item);
        const { id, name, hour, image } = item;
        return (
          <div
            key={id}
            style={{ height: "30vh" }}
            className="col col-sm-12 col-md-6 col-lg-4 card flex-row justify-content-around align-items-center"
          >
            <div className="card-div w-25">
              <img className="card-img" src={image} alt="" />
            </div>
            <div className="w-50">
              <p className="card-name-p">Lesson Name:{name}</p>
              <p className="card-hour-p">Lesson Hour:{hour}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
