/* eslint-disable no-unused-vars */
import React from 'react'
import { useContract,useContractRead,useContractWrite, useAddress } from '@thirdweb-dev/react'

import contractAbi from '../../contracts/abi.json'
import useStore from '../../store'
import AddCategory from './AddCategory'
import FetchCategories from './FetchCategories'

const Category = () => {

    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    const address = useAddress()

    const [load,setLoad] = React.useState(false)

    const handlerender = () => {
        setLoad(true)
    }

    
  return (
    <>
        <p>view all categories</p>
        <button onClick={handlerender}>Render</button>
        {
            load && <FetchCategories />
        }


        <AddCategory />

    </>
  )
}

export default Category