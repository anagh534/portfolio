'use client';

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
    Points,
    PointMaterial,
    Float,
    MeshDistortMaterial,
    PerspectiveCamera,
    Environment,
    ContactShadows
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function ParticleField(props) {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.5 }));

    useFrame((state, delta) => {
        const { mouse } = state;
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

        // Slight mouse follow effect for particles
        ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.x * 0.1, 0.1);
        ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.y * 0.1, 0.1);
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.004}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function FloatingShape({ color, speed, distort, radius, position }) {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.x = Math.sin(time / 4) / 4;
        mesh.current.rotation.y = Math.cos(time / 4) / 4;
        mesh.current.position.y = position[1] + Math.sin(time * speed) * 0.1;
    });

    return (
        <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
            <mesh ref={mesh} position={position}>
                <sphereGeometry args={[radius, 64, 64]} />
                <MeshDistortMaterial
                    color={color}
                    speed={speed * 2}
                    distort={distort}
                    radius={1}
                    emissive={color}
                    emissiveIntensity={0.8}
                    transparent
                    opacity={0.3}
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>
        </Float>
    );
}

function BackgroundEffects() {
    return (
        <>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
            <pointLight position={[-10, -10, -10]} intensity={2} color="#8b5cf6" />
            <spotLight
                position={[0, 5, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
                castShadow
            />
            <fog attach="fog" args={['#050505', 8, 20]} />
        </>
    );
}

export default function ThreeScene() {
    const [mounted, setMounted] = useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="fixed inset-0 -z-10 bg-[#050505]" />;
    }

    return (
        <div className="fixed inset-0 -z-10 bg-[#050505]">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent opacity-50" />
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
                <React.Suspense fallback={null}>
                    <BackgroundEffects />

                    {/* Floating Geometries for modern look */}
                    <FloatingShape
                        position={[-2, 1, -2]}
                        color="#3b82f6"
                        speed={1}
                        distort={0.4}
                        radius={0.8}
                    />
                    <FloatingShape
                        position={[2, -1, -3]}
                        color="#8b5cf6"
                        speed={1.5}
                        distort={0.5}
                        radius={0.6}
                    />
                    <FloatingShape
                        position={[0, 2, -5]}
                        color="#4fd1c5"
                        speed={2}
                        distort={0.3}
                        radius={1.2}
                    />

                    <ParticleField />
                </React.Suspense>
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
