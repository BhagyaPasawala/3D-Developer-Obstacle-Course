import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useMemo,useState,useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider } from '@react-three/rapier'
import { Float, Text } from '@react-three/drei'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floor1Material = new THREE.MeshStandardMaterial( { color: 'limegreen'} )
const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow'} )
const obstacleMaterial = new THREE.MeshStandardMaterial( { color: 'orangered'} )
const wallMaterial = new THREE.MeshStandardMaterial( { color: 'slategray'} )

export function BlockStart( {position = [0, 0, 0]} )
{
    return (
        <group position={ position }>
            <Float>
                <Text
                font='./bebas-neue-v9-latin-regular.woff'
                scale={ 0.3 }
                maxWidth={0.25}
                lineHeight={0.75}
                textAlign='right'
                position={[ 0.75, 0.65, 0 ]}
                rotation-y={ -0.25 }
                > Developer's Obstacles
                <meshBasicMaterial toneMapped={ false } />
                </Text>
            </Float>
            <mesh
                geometry={boxGeometry}
                material={floor1Material}
                position={[0, -0.1, 0]}
                scale={[4, 0.2, 4]}
                receiveShadow />   
        </group>
    );
}

export function BlockEnd( {position = [0, 0, 0]} )
{
    return (
        <group position={ position }>
             <Float>
                <Text
                font='./bebas-neue-v9-latin-regular.woff'
                scale={ 1 }
                maxWidth={3}
                lineHeight={0.75}
                textAlign='right'
                position={[ -0.75, 0.65, 0 ]}
                rotation-y={ 0.25 }
                > Job! :)
                <meshBasicMaterial toneMapped={ false } />
                </Text>
            </Float>
            <mesh
                geometry={boxGeometry}
                material={floor1Material}
                position={[0, 0, 0]}
                scale={[4, 0.2, 4]}
                receiveShadow /> 
        </group>
    );
}

export function BlockSpinner( {position = [0, 0, 0]} )
{
    const obstacle = useRef()
    const [speed] = useState(() => (Math.random() + 0.2 ) * (Math.random() < 0.5 ? - 1 : 1))

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0))
        obstacle.current.setNextKinematicRotation(rotation)
    })
    
    return (
        <group position={ position }>
            <mesh
                geometry={boxGeometry}
                material={floor2Material}
                position={[0, -0.1, 0]}
                scale={[4, 0.2, 4]}
                receiveShadow />   

        <RigidBody
            ref={obstacle}
            type='kinematicPosition'
            position={[0, 0.3, 0]}
            restitution={0.2}
            friction={0}
            >
                <Text
                font='./bebas-neue-v9-latin-regular.woff'
                scale={ 0.2 }
                maxWidth={0.50}
                lineHeight={0.75}
                textAlign='right'
                position={[ 0, 0, 0.2 ]}
                rotation-y={ 0 }
                > Imposter Syndrome
                <meshBasicMaterial toneMapped={ false } />
                </Text>
            <mesh
                geometry={boxGeometry}
                material={obstacleMaterial}
                scale={[3.5, 0.3, 0.3]}
                castShadow
                receiveShadow /> 
        </RigidBody>  
        </group>
    );
}

export function BlockLimbo( {position = [0, 0, 0]} )
{
    const obstacle = useRef()
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const y = Math.sin(time + timeOffset) + 1.15
        obstacle.current.setNextKinematicTranslation({ x: position[0], y: position[1] + y, z: position[2]}) 
    })
    
    return (
        <group position={ position }>
            <mesh
                geometry={boxGeometry}
                material={floor2Material}
                position={[0, -0.1, 0]}
                scale={[4, 0.2, 4]}
                receiveShadow />   

        <RigidBody
            ref={obstacle}
            type='kinematicPosition'
            position={[0, 0.3, 0]}
            restitution={0.2}
            friction={0}
            >
            <Text
                font='./bebas-neue-v9-latin-regular.woff'
                scale={ 0.2 }
                maxWidth={0.50}
                lineHeight={0.75}
                textAlign='right'
                position={[ 0, 0, 0.2 ]}
                rotation-y={ 0 }
                > Social Media
                <meshBasicMaterial toneMapped={ false } />
                </Text>
            <mesh
                geometry={boxGeometry}
                material={obstacleMaterial}
                scale={[3.5, 0.3, 0.3]}
                castShadow
                receiveShadow /> 
        </RigidBody>  
        </group>
    );
}

export function BlockAxe( {position = [0, 0, 0]} )
{
    const obstacle = useRef()
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

    useFrame((state) => {
        
        const time = state.clock.getElapsedTime()
        const x = Math.sin(time + timeOffset) * 1.25
        obstacle.current.setNextKinematicTranslation({ x: position[0] + x, y: position[1] + 0.75, z: position[2]}) 
    })
    
    return (
        <group position={ position }>
            <mesh
                geometry={boxGeometry}
                material={floor2Material}
                position={[0, -0.1, 0]}
                scale={[4, 0.2, 4]}
                receiveShadow />   
        
        <RigidBody
            ref={obstacle}
            type='kinematicPosition'
            position={[0, 0.3, 0]}
            restitution={0.2}
            friction={0}
            >
            <Float>
                <Text
                font='./bebas-neue-v9-latin-regular.woff'
                scale={ 0.5 }
                maxWidth={0.50}
                lineHeight={0.75}
                textAlign='right'
                position={[ 0, 0, 0.5 ]}
                rotation-y={ 0
                 }
                > Burn Out
                <meshBasicMaterial toneMapped={ false } />
                </Text>
            </Float>
            <mesh
                geometry={boxGeometry}
                material={obstacleMaterial}
                scale={[1.5, 1.5, 0.3]}
                castShadow
                receiveShadow /> 
        </RigidBody>  
        </group>
    );
}

function Bounds({length = 1})
{
    return <>

        <RigidBody fr type='fixed' restitution={0.2} friction={0}>
            <mesh
            position={ [2.15, 0.75, - (length * 2) + 2] }
            geometry={ boxGeometry }
            material={ wallMaterial }
            scale={[0.3, 1.5, 4 * length]}
            castShadow
            />

            <mesh
            position={ [-2.15, 0.75, - (length * 2) + 2] }
            geometry={ boxGeometry }
            material={ wallMaterial }
            scale={[0.3, 1.5, 4 * length]}
            receiveShadow
            />

            <mesh
            position={ [0, 0.75, - (length * 4) + 2] }
            geometry={ boxGeometry }
            material={ wallMaterial }
            scale={[4, 1.5, 0.3]}
            receiveShadow
            />

            <CuboidCollider
                args={[ 2, 0.1, 2 * length ]}
                position={[0, -0.1, - (length * 2) + 2]}
                restitution={0.2}
                friction={1}
            />
        </RigidBody>

    </>
}

export function Level({ count = 20, types = [ BlockSpinner, BlockAxe, BlockLimbo ]})
{

    const block = useMemo(() => {
        const blocks = []

        for(let i = 0; i < count; i++)
        {
            const type = types[ Math.floor(Math.random() * types.length) ]
            blocks.push(type)
        }

        return blocks
    }, [count, types])

    return (
        <>
            <BlockStart position={[0, 0, 0]} />
            { block.map((Block, index) => <Block key={ index } position={[0, 0, - (index + 1) * 4 ]} /> ) }
            <BlockEnd position={ [ 0, 0, - ( count + 1 ) * 4 ] } />
            <Bounds length={count + 2} />    
        </>
    );
}