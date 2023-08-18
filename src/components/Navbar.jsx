/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useConnect, metamaskWallet, useAddress,useContract,useContractRead,useDisconnect,useConnectionStatus, useSDK,useWalletConfig, useBalance } from "@thirdweb-dev/react"
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk"
import contractAbi from '../contracts/abi.json'
import { ConnectWallet } from "@thirdweb-dev/react"

import { useEffect, useState } from "react"

import useStore from "../store"
import { useNavigate } from "react-router-dom"

//icons
import FeatherIcon from 'feather-icons-react';

import Navimg from '../assets/images/navicon.png'
import ChevronDown from "../icons/ChevronDown"
import Disconnect from "./Popups/Disconnect"

import { Modal,Button,Avatar, Group, Flex,useMantineTheme } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks"


const metamaskConfig = metamaskWallet()
const Navbar = () => {

  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme()
  
  //hooks
  const navigate = useNavigate()
  const statusofConnection = useConnectionStatus()
  const disconnect = useDisconnect()
  const connect = useConnect()
  const address = useAddress()
  const bal = useBalance(NATIVE_TOKEN_ADDRESS)
  const sdk = useSDK()

    //store imports
  const {contractaddress,user,setUser,doctorwallet,adminwallet} = useStore((state) => ({
    contractaddress:state.contractaddress,
    user:state.user,
    setUser:state.setUser,
    doctorwallet:state.doctorwallet,
    adminwallet:state.adminwallet
    }))

  //connecting to contracts
  const {contract} = useContract(
    contractaddress,contractAbi.abi
    )


    useEffect(() => {
      
      if(adminwallet.includes(address)){
        // console.log('admin')
        setUser('admin')
        navigate('/admin')
      }
      else if(doctorwallet.includes(address)){
        setUser('doctor')
        navigate('/doctor')
      }
      else if(address){
        setUser('patient')
        navigate('/patient')
      }
    },[address])
  
  //local states
    const [usr,setUst] = useState(null)
    const [modal,setModal] = useState(false)


    const {data,isLoading,error} = useContractRead(
        contract,
        "getOwnerAddress"
    )
  

    //handle utils functions
  const handleconnectwallet = async() => {
     const wallet = await connect(metamaskConfig)
     console.log(wallet)

      const address = await wallet.getAddress()
      console.log(address)
  }

  // const handledisconnect = async() => {
  //   // await disconnect()
  //   // setModal(!modal)
    
  // }
  
    
  return (
    <>
    <div className='flex justify-between items-center w-full h-[11vh] px-5 bg-gradient-to-tl from-[#CEEFFF] from-10% via-[#EAF8FF] to-[#EFFAFD] backdrop-blur-md'>
      <div className="flex justify-center items-center gap-2">
        <div className="justify-center items-center flex gap-1">
          <img src={Navimg} alt="" className="w-8 h-7"/>
        <p className='text-lg font-RobotoS text-gray-800 font-semibold cursor-pointer'
        onClick={() => navigate('/')}
        >MedSecure</p>
        </div>
        {/* {
          user === 'patient' && <p className='text-lg font-Poppins text-white cursor-pointer' onClick={() => navigate('/patient')}>Doctors</p>
        }
        {

          user === 'admin'&& (
            <div className="flex justify-center items-center px-2 gap-2">
                <button onClick={() => {navigate('/admin/doctors')}} className='text-lg font-buttonoppins text-white cursor-pointer'>Doctors</button>
                <button onClick={() => {navigate('/admin/patients')}} className='text-lg font-Poppins text-white cursor-pointer'>Patients</button>
            </div>
          )
        } */}
      </div>

        {
            user && <p className="text-white font-serif font-semibold">{user}</p>
        }
        <div className="flex justify-end items-center gap-2">
            {
                statusofConnection === 'connected' ?
               (
                <div className="flex justify-end items-center gap-1 cursor-pointer" onClick={open}>
                    <button className='text-md font-Poppins text-gray-800 font-medium tracking-tight cursor-pointer border-1 border-gray-800 px-3 py-1 rounded-md max-w-max min-h-max overflow-hidden'>
                      {address?.slice(0,5)}........{address?.slice(-5)}
                      {/* {address} */}
                    </button>
                    <ChevronDown />
                </div>
                ) :
              (
                <button 
                className='text-md font-Poppins text-gray-800 font-bold tracking-tight cursor-pointer border-1 border-gray-800 px-3 py-1 rounded-md'
                onClick={handleconnectwallet}
                >
                  Connect Wallet
                </button>
              )
            }
        </div>
    </div>

      <Modal opened={opened} onClose={close} centered size="30" 
      transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
      withCloseButton={false} 
       overlayProps={{
        color: theme.colors.gray[7],
          opacity: 0.55,
          blur: 3,
       }}
      >
        <div className="w-full flex justify-center items-center mb-4">
          <img src={Navimg} className="w-5 h-6" alt="" />
        </div>
        <Flex justify='center' align='center' gap='md'>
          <Button className="bg-bg-primary text-white font-Ubuntu font-normal hover:bg-gray-900">Copy</Button>
          <Button className="bg-bg-primary text-white font-Ubuntu font-normal hover:bg-gray-900"
           onClick={() => {
            disconnect()
            close()
            navigate('/')
           }}
          >Disconnect</Button>
        </Flex>
      </Modal>
    </>
  )
}

export default Navbar