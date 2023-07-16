/* eslint-disable no-unused-vars */
import { useConnect, metamaskWallet, useAddress } from "@thirdweb-dev/react"
import { useState } from "react"

import { useConnectionStatus } from "@thirdweb-dev/react"


import GetAllDoctors from "./components/Contractcom/GetAllDoctors"
import AddDoctor from "./components/Contractcom/AddDoctor"

import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import BookDoctor from "./components/Contractcom/BookDoctor"
import Category from "./components/Contractcom/Category"

import DoctorHome from "./pages/Doctor/DoctorHome"

import useStore from "./store"
import PatientHome from "./pages/Patient/PatientHome"
import AdminHome from "./pages/Admin/AdminHome"
import SpecifiedDoctorList from "./pages/Patient/SpecifiedDoctorList"
import Landing from "./pages/Landing"

function App() {

  // const st = useConnectionStatus()

  // if(st === 'connected')console.log('connected')
  
  
  // const connect = useConnect()
  // const address = useAddress()

  // const handleconnectwallet = async() => {
  //   await connect(metamaskConfig)
  // }

  const[doctors, getDoctors] = useState(false)

  const {user} =  useStore((state) => ({
    user:state.user,
  }))

  return(
    <div className="h-full w-full">
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/admin' element={<AdminHome />} />
      <Route path='/doctor' element={<DoctorHome />} />
      <Route path='/patient' element={<PatientHome />} />
      <Route path='/doctor/:id' element={<SpecifiedDoctorList />} />
      {/* {
        user == 'patient' && <Route path='/patient' element={<PatientHome />} />
      }
      {
        user == 'doctor' && <Route path='/doctor' element={<DoctorHome />} />
      }
      {
        user == 'admin' && <Route path='/admin' element={<AdminHome />} />
      } */}
    </Routes>
    </div>
  )
  
}

export default App
