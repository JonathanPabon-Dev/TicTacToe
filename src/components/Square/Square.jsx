import { useSelector, useDispatch } from "react-redux";
import { setGame } from "../../redux/gameSlice";
import PropTypes from "prop-types";
import circle from "../../assets/circle.svg";
import cross from "../../assets/cross.svg";
import "./Square.css";

const Square = ({ index }) => {
  const dispatch = useDispatch();
  let { data, count } = useSelector((state) => state.game);

  function validateWinner(squares) {
    const winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerCombinations.length; i++) {
      const [a, b, c] = winnerCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

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
    dispatch(setGame({ data: newData, count }));

    validateWinner(newData);
  };

  return <div className="square" onClick={handleClick}></div>;
};

Square.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Square;
