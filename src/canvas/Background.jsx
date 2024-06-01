import { Canvas } from "@react-three/fiber"
import { RetroSpaceShipModel } from "./Retro_dark_space_ship"


const Background = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'fixed', z: 0 }}>
            <Canvas
                gl={{ preserveDrawingBuffer: true, antialias: true }}
                frameloop='always'
                dpr={[1, 1.5]}
                camera={{ position: [15, 2, 0], fov: 25 }}
            >
                <ambientLight intensity={5} />
                <RetroSpaceShipModel rotation={[Math.PI / 2, Math.PI / 3, -Math.PI / 2]} limitBottom={false} scale={[1, 1, 1]} position={[-32, -8, 0]} />
            </Canvas>
            {/* <div className="animate-shoot-effect rotate-[270deg]  h-0.5 w-0.5   rounded-[9999px] shadow-[0_0_0_1px_#ffffff10]  bg-red-500 absolute top-1/2 z-[50] left-1/2 before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[100px] before:h-[2px] before:bg-gradient-to-r before:from-[#ff0000] before:to-transparent " /> */}
        </div>
    )
}

export default Background