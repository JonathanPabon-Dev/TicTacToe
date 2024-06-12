import { useSelector } from "react-redux";
import "./InfoWinLose.css";

const InfoWinLose = () => {
  const { playerWin } = useSelector((state) => state.game);

  return (
    <div className="info">
      {playerWin === "x" ? (
        <div>You Lose</div>
      ) : playerWin === "o" ? (
        <div>You Win</div>
      ) : (
        <div>Nobody win</div>
      )}
    </div>
  );
};

export default InfoWinLose;
