/* eslint-disable no-unused-vars */
import { useConnect, metamaskWallet, useAddress,useContract,useContractRead } from "@thirdweb-dev/react"
import { useState } from "react"

import { useConnectionStatus } from "@thirdweb-dev/react"
import contractAbi from '../contracts/abi.json'

import useStore from "../store"

import { useNavigate } from "react-router-dom"

const metamaskConfig = metamaskWallet()

const Navbar = () => {

  const {contractaddress,user,setUser} = useStore((state) => ({
    contractaddress:state.contractaddress,
    user:state.user,
    setUser:state.setUser,
    }))

    const navigate = useNavigate()
    
  const st = useConnectionStatus()

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

    console.log(data)

  const handleconnectwallet = async() => {
    await connect(metamaskConfig)

    if(address === data){
        setUser('admin')
        navigate('/admin')
    }    else{
        setUser('patient')
        navigate('/patient')
    }
    
  }

    
  return (
    <div className='flex justify-between items-center w-full bg-bg-primary h-[12vh] px-3'>
        <p className='text-lg font-Poppins text-white'>MedSecure</p>
        <div>
            {
                st === 'connected' ? (
                    <p className='border-border-primary border-2 rounded-md py-2 px-3 bg-gradient-to-r from-g-stop-left to-g-stop-right font-bold text-text-primary text-Poppins text-lg tracking-wide'>Connected</p>
                ) : (
                    <button className='border-border-primary border-2 rounded-md py-2 px-3 bg-gradient-to-r from-g-stop-left to-g-stop-right font-bold text-text-primary text-Poppins text-lg tracking-wide'
            onClick={handleconnectwallet}
            >Connect Wallet</button>
  )
            }
        </div>
    </div>
  )
}

export default Navbar