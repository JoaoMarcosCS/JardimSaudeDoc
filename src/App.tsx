
import { StacksSection } from "./components/Stacks";
import { AnimatedBeamMultipleOutputDemo } from "./components/Stacks/stacksComponent";
import { About } from "./components/about";
import { ArrowDown } from "./components/arrow/ArrowDown";
import { Header } from "./components/header";
import { Limitations } from "./components/limitations";
import { Medicines } from "./components/medicine";
import { NavBar } from "./components/navbar";
import { Treatments } from "./components/treatment";
import { Users } from "./components/users";


function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <ArrowDown id="#sobre"/>
      <About/>
      <StacksSection/>
      <ArrowDown id="#secretarias"/>
      <Users/>
      <ArrowDown id="#tratamentos"/>
      <Treatments/>
      <ArrowDown id="#medicamentos"/>
      <Medicines/>
      <ArrowDown id="#limitacoes"/>
      <Limitations/>
    </>
  );
}

export default App;
