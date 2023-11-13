import "./App.css";
import ConfettiSlider from "./confetti-slider";
const confetti = require("canvas-confetti");
var myCanvas = document.createElement("canvas");
document.body.appendChild(myCanvas);
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
var myConfetti = confetti.create(myCanvas, {});

function App() {
  return (
    <div className="container">
      <header>ConfettiTime</header>
      <p>The Ultimate Edition</p>
      <ConfettiSlider myConfetti={myConfetti} />
    </div>
  );
}

export default App;
