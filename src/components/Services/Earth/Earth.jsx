/* eslint-disable react/no-unknown-property */



import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stars} from "@react-three/drei";

import EarthHandle from "./EarthHandle";


const Earth = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={2.5} position={[0, 0, 5]}/>
        <spotLight position={[0, 0, 5]} intensity={1}/>
        <EarthHandle/>
        <Stars radius={100} depth={50} count={1000} factor={6} saturation={0} fade speed={0.5} />
        <OrbitControls />
      </Canvas>
    </div>

  );
};

export default Earth;
