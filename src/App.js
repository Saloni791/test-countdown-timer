import "./styles.css";
import { useCountdownTimer } from "use-countdown-timer";

export default function App() {
  let { countdown, start, pause } = useCountdownTimer({
    timer: 1000 * 5
  });

  function timerGame() {
    console.log("Ready....go!");
    start();
    setTimeout(() => {
      console.log("Time's up -- stop!");
      pause();
    }, 3000);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{countdown}</div>
      <button onClick={timerGame}>click</button>
    </div>
  );
}
