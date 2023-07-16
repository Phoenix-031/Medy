/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const DoctorCard = (props) => {

    const data = props.data;
    
  return (
    <div className='border-2 border-red-600 rounded-md py-2 px-3 font-serif text-lg max-w-max'>
        <p>{data.name}</p>
        <p>{data.category}</p>
        <p>{data.fees._hex}</p>
        <p>{data.wallet}</p>
    </div>
  )
}

export default DoctorCard