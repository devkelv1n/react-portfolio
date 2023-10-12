import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/react-portfolio/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path='*' element={<Navigate replace to='/404'/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
