import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import List from './pages/List'
import Write from './pages/Write';
import Question from './pages/Question';
import View from './pages/View';
import Editor from './pages/Editor';

function App() {
  return (
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/List/:id" element={<List />} />
     <Route path="/Write" element={<Write />} />
     <Route path="/Question/:id" element={<Question />} />
     <Route path="/Editor" element={<Editor />} />
     <Route path="/Write/:id" element={<Question />} />
     <Route path="/View/:id" element={<View />} />
   </Routes>
  );
}

export default App;
