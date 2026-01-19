'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Points,
    PointMaterial,
    MeshDistortMaterial,
    PerspectiveCamera,
    Environment,
    Float,
    TorusKnot
} from '@react-three/drei';
import * as THREE from 'three';

function AdvancedHologram() {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;
            // Additional dynamic distortion logic could go here
        }
    });

    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
            <TorusKnot ref={meshRef} args={[1.5, 0.4, 256, 64]}>
                <MeshDistortMaterial
                    color="#3b82f6"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    emissive="#1d4ed8"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.15}
                    metalness={0.9}
                    roughness={0.1}
                />
            </TorusKnot>
        </Float>
    );
}

function FlowField() {
    const pointsRef = useRef();
    const count = 3000;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        const { mouse } = state;

        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * 0.05;
            pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;

            // Interactive movement towards/away from mouse
            pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouse.x * 0.5, 0.05);
            pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouse.y * 0.5, 0.05);
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#6366f1"
                size={0.008}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.4}
            />
        </Points>
    );
}

function SceneLights() {
    return (
        <>
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#3b82f6" />
            <pointLight position={[-10, -10, -10]} intensity={1.5} color="#818cf8" />
            <fog attach="fog" args={['#050505', 8, 20]} />
        </>
    );
}

export default function ThreeScene() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="fixed inset-0 -z-10 bg-[#050505]" />;
    }

    return (
        <div className="fixed inset-0 -z-10 bg-[#050505]">
            <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent opacity-40" />
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 60 }}>
                <React.Suspense fallback={null}>
                    <SceneLights />
                    <AdvancedHologram />
                    <FlowField />
                    <Environment preset="city" />
                </React.Suspense>
            </Canvas>
        </div>
    );
}
