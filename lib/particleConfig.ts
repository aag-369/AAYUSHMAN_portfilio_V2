export const particleConfig = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#00FFFF", "#A855F7", "#10B981"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.2, // Will randomize in effect
      random: {
        enable: true,
        minimumValue: 0.08,
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.08,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: {
        enable: true,
        minimumValue: 1,
      },
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: "none" as const,
      random: true,
      straight: false,
      outModes: {
        default: "out" as const,
      },
    },
    links: {
      enable: true,
      distance: 160,
      color: "#00FFFF",
      opacity: 0.06,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 80,
        duration: 0.4,
      },
    },
  },
  detectRetina: true,
};
