import './App.css';
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import Home from './component/home/Home';
import HeaderComponent from './component/headerComponent/HeaderComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/nav/nav';
import Mescompetences from './component/Competence/Mescompetences';
import { Competence } from './component/Competence/Competence';
import AjouterCompetence from './component/Competence/Ajout';
import LangFramework from './data/CompetenceData';
import { CompetenceFramwork } from './component/Competence/RecherchFraw';
import LectureDocsSites from './component/Competence/lectureDocsSites';

function App() {
  return (
    <BrowserRouter>
  <Navbar />
     <Routes>
        
         <Route path="/home" element={<Home/>}></Route>
         
         <Route path="/" element={<HeaderComponent/>}>  </Route>
         <Route path="/image" element={<Competence/>}>  </Route>
         <Route path="/images" element={<Mescompetences/>}>  </Route>
         <Route path="/ajout" element={<AjouterCompetence/>}>  </Route>
         <Route path="/applifraw" element={<LangFramework/>}>  </Route>
         <Route path="/test" element={<CompetenceFramwork/>}>  </Route>
         <Route path="/doc" element={<LectureDocsSites/>}>  </Route>
        
         </Routes>

</BrowserRouter>)
}

export default App;
