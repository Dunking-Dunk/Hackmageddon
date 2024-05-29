import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, shaderMaterial } from '@react-three/drei'
import { useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { useControls } from 'leva'
import { RetroSpaceShipModel } from './Retro_dark_space_ship';


export function Vaporwave(props) {
  const refe = useRef()
  const group = useRef()
  const { backgroundColor } = useControls({ backgroundColor: '#2a004e' })
  const { nodes, materials, animations } = useGLTF('/retro/vaporwave.glb')
  const { ref, clips } = useAnimations(animations, group)
  let mixer;

  useEffect(() => {
    mixer = new THREE.AnimationMixer(ref.current)

    clips.forEach((clip) => {
      const action = mixer.clipAction(clip)
      action.play()
    })

  }, [clips, ref])


  useFrame((state, delta) => {

    mixer?.update(delta)
    ref.current.uColor = new THREE.Color(backgroundColor)
  })


  const ColorShiftMaterial = shaderMaterial(
    { time: 0, uColor: new THREE.Color(backgroundColor) },
        // vertex shader
        /*glsl*/` 
          varying vec2 vUv;
          void main() {
           
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            vUv = uv;
          }
        `,
        // fragment shader
    /*glsl*/`
    uniform float time;
    uniform vec3 uColor;
    varying vec2 vUv;

      vec2 cubic(vec2 p) {
        return p * p * (3.0 - 2.0 * p);
      }
      
      vec2 quintic(vec2 p) {
        return p * p * p * (10.0 + p * (-15.0 + p * 6.0));
      }
      
      float whiteNoise2x1(vec2 p) {
        // return p.x;
      
        // return fract(p.x * p.y * 1000.0123);
      
        // generic noise function - replace with something better
        // float random = dot(p, vec2(12.9898, 78.233));
        float random = dot(p, vec2(12., 78.));
        random = sin(random);
        random = random * 43758.5453;
        random = fract(random);
        return random;
      }
      
      float valueNoiseFn(vec2 uv) {
        vec2 gridUv = fract(uv);
        vec2 gridId = floor(uv);
      
        gridUv = quintic(gridUv);
      
        float botLeft = whiteNoise2x1(gridId);
        float botRight = whiteNoise2x1(gridId + vec2(1.0, 0.0));
        float b = mix(botLeft, botRight, gridUv.x);
      
        float topLeft = whiteNoise2x1(gridId + vec2(0.0, 1.0));
        float topRight = whiteNoise2x1(gridId + vec2(1.0, 1.0));
        float t = mix(topLeft, topRight, gridUv.x);
      
        float noise = mix(b, t, gridUv.y);
      
        return noise;
      }
      
          void main() {
            vec2 uv= vUv;
        
            for(float i=1.;i<10.;i++){
                uv.x+=.2/i*cos(i*1.0*uv.y+time);
                uv.y+=.2/i*cos(i*10.0*uv.x+time);
            }

            uv += time / 10.0;
            float vn = valueNoiseFn(uv * 4.0) * 1.0;
            vn += valueNoiseFn(uv * 8.0) * 0.5;
            vn += valueNoiseFn(uv * 16.0) * 0.25;
            vn += valueNoiseFn(uv * 32.0) * 0.125;
            vn += valueNoiseFn(uv * 64.0) * 0.0625;
            vn /= 4.0;

           vec3 color=mix(vec3(0.),uColor, vn * 0.5);
            gl_FragColor=vec4(color/abs(sin(time-uv.y-uv.x)),1.);
          }
        `
  )


  extend({ ColorShiftMaterial })

  return (

    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.736, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sphere_0" rotation={[-Math.PI / 2, 0, 0]} scale={67.966}>
                {/* <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Material_3}  >
                  <sphereGeometry args={[1, 36, 36]} />
                  <colorShiftMaterial ref={refe} side={THREE.DoubleSide} />
                </mesh> */}
              </group>
              <group name="Roundcube003_3">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Black} />
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Material_2} />
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Material_2} />
              </group>
              <group name="Roundcube004_4">
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Black} />
                <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.Material_3} />
              </group>
              <group name="Roundcube005_5">
                <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Black} />
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Material_4} />
              </group>

            </group>
          </group>
        </group>
      </group>
    </group>

  )
}

useGLTF.preload('/retro/vaporwave.glb')
