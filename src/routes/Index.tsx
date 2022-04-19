import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import People from '../pages/People';
import PersonDetails from '../pages/PersonDetails';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<People />} />
        <Route path='/person' element={<PersonDetails />} />
    </Routes>
  )
}

export default AppRoutes