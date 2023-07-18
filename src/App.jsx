/* eslint-disable no-unused-vars */
import { useConnect, metamaskWallet, useAddress } from "@thirdweb-dev/react"
import { useEffect, useState } from "react"

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
import FileCoinUpload from "./components/FileCoinUpload"

function App() {

  // const st = useConnectionStatus()

  // if(st === 'connected')console.log('connected')
  
  
  // const connect = useConnect()
  // const address = useAddress()

  // const handleconnectwallet = async() => {
  //   await connect(metamaskConfig)
  // }

  const[doctors, getDoctors] = useState(false)
  const [usr,setUsr] = useState(null)

  const {user} =  useStore((state) => ({
    user:state.user,
  }))

  useEffect(() => {
    setUsr(user)
  },[user])
  
  return(
    <div className="h-full w-full">
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/doctor/:id' element={<SpecifiedDoctorList />} />
      <Route path= '/uploaddoc' element = {<FileCoinUpload />} />
      {
        user === 'patient' && <Route path='/patient' element={<PatientHome />} />
      }
      {
        user === 'doctor' && <Route path='/doctor' element={<DoctorHome />} />
      }
      {
        user === 'admin' && <Route path='/admin' element={<AdminHome />} />
      }
    </Routes>
    </div>
  )
  
}

export default App
