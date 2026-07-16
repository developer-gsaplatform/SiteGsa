import { useCallback } from "react";
import { Particles } from "@tsparticles/react";

const particlesOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["repulse", "connect"],
      },
      resize: { enable: true },
    },
    modes: {
      repulse: {
        distance: 160,
        duration: 0.4,
        speed: 1.5,
        factor: 8,
        maxSpeed: 60,
        easing: "ease-out-quad",
      },
      connect: {
        distance: 140,
        links: { opacity: 0.7 },
        radius: 110,
      },
    },
  },
  particles: {
    number: {
      value: 180,
      density: { enable: true, width: 1920, height: 1080 },
    },
    color: {
      value: ["#9B7BC4", "#C6A4FF", "#5E2D91", "#ffffff", "#AA82FF", "#E0D0FF"],
    },
    links: {
      enable: true,
      distance: 140,
      color: "#9B7BC4",
      opacity: 0.35,
      width: 0.9,
    },
    move: {
      enable: true,
      speed: 0.7,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" },
      attract: {
        enable: true,
        rotate: { x: 600, y: 1200 },
      },
    },
    size: {
      value: { min: 1.0, max: 3.2 },
      animation: {
        enable: true,
        speed: 2.5,
        minimumValue: 0.6,
        sync: false,
      },
    },
    opacity: {
      value: { min: 0.25, max: 0.95 },
      animation: {
        enable: true,
        speed: 1.2,
        minimumValue: 0.15,
        sync: false,
      },
    },
    shadow: {
      enable: true,
      color: "#9B7BC4",
      blur: 10,
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.08,
        opacity: 1,
      },
    },
  },
  background: { color: "transparent" },
  detectRetina: true,
};

export default function ParticleField() {
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 w-full h-full z-[1] pointer-events-auto"
      particlesLoaded={particlesLoaded}
      options={particlesOptions}
    />
  );
}
