import { Avatar } from "@mantine/core"

const PatientDisplayCard = ({data}) => {
  return (
    <div className="flex justify-center items-baseline gap-2 overflow-hidden flex-col py-2 px-3 rounded-md border-1 border-gray-900">
        {/* div for image */}
       <div className="flex justify-between items-center px-2 w-full">
         <Avatar />
        <p className= "font-RobotoS text-green-700 font-bold text-lg ">{data.status}</p>
       </div>

        {/* patient name , patient wallet , patient status */}

        <div className="flex-col justify-center items-center gap-1">
            <p className="font-RobotoS text-white font-normal text-sm">{data.name}</p>
            <div className="cursor-pointer text-white font-RobotoS text-sm w-1/2 align-middle">
                <p className="truncate">{data.wallet}</p>
            </div>
        </div>

        {/* patient start and end time flex row format */}
        <div className="flex justify-between items-center py-2 px-5 w-full">
            <p className="font-Urbanist text-white font-semibold text-sm">{data.startTime}</p>
            <p className="font-Urbanist text-white font-semibold text-sm">{data.endTime}</p>
        </div>

        {/* document links */}
        <div></div>
    </div>
  )
}

export default PatientDisplayCard