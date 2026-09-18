import React from 'react'
import {MoveRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
   
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center' >{props.id+1}</h2>
        <div >
            <p className=' text-shadow-2xs text-xl leading-normal text-white mb-14'>
                {props.intro}
            </p>  
            <div className='flex justify-between'>
                <button style= {{backgroundColor: props.color}}  className=' text-white text-s font-medium  px-7 py-3 rounded-full' >{props.tag}</button>
                <button style= {{backgroundColor: props.color}}  className=' text-white text-s font-medium px-3 py-3 rounded-full '> <MoveRight /></button>
            </div>
        </div>
    </div>

  )
}

export default RightCardContent
