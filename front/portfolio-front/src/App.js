import './App.css';
import {BrowserRouter, Route,Routes } from "react-router-dom";
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import Home from './composants/home/Home';
import Navbar from './composants/nav';
import Message from './composants/Message';
import Portofolio from './composants/Portofolio';
import HeaderComponent from "./composants/headerComponent/HeaderComponent";
import Competencesv1 from "./composants/Skills/Competencesv1";
import Competencev1 from "./composants/Skills/Competencev1";
import CompetenceListv1 from "./composants/Skills/CompetenceListv1";

function App() {
  return(
 <BrowserRouter>
  <Navbar />
     <Routes>
         <Route path="/competence" element={<CompetenceListv1/>}/>

         <Route path="/home" element={<Home/>}></Route>
         <Route path="/message" element={<Message/>}></Route>
         <Route path="/portfolio" element={<Portofolio/>}></Route>
         <Route path="/" element={<HeaderComponent/>}>  </Route>
         <Route path="/comp" element={<Competencesv1/>}>  </Route>
         <Route path="/comp1" element={<Competencev1/>}>  </Route>
         <Route path="/comp2" element={<CompetenceListv1/>}>  </Route>

     </Routes>

 </BrowserRouter>)
}

export default App;
