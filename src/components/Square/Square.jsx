import { useSelector, useDispatch } from "react-redux";
import { setGame, setLock, setModal } from "../../redux/gameSlice";
import PropTypes from "prop-types";
import circle from "../../assets/circle.svg";
import cross from "../../assets/cross.svg";
import "./Square.css";

const Square = ({ index }) => {
  const dispatch = useDispatch();
  let { data, count, lock, playerWin } = useSelector((state) => state.game);

  function computerTurn(boardData) {
    const indices = [];

    boardData.forEach((value, index) => {
      if (value === "") {
        indices.push(index);
      }
    });

    const randomIndex = indices[Math.floor(Math.random() * indices.length)];

    let newData = Array.from(boardData);
    newData[randomIndex] = "x";
    ++count;

    playerWin = validateWinner(newData);
    dispatch(setGame({ data: newData, count, lock, playerWin }));
  }

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
        lock = true;
        setTimeout(() => {
          dispatch(setModal());
        }, 3000);
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = () => {
    let newData = Array.from(data);
    if (newData[index] === "" && !lock) {
      newData[index] = "o";
      ++count;

      playerWin = validateWinner(newData);
      dispatch(setGame({ data: newData, count, lock, playerWin }));

      if (newData.includes("") && !lock) {
        computerTurn(newData);
      } else {
        lock = true;
        dispatch(setLock());
        setTimeout(() => {
          dispatch(setModal());
        }, 3000);
      }
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      {data[index] === "o" ? (
        <img src={circle} alt="circle" />
      ) : data[index] === "x" ? (
        <img src={cross} alt="cross" />
      ) : (
        ""
      )}
    </div>
  );
};

Square.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Square;
