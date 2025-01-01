import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticleEffect = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "connect", // Emit particles while hovering
                        },
                        onClick: {
                            enable: true,
                            mode: "push", // Attract particles to mouse on click
                        },
                        resize: true,
                    },
                    modes: {
                        trail: {
                            delay: 0.02,
                            quantity: 10, // Number of particles per hover frame
                            particles: {
                                color: {
                                    value: "#ff0000",
                                },
                                size: {
                                    value: { min: 2, max: 5 },
                                },
                                move: {
                                    speed: 3,
                                    direction: "none",
                                    outModes: {
                                        default: "out", // Particles move out of screen bounds
                                    },
                                },
                            },
                        },
                        attract: {
                            distance: 200,
                            duration: 0.4, // Attraction duration
                            factor: 2, // Speed factor
                        },
                    },
                },
                particles: {
                    life:{
                        duration:0.5,
                    },
                    number: {
                        value: 100, // Default number of particles
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff", // Default particle color
                    },
                    shape: {
                        type: "circle", // Circular particles
                    },
                    opacity: {
                        value: {min:0.1,max:0.7},
                    },
                    size: {
                        value: { min: 3, max: 8 }, // Size range for default particles
                    },
                    move: {
                        enable: true,
                        speed: 2, // Default particle speed
                        direction: "none",
                        outModes: {
                            default: "bounce",
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleEffect;
