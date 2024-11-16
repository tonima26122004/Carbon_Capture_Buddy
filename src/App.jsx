import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page_1 from './Pages/Page_1';
import Page_2 from './Pages/page_2';

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Page_1 />} />
          <Route path="/page_2" element={<Page_2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
