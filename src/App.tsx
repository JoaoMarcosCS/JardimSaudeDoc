
import { StacksSection } from "./components/Stacks";
import { AnimatedBeamMultipleOutputDemo } from "./components/Stacks/stacksComponent";
import { About } from "./components/about";
import { ArrowDown } from "./components/arrow/ArrowDown";
import { Header } from "./components/header";
import { NavBar } from "./components/navbar";
import { Users } from "./components/users";


function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <ArrowDown id="#sobre"/>
      <About/>
      <StacksSection/>
      <Users/>
    </>
  );
}

export default App;
