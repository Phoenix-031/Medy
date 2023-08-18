import React from 'react'
import { useNavigation,useParams } from 'react-router-dom'

const GeneralHome = () => {

    const navigation = useNavigation()
    const param = useParams()
    console.log(param)
    
  return (
    <div>GeneralHome</div>
  )
}

export default GeneralHome