import ReactDOM from 'react-dom';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import './styles.css';
import { Stats , PerspectiveCamera} from '@react-three/drei';
import Box from './components/Box';

ReactDOM.render(
    <Canvas colorManagement>
        <PerspectiveCamera/>
        <Stats />
        <ambientLight camera = {{position : [0 , 0 , 0]}}/>
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
    </Canvas>,
    document.getElementById('root')
);
