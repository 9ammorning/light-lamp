import { useState } from "react";
import "./App.css";

export default function App() {
  const [isLit, setIsLit] = useState(false);

  return (
    <div className="page">
      <header className="top-bar">
        <span className="time">早上九點</span>
        <nav>
          <a href="#" className="link">光明燈</a>
          <a href="#" className="link">關於我</a>
        </nav>
      </header>

      <main className="center">
  <div className="content">
    <div className="texts">
      <p>線上點燈祈福</p>
      <p>數不清的願望都能成真</p>
    </div>

    <img
      src={isLit ? "/lamp-lit.png" : "/lamp-default.png"}
      alt="光明燈"
      className="lamp-img"
      onMouseEnter={() => setIsLit(true)}
      onMouseLeave={() => setIsLit(false)}
    />

    <button className="btn">我要點燈</button>
  </div>
</main>

    </div>
  );
}
