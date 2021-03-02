import { useState, Menu, ParticleComponent, React } from "./components";

import "./styles.scss";

function Home() {
  const [show, setShow] = useState("#fff");
  const [showButton, setShowButton] = useState("#fff");
  const [text, setText] = useState("Hide Text");

  function hideText() {
    if (show === "transparent") {
      setShow("#fff");
      setShowButton("transparent");
      setTimeout(() => {
        setText("Hide Text");
      }, 500);

      setTimeout(() => {
        setShowButton("#fff");
      }, 1000);
    } else {
      setShow("transparent");
      setShowButton("transparent");
      setTimeout(() => {
        setText("Show Text");
      }, 500);
      setTimeout(() => {
        setShowButton("#fff");
      }, 1000);
    }
  }

  return (
    <div className="container">
      <ParticleComponent /> {/* Particle Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Menu /> {/* Componente de menu */}
        <div className="content">
          <h1 style={{ color: show }}>Welcome!</h1>
          <div id="h3Group">
            <h3 style={{ color: show }}>
              This is Moon Parties, a simple application for you to find parties
              in which you want to participate.
            </h3>
            <h3 style={{ color: show }}>
              Click on the second option in the "Parties" menu to see the
              parties that are going on.
            </h3>
            <h3 style={{ color: show }}>
              Or if you prefer, enjoy the beautiful space, and follow the stars
              that are in your background.
            </h3>
          </div>
          <button style={{ color: showButton }} id="hide" onClick={hideText}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
