import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../../redux/gameSlice";
import Square from "../Square/Square";
import InfoWinLose from "../InfoWinLose/InfoWinLose";
import "./Board.css";

const Board = () => {
  const dispatch = useDispatch();
  const { lock } = useSelector((state) => state.game);

  const handleReset = () => {
    dispatch(resetGame());
  };

  const rows = Array(3).fill(0);

  return (
    <>
      <div className="container">
        <div className="board">
          {rows.map((_, rowIndex) => (
            <div key={rowIndex} className="board-row">
              {Array(3)
                .fill(0)
                .map((_, colIndex) => (
                  <Square key={colIndex} index={rowIndex * 3 + colIndex} />
                ))}
            </div>
          ))}
        </div>
        {lock && <InfoWinLose />}
      </div>
      <button type="button" className="btn-reset" onClick={handleReset}>
        RESET
      </button>
    </>
  );
};

export default Board;
