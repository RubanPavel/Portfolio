import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { AboutMe } from "./layout/sections/about/aboutMe";
import { Contact } from "./layout/sections/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
