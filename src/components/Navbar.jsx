/* eslint-disable no-unused-vars */
import { useConnect, metamaskWallet, useAddress,useContract,useContractRead,useDisconnect } from "@thirdweb-dev/react"
import { useState } from "react"
import FeatherIcon from 'feather-icons-react';

import { useConnectionStatus } from "@thirdweb-dev/react"
import contractAbi from '../contracts/abi.json'

import useStore from "../store"

import { useNavigate } from "react-router-dom"

const metamaskConfig = metamaskWallet()

const Navbar = () => {

  const {contractaddress,user,setUser,doctorwallet} = useStore((state) => ({
    contractaddress:state.contractaddress,
    user:state.user,
    setUser:state.setUser,
    doctorwallet:state.doctorwallet,
    }))

    const navigate = useNavigate()
    
  const st = useConnectionStatus()
  const disconnect = useDisconnect()

//   if(st === 'connected')console.log('connected')
  
  
  const connect = useConnect()
  const address = useAddress()

  const {contract} = useContract(
    contractaddress,contractAbi.abi
    )

    const {data,isLoading,error} = useContractRead(
        contract,
        "getOwnerAddress"
    )
      console.log(doctorwallet.includes(address))

    // console.log(data)

  const handleconnectwallet = async() => {
    await connect(metamaskConfig)

    if(address === data){
        setUser('admin')
        navigate('/admin')
    } else{
        setUser('patient')
        navigate('/patient')
    }
    
  }

  console.log(user)
    
  return (
    <div className='flex justify-between items-center w-full bg-bg-primary h-[12vh] px-3'>
      <div className="flex justify-center items-center gap-2">
        <p className='text-lg font-Poppins text-white cursor-pointer'
        onClick={() => navigate('/')}
        >MedSecure</p>
        {
          user === 'patient' && <p className='text-lg font-Poppins text-white cursor-pointer' onClick={() => navigate('/patient')}>Doctors</p>
        }
        {

          user === 'admin'&& (
            <div className="flex justify-center items-center px-2 gap-2">
                <p className='text-lg font-Poppins text-white cursor-pointer'>Doctors</p>
                <p className='text-lg font-Poppins text-white cursor-pointer'>Patients</p>
            </div>
          )
        }
      </div>

        {
            user && <p className="text-white font-serif font-semibold">Welcome {user}</p>
        }
        <div className="flex justify-center items-center gap-2">
            {
                st === 'connected' ? (
                    <p className='border-border-primary border-2 rounded-md py-2 px-3 bg-gradient-to-r from-g-stop-left to-g-stop-right font-bold text-text-primary text-Poppins text-lg tracking-wide'>Connected</p>
                ) : (
                    <button className='border-border-primary border-2 rounded-md py-2 px-3 bg-gradient-to-r from-g-stop-left to-g-stop-right font-bold text-text-primary text-Poppins text-lg tracking-wide'
            onClick={handleconnectwallet}
            >Connect Wallet</button>  )
            }
            {
                         
              user && <FeatherIcon icon="log-out" color="white" className='cursor-pointer' onClick={() => {
                setUser(null)
                disconnect()
              }}/>

            }
        </div>
    </div>
  )
}

export default Navbar