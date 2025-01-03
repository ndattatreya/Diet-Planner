import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Story from './components/Story';
import Achievements from './components/Achievements'; 
import Team from './components/Team';
import Process from './components/Process';
import Contact from './components/Contact';
import Features from './components/Features';
import Blogs from './components/blogs.js';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import DietPlanner from './components/DietPlanner';
const theme = createTheme({
  palette: {
    primary: {
      main: '#4a7c59',
    },
    secondary: {
      main: '#e9edc9',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Blogs />
              <Testimonials />
              <Pricing />
            </>
          } />
          <Route path="/about" element={<><About /><Story /><Achievements /></>} />
          <Route path="/team" element={<Team />} />
          <Route path="/process" element={<Process />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/diet-planner" element={<DietPlanner />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;