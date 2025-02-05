import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Homepage from './homepage';

function main2() {
  return (
    <div id="main-section">
          <Routes>
           <Route path="/" element={<Homepage />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
  )
}

export default main2