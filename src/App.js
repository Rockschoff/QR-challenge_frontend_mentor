import "./styles.css";
import { qr } from "./image-qr-code.png";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="card-body">
          <img src={require("./image-qr-code.png")} alt="qr_code" />
          <h4>Improve your front-end skills by building projects</h4>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
