import React from "react";
import { Menu, ParticleComponent } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

function Parties() {
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Menu admin={true} /> {/* Componente de menu */}
        {/* Cards */}
        <h1 id="title">Admin Panel</h1>
        <main className="cardsGroup">
          <section className="cards">
            {[1, 2, 3].map((counter) => (
              <div
                className="card"
                onClick={() =>
                  document.getElementById("link" + counter).click()
                }
              >
                <a
                  id={"link" + counter}
                  href={"#" + counter}
                  style={{ color: "transparent" }}
                >
                  Redirecionar
                </a>
                <div className="contentCard">
                  <p className="titleCard">Title {counter}</p>
                  <p className="textCard">Location {counter}</p>
                  <p className="textCard">Date Hour {counter}</p>
                  <p className="textCard">Price {counter}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
        {/* Cards */}
      </div>
      {/* Modal */}
      {[1, 2, 3].map((counter) => (
        <div id={counter} class="modal">
          <div className="modalContainer">
            <div className="modalContent">
              <a href="#fechar" id="closeButton">
                <FontAwesomeIcon icon={faArrowLeft} size="1x" color="#000" />
              </a>
              <div className="malu">
                <h3>Title {counter}</h3>
              </div>

              <h5>Location {counter}</h5>
              <h5>Date Hour {counter}</h5>
              <h5>Price {counter}</h5>
              <div className="malu">
                <h5>Description {counter}</h5>
              </div>

              <div className="ZeA">
                <h5>Enter your email to participate!</h5>
                <div className="formControl">
                  <div className="input">
                    <FontAwesomeIcon
                      className="inputIcon"
                      icon={faEnvelope}
                      size="1x"
                      color="#000"
                    />
                    <input type="email" placeholder="E-mail" required />
                  </div>
                </div>
                <button className="buttonModal">Participate</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Modal */}
    </div>
  );
}

export default Parties;
