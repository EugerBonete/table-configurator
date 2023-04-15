import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ConfiguratorProvider } from "./context/Configurator";

function App() {
  return (
    <ConfiguratorProvider>
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
        <Experience />
      </Canvas>
      <Interface />
    </ConfiguratorProvider>
  );
}

export default App;
