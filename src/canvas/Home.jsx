import { useRef, Suspense } from 'react';
import * as THREE from 'three'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Preload, shaderMaterial, useGLTF, useScroll, Float, } from "@react-three/drei";
import { Leva, useControls } from 'leva'
import { EffectComposer, Noise, Glitch, Selection, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { Vaporwave } from './Vaporwave';
import { RetroSpaceShipModel } from './Retro_dark_space_ship';


function FaceModel(props) {
    const { totalHeight } = props
    const ref = useRef()
    const modelRef = useRef()
    const { nodes, materials } = useGLTF('./face2/scene.gltf')
    const { faceColor, eyeColor } = useControls({ faceColor: '#ff00ef', eyeColor: '#ffffff' })

    useGLTF.preload('./face2/scene.gltf')

    const ColorShiftMaterial = shaderMaterial(
        {
            time: 0.0,
            speed: 20.0,
            charSize: { x: 10, y: 10 },
            charResolution: 10,
            color: new THREE.Color(faceColor),
            resolution: { x: 2, y: 2 },
        },
        // vertex shader
        /*glsl*/`
        varying vec2 vUv;

        void main(){
            gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.);
            vUv=uv;
        }
        `,
        `
        uniform float time;
        uniform float speed;
        uniform vec2 charSize;
        uniform float charResolution;
        uniform vec3 color;
        uniform vec2 resolution;
        varying vec2 vUv;
        
        float seed=2.;
        
        float random(float x){
            return fract(sin(x)*43758.5453);
        }
        
        float random(vec2 st){
            return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);
        }
        
        float randomChar(vec2 outer,vec2 inner){
            vec2 margin=1.-charSize;
            vec2 borders=step(margin,inner)*step(margin,1.-inner);
            return step(
                .5,
                random(outer*seed+floor(inner*charResolution))
            )*borders.x*borders.y;
        }
        
        vec4 matrix(vec2 st){
            float rows=200.;
            vec2 ipos=floor(st*rows)+vec2(1.,0.);
            ipos+=vec2(0.,floor(time*speed*random(ipos.x)));
            vec2 fpos=fract(st*rows);
            vec2 center=.5-fpos;
            float pct=random(ipos);
            float glow=(1.-dot(center,center)*3.)*1.;
            float result=randomChar(ipos,fpos)*pct*glow;
            return vec4(color*result,result);
        }
        void main(){
            vec2 st=vUv*resolution;
            gl_FragColor=vec4(0.,0.,0.,1.)+matrix(st);
        }
        
        `
    )

    extend({ ColorShiftMaterial })

    const scroll = useScroll()

    useFrame((state, delta) => {
        ref.current.time += delta
        modelRef.current.position.y = - 24 - (scroll.offset * (totalHeight / window.innerHeight) * 5.5)
        modelRef.current.rotation.y = 1 + (scroll.offset * 0.8)
        modelRef.current.position.z = -0.5 + (scroll.offset * 0.8)
    })

    return (
        <Float speed={1} // Animation speed, defaults to 1
            rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.4, 0.4]}
            scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <group {...props} dispose={null} scale={15} position={[0, -24, -0.1]} rotation={[0, 1.3, 0]} ref={modelRef}>
                <group rotation={[-Math.PI / 2, 0.015, -0.593]}>
                    <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                        <mesh geometry={nodes.eye_low_L_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} >
                            <colorShiftMaterial ref={ref} key={ColorShiftMaterial.key} color={new THREE.Color(eyeColor)} />
                        </mesh>
                        <mesh geometry={nodes.eye_low_L001_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} >
                            <colorShiftMaterial ref={ref} key={ColorShiftMaterial.key} color={new THREE.Color(eyeColor)} />
                        </mesh>
                        <mesh geometry={nodes.man_body_0014_uv_map_Material004_0.geometry} material={materials['Material.004']} rotation={[-Math.PI / 2, 0, 0]} scale={100} >
                            <colorShiftMaterial ref={ref} key={ColorShiftMaterial.key} />
                        </mesh>
                    </group>
                </group>
            </group>
        </Float>

    )
}
useGLTF.preload('./face2/scene.gltf')



const HomeCanvas = () => {

    return (
        <div style={{ width: '100%', height: '100%', position: 'fixed', zIndex: 0 }}>
            <Canvas
                gl={{ preserveDrawingBuffer: true, antialias: true }}
                frameloop='always'
                dpr={[1, 1.5]}
                camera={{ position: [15, 2, 0], fov: 25 }}
            >
                <ambientLight intensity={5} />
                <Suspense>
                    <Selection autoClear={false}>
                        <EffectComposer disableNormalPass multisampling={1} >
                            <Noise opacity={0.1} />
                            <ChromaticAberration blendFunction={BlendFunction.NORMAL}
                                offset={[0.001, 0.001]} />
                        </EffectComposer>
                        <RetroSpaceShipModel position={[-32, -8, 0]} scale={[1, 1, 1]} rotation={[0, - Math.PI / 2, 0]} />
                        <Vaporwave position={[-4, -22, 0]} rotation={[0, Math.PI / 2, 0]} />
                    </Selection>
                </Suspense>
                <Leva hidden />
                <Preload all />
            </Canvas >

        </div >
    );
};


export default HomeCanvas