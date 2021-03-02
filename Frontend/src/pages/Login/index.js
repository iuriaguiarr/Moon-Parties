import {
  React,
  ParticleComponent,
  Icon,
  Link,
  faArrowLeft,
  faEnvelope,
  faLock,
} from "./components";

import "./styles.scss";

function Login() {
  return (
    <div className="container">
      <ParticleComponent /> {/* Particle Background */}
      <div className="contentLogin">
        <div className="cardLogin">
          <div className="contentCardLogin">
            <Link id="closeButton" to="/">
              <Icon icon={faArrowLeft} size="3x" color="#000" />
            </Link>
            <h1 id="titleLogin">Admin Panel</h1>
            <div className="formControlLogin">
              <div className="input">
                <Icon
                  className="inputIcon"
                  icon={faEnvelope}
                  size="3x"
                  color="#000"
                />
                <input type="email" placeholder="E-mail" required />
              </div>
              <div className="input">
                <Icon
                  className="inputIcon"
                  icon={faLock}
                  size="3x"
                  color="#000"
                />
                <input type="password" placeholder="Password" required />
              </div>
            </div>
            <button className="buttonModalLogin">Login</button>
            <a href="#pass" id="reset">
              Reset Password
            </a>
          </div>
        </div>
      </div>
      <div id="pass" class="modalLogin">
        <div className="modalContainerLogin">
          <div className="modalContentLogin">
            <a href="#fechar" id="closeButton">
              <Icon icon={faArrowLeft} size="1x" color="#000" />
            </a>

            <div className="centerLogin">
              <h5>Enter your email to reset your password!</h5>
              <div className="formControlLogin">
                <div className="input">
                  <Icon
                    className="inputIcon"
                    icon={faEnvelope}
                    size="1x"
                    color="#000"
                  />
                  <input type="email" placeholder="E-mail" required />
                </div>

                <button className="buttonModalLogin">Reset password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
