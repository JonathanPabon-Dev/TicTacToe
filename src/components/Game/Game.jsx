import { useDispatch } from "react-redux";
import { resetGame } from "../../redux/gameSlice";
import Board from "../Board/Board";
import "./Game.css";

const Game = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <div className="game">
      <Board />
      <button type="button" className="btn-reset" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default Game;
