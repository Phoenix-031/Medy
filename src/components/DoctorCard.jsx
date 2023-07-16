import React from 'react'

import { useContract,useContractWrite,useAddress } from '@thirdweb-dev/react';

import useStore from '../store'

import contractAbi from '../contracts/abi.json'

const DoctorCard = (props) => {

    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    const address = useAddress()

    const data = props.data;

    console.log(data)

    const image = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'

    const handlebookapt = async() => {
        // console.log('book apt')
        const data = await mutateAsync({args : ['0x02',"fuckyou",address,'askjvnkjfnvdsjfvndsjfvndksjfvn']})
        console.log(data)
    }

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {mutateAsync,isLoading,error} = useContractWrite(
        contract,
        "bookDoctor",
    )

    
  return (
    <div className='bg-bg-secondary border-2 border-border-primary rounded-lg px-2 py-3 w-72'>
        <div className='flex justify-between items-center gap-3'>
            <div className='w-20 h-20 rounded-full flex-1'>
                <img className='w-20 h-20 rounded-full flex-1 ' src={image} alt="" />
            </div>

            <div className='flex-2 flex justify-center flex-col items-start gap-1'>
                <p className='text-white font-serif text-md'>{data.name}</p>
                <p className='text-white font-serif text-md'>{data.category}</p>
                <p className='text-white font-serif text-md'>13yrs of experience</p>
                <p className='text-white font-serif text-md'>Starts at Rs.500</p>
            </div>
        </div>

        <div className='px-3'>
            <p className='text-white font-serif text-md'>{data.registrationNo}</p>
            {/* <p>{data.registrationYear}</p> */}
            <p className='text-white font-serif text-md'>{data.degreeName}</p>
            <p className='text-white font-serif text-md'>{data.medicalCouncilName}</p>
        </div>

        <div className='w-full justify-center items-center flex '>
            <button className='text-white bg-bg-primary px-3 rounded-md py-1' onClick={handlebookapt}>Book Apt</button>
        </div>
    </div>
  )
}

export default DoctorCard