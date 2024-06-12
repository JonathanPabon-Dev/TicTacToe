import { useSelector } from "react-redux";
import Board from "../Board/Board";
import Modal from "../Modal/Modal";
import "./Game.css";

const Game = () => {
  const { showModal } = useSelector((state) => state.game);

  return (
    <>
      <div className="game">
        <Board />
      </div>
      {showModal && <Modal />}
    </>
  );
};

export { Game };
