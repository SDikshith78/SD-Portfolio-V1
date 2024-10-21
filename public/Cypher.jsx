import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export default function Model(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/cypher.gltf');  // Load animations from GLTF
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  // Play the animation when the model is loaded
  useEffect(() => {
    if (actions) {
      // Play the first animation found
      const action = actions[Object.keys(actions)[0]];
      action.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} position={[0.2, 0, 0]} scale={0.9}>
      <group name="Scene" >
        <group name="Cypher_CS_Gumshoe_S0_Skelmeshmd" rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Cypher_Body" geometry={nodes.Cypher_Body.geometry} material={materials.Bodymat} skeleton={nodes.Cypher_Body.skeleton} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/cypher.gltf');
