import React, { useState, useEffect, useRef } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Engine } from "@tsparticles/engine";

const ParticleBackground: React.FC = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: any): Promise<void> => {
        console.log(container);
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#0d47a1",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        );
    }

    return <></>;
};

// const FluidBackground: React.FC = () => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         if (!ctx) return;

//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const particles: { x: number; y: number; radius: number; vx: number; vy: number }[] = [];
//         const particleCount = 100;

//         for (let i = 0; i < particleCount; i++) {
//             particles.push({
//                 x: Math.random() * canvas.width,
//                 y: Math.random() * canvas.height,
//                 radius: Math.random() * 2 + 1,
//                 vx: Math.random() * 2 - 1,
//                 vy: Math.random() * 2 - 1,
//             });
//         }

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             particles.forEach((particle) => {
//                 particle.x += particle.vx + (mousePosition.x - canvas.width / 2) * 0.01;
//                 particle.y += particle.vy + (mousePosition.y - canvas.height / 2) * 0.01;

//                 if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//                 if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

//                 ctx.beginPath();
//                 ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//                 ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
//                 ctx.fill();
//             });

//             requestAnimationFrame(animate);
//         };

//         animate();

//         const handleResize = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [mousePosition]);

//     const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//         setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     return (
//         <div onMouseMove={handleMouseMove} style={{ width: '100%', height: '100%' }}>
//             <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
//         </div>
//     );
// };

// const GlowingOrbs: React.FC = () => {
//     const [orbs, setOrbs] = useState<{ x: number; y: number; size: number; color: string }[]>([]);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
//         const newOrbs = Array(5).fill(null).map(() => ({
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//             size: Math.random() * 100 + 50,
//             color: colors[Math.floor(Math.random() * colors.length)],
//         }));
//         setOrbs(newOrbs);
//     }, []);

//     useEffect(() => {
//         const updateOrbPositions = () => {
//             setOrbs(prevOrbs => prevOrbs.map(orb => ({
//                 ...orb,
//                 x: orb.x + (mousePosition.x - orb.x) * 0.05,
//                 y: orb.y + (mousePosition.y - orb.y) * 0.05,
//             })));
//         };

//         const intervalId = setInterval(updateOrbPositions, 16);
//         return () => clearInterval(intervalId);
//     }, [mousePosition]);

//     const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//         setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     return (
//         <div onMouseMove={handleMouseMove} style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
//             {orbs.map((orb, index) => (
//                 <div
//                     key={index}
//                     style={{
//                         position: 'absolute',
//                         left: orb.x - orb.size / 2,
//                         top: orb.y - orb.size / 2,
//                         width: orb.size,
//                         height: orb.size,
//                         borderRadius: '50%',
//                         background: orb.color,
//                         filter: 'blur(50px)',
//                         opacity: 0.7,
//                         transition: 'all 0.1s ease-out',
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };

const HeroBGAnimation: React.FC = () => {
    const [currentAnimation, setCurrentAnimation] = useState<number>(0);

    const animations = [
        { component: <ParticleBackground />, name: "Particle Network" },
        // { component: <FluidBackground />, name: "Fluid Motion" },
        // { component: <GlowingOrbs />, name: "Glowing Orbs" },
    ];

    const nextAnimation = () => {
        setCurrentAnimation((prev) => (prev + 1) % animations.length);
    };

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflowX: 'hidden' }}>
            {animations[currentAnimation].component}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                zIndex: 10,
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Interactive Hero Background</h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                    Current Animation: {animations[currentAnimation].name}
                </p>
                <button
                    onClick={nextAnimation}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '5px',
                    }}
                >
                    Create Particle
                </button>
            </div>
        </div>
    );
};

export default HeroBGAnimation;