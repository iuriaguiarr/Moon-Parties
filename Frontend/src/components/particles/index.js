import React, { Component } from "react";
import Particles from "react-particles-js";

export default class index extends Component {
  render() {
    return (
      <div>
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 600,
                },
              },
              color: {
                value: "#ffffff",
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                },
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: false,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                out_mode: "out",
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 6,
                  duration: 2,
                  opacity: 0.5,
                  speed: 3,
                },
                push: {
                  particles_nb: 4,
                },
              },
            },
            retina_detect: false,
          }}
        />
      </div>
    );
  }
}
