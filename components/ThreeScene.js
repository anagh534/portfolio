'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Points,
    PointMaterial,
    MeshDistortMaterial,
    Float,
    TorusKnot,
} from '@react-three/drei';
import * as THREE from 'three';

function TechStackItem({ position }) {
    const meshRef = useRef();
    const [opacity, setOpacity] = useState(0);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const cycle = (time + Math.abs(position[0])) % 10;
        if (cycle < 4) {
            setOpacity(THREE.MathUtils.lerp(opacity, 1, 0.05));
        } else {
            setOpacity(THREE.MathUtils.lerp(opacity, 0, 0.05));
        }

        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3;
            meshRef.current.rotation.y = time * 0.8;
            meshRef.current.rotation.z = time * 0.3;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
                color="#60a5fa"
                transparent
                opacity={opacity * 0.8}
                emissive="#3b82f6"
                emissiveIntensity={4}
            />
        </mesh>
    );
}

function AdvancedHologram() {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.1;
            meshRef.current.rotation.y = time * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <TorusKnot ref={meshRef} args={[1.5, 0.4, 256, 64]}>
                <MeshDistortMaterial
                    color="#4f46e5"
                    speed={3}
                    distort={0.4}
                    radius={1}
                    emissive="#3b82f6"
                    emissiveIntensity={1}
                    transparent
                    opacity={0.25}
                    metalness={0.9}
                    roughness={0.1}
                />
            </TorusKnot>
        </Float>
    );
}

function FlowField() {
    const pointsRef = useRef();
    const count = 2000;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const { mouse } = state;

        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * 0.03;
            pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouse.x * 0.8, 0.05);
            pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouse.y * 0.8, 0.05);
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#818cf8"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.8}
            />
        </Points>
    );
}

function TechStackPopups() {
    const techItems = [
        { name: "Node.js", pos: [-4, 2, -2] },
        { name: "React", pos: [4, 1.5, -3] },
        { name: "MongoDB", pos: [-3, -2, -1] },
        { name: "Next.js", pos: [3, -1.8, -2] },
        { name: "Flutter", pos: [0, 2.5, -4] },
        { name: "Docker", pos: [5, 0, -5] },
        { name: "AWS", pos: [-5, 0, -4] },
        { name: "TypeScript", pos: [2, 3, -2] },
        { name: "Redis", pos: [-2, 3.5, -3] },
        { name: "BullMQ", pos: [1.5, -3, -1] },
        { name: "AdonisJS", pos: [-4.5, -1, -3] },
        { name: "Firebase", pos: [4.5, 3, -4] },
    ];

    return (
        <group>
            {techItems.map((item, i) => (
                <TechStackItem key={i} position={item.pos} />
            ))}
        </group>
    );
}

function SceneLights() {
    return (
        <>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={5} color="#3b82f6" />
            <pointLight position={[-10, -10, -10]} intensity={5} color="#818cf8" />
            <fog attach="fog" args={['#050505', 5, 25]} />
        </>
    );
}

export default function ThreeScene() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="fixed inset-0 -z-1 bg-[#050505]" />;
    }

    return (
        <div className="fixed inset-0 -z-1 bg-[#050505]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />
            <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ width: '100%', height: '100%' }}
            >
                <SceneLights />
                <AdvancedHologram />
                <FlowField />
                <TechStackPopups />
            </Canvas>
        </div>
    );
}
