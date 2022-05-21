import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div className="gameover">
      <h1>Fim de jogo!</h1>
      <h2>
        A sua pontuação foi: <span>{score > 0 ? score : "0"}</span>
      </h2>
      <button onClick={retry}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
