
import { AnimatedBeamMultipleOutputDemo } from "./components/Stacks/test";
import { About } from "./components/about";
import { ArrowDown } from "./components/arrow/ArrowDown";
import { Header } from "./components/header";
import { NavBar } from "./components/navbar";


function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <ArrowDown id="#sobre"/>
      <About/>
      <AnimatedBeamMultipleOutputDemo/>
    </>
  );
}

export default App;
