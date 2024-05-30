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
                <RetroSpaceShipModel rotation={[Math.PI / 2, Math.PI / 3, -Math.PI / 2]} limitBottom={false} />
            </Canvas>

        </div>
    )
}

export default Background