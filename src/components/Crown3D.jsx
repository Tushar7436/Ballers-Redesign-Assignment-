import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three'

export function Crown3D({ mouseX = 0, mouseY = 0 }) {
  const crown = useRef()
  
  useFrame((state, delta) => {
    // Gentle rotation
    crown.current.rotation.y += delta * 0.1
    
    // Follow mouse with slight delay
    crown.current.rotation.x = THREE.MathUtils.lerp(
      crown.current.rotation.x,
      mouseY * 0.1,
      0.1
    )
    crown.current.rotation.z = THREE.MathUtils.lerp(
      crown.current.rotation.z,
      mouseX * 0.1,
      0.1
    )
  })

  return (
    <group ref={crown}>
      <mesh>
        <cylinderGeometry args={[1, 2, 1, 5]} />
        <meshStandardMaterial 
          color="#FFD700"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Crown points */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            2 * Math.cos((i * 2 * Math.PI) / 5),
            0.8,
            2 * Math.sin((i * 2 * Math.PI) / 5)
          ]}
        >
          <coneGeometry args={[0.3, 0.8, 4]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

