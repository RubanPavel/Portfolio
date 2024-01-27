import "./App.css";
import {Header} from "layout/header/Header";
import {Main} from "layout/sections/main";
import {Skills} from "layout/sections/skills";
import {Works} from "layout/sections/works";
import {AboutMe} from "layout/sections/about";
import {Contact} from "layout/sections/contact";
import {Footer} from "layout/footer";
import {I18nextProvider} from "react-i18next";
import i18n from "./components/i18n/i18n";

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Header/>
        <Main/>
        <AboutMe/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
      </I18nextProvider>
    </div>
  );
}

export default App;
