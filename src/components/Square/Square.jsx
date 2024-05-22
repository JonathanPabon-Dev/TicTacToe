import { useSelector, useDispatch } from "react-redux";
import { setGame } from "../../redux/gameSlice";
import circle from "../../assets/circle.svg";
import cross from "../../assets/cross.svg";
import "./Square.css";

const Square = ({ index }) => {
  const dispatch = useDispatch();
  let { data, count } = useSelector((state) => state.game);

  const handleClick = (e) => {
    let newData = Array.from(data);
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${circle}' alt="circle" />`;
      newData[index] = "o";
    } else {
      e.target.innerHTML = `<img src='${cross}' alt="cross" />`;
      newData[index] = "x";
    }
    ++count;
    console.log("data: ", newData);
    console.log("count: ", count);
    dispatch(setGame({ data: newData, count }));
  };

  return <div className="square" onClick={handleClick}></div>;
};

export default Square;
