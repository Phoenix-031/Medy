
import { patientsList } from '../../assets/data/patients'
import PatientDisplayCard from '../PatientDisplayCard'

const PatientsTab = () => {
  return (
    <div className='w-full h-full flex justify-center items-center gap-2 flex- overflow-hidden overflow-y-scroll flex-wrap py-2 px-3'>
        {
            patientsList?.map((item,index) => (
                <PatientDisplayCard data={item} key={index}/>
            ))
        }

    </div>
  )
}

export default PatientsTab