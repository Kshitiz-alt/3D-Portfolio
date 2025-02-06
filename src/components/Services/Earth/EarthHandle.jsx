/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import { TextureLoader } from "three";

const EarthHandle = () => {
  const surfaceRef = useRef();
  const atmosphereRef = useRef();

  // Load textures
  const [map, bumpMap, specularMap, cloudMap, cloudAlphaMap] = useLoader(TextureLoader, [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthmap1k.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthbump1k.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthspec1k.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmap.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmaptrans.jpg",
  ]);

  useFrame(() => {
    if (surfaceRef.current) surfaceRef.current.rotation.y += 0.0005;
    if (atmosphereRef.current) atmosphereRef.current.rotation.y += 0.0004
  });

  return (
    <group>
      {/* Planet Surface */}
      <mesh ref={surfaceRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial
          map={map}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specularMap={specularMap}
          shininess={1}
          
          
        />
      </mesh>

      {/* Atmosphere */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[0.503, 32, 32]} />
        <meshPhongMaterial
          map={cloudMap}
          alphaMap={cloudAlphaMap}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
};

export default EarthHandle;