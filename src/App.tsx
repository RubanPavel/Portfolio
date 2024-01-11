import "./App.css";
import { Header } from "layout/header/Header";
import { Main } from "layout/sections/main";
import { Skills } from "layout/sections/skills";
import { Works } from "layout/sections/works";
import { AboutMe } from "layout/sections/about";
import { Contact } from "layout/sections/contact";

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
