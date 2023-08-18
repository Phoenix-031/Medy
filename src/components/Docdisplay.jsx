/* eslint-disable react/prop-types */

const Docdisplay = ({data}) => {

    // const data = props.data;
    console.log(data);
    const image = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    
  return (
    <div className='bg-bg-secondary border-2 border-border-primary rounded-lg px-2 py-3 w-64'>
        <div className='flex justify-between items-center gap-2'>
            <div className='w-20 h-20 rounded-full flex-1'>
                <img className='w-full h-full rounded-full flex-1 object-cover ' src={image} alt="" />
            </div>

            <div className='flex-2 flex justify-center flex-col items-start gap-1'>
                <p className='font-Roboto font-semibold text-white text-md'>{data.name}</p>
                <p className='font-Roboto font-semibold text-white text-md'>{data.category}</p>
                <p className='font-Roboto font-semibold text-white text-md'>13yrs of experience</p>
                <p className='font-Roboto font-semibold text-white text-md'>Starts at Rs.500</p>
            </div>
        </div>

        <div className='px-3'>
            <p className='text-white text-md font-Poppins font-normal'>{data.registrationNo}</p>
            {/* <p>{data.registrationYear}</p> */}
            <p className='text-white text-md font-Poppins font-normal'>{data.degreeName}</p>
            <p className='text-white text-md font-Poppins font-normal'>{data.medicalCouncilName}</p>
        </div>
    </div>
  )
}

export default Docdisplay