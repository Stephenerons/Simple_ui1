import React from 'react'
import {BsLightningCharge} from 'react-icons/bs'
import {PiMessengerLogoDuotone,PiBrain} from 'react-icons/pi'
import {FiEye} from 'react-icons/fi'

export default function page() {
  return (
    <section className='md:flex md:justify-center md:items-center md:h-screen '> 
    <div className='md:w-[34.75rem] w-full h-screen md:h-[26.625rem] md:shadow md:flex md:justify-center md:items-center '>
      <div className='md:w-[17.375rem] w-full md:h-[26.625rem] h-auto md:bg-slate-300 md:bg-gradient-to-b from-indigo-500 to-indigo-700 bg-gradient-to-b from-indigo-500 to-indigo-700 md:rounded-2xl md:flex md:flex-col md:items-center rounded-b-3xl' >
        <h2 className='md:text-center text-center md:text-violet-200 text-violet-200 text-2xl md:text-2xl md:font-medium font-medium md:pt-8 pt-8'>
          Your Result 
        </h2>

        <div className='md:w-40 w-40 md:h-40 h-40 md:px-16 px-16 md:py-9 py-9 bg-gradient-to-b from-indigo-700 to-indigo-500 md:rounded-full  rounded-full md:flex flex md:flex-col flex-col md:justify-center justify-center md:items-center items-center md:mt-8 mt-8 mx-auto'>
          <p className='md:text-white text-white md:text-6xl text-6xl'>
              76
          </p>

          <div className="md:text-indigo-400 text-indigo-400 text-base md:text-xl">
            of100
          </div>

        </div>

        <h2 className='md:text-white text-white md:text-2xl text-3xl md:mt-[1.5rem] mt-8 text-center'>
            Great
        </h2>

        <p className='md:px-[1.94rem] md:text-center text-center md:text-violet-200 text-violet-200 md:text-base md:font-normal md:mt-4 mt-4 pb-10 px-4'>
             You scored higher than 65% of the people who has taken this test 
        </p>

      </div>
      <div className='md:w-72 w-full h-fit md:h-[26.625rem] md:rounded-3xl'>

        <h2 className='md:text-black md:text-2xl md:font-medium md:ml-[1.5rem] text-black text-2xl font-medium pt-8 px-4'>
          Summary
        </h2>

        <div className='md:w-56 md:h-56 md:flex md:flex-col md:justify-start md:items-start md:gap-3 md:mt-[1.5rem] md:mx-auto mt-6 gap-3 flex flex-col'>
          <div className='md:w-56 md:h-12 md:p-3 md:bg-red-50 md:rounded-lg md:shadow md:flex md:gap-12  w-auto h-12 p-3 bg-red-50 rounded-lg shadow flex justify-between items-center'>
            <div className='md:flex md:gap-2 md:justify-center md:items-center flex justify-center items-center gap-2 '>
                <BsLightningCharge className='text-[#DC6865]'/>

                <p className='md:text-red-400 md:text-lg text-red-400 text-lg'>
                  Reaction
                </p>

            </div>

            <span>
                <p className=''>
                  80/100
                </p>
            </span>

          </div>

          <div className='md:w-56 md:h-12 md:p-3 md:bg-red-50 md:rounded-lg md:shadow md:flex md:gap-12  w-auto h-12 p-3 bg-red-50 rounded-lg shadow flex justify-between items-center '>

          <div className='md:flex md:gap-2 md:justify-center md:items-center flex justify-center items-center gap-2 '>
                <PiBrain className='text-[#FABF4E]'/>

                <p className='md:text-[#FABF4E] md:text-lg'>
                  Memory
                </p>

            </div>

            <span>
                <p className=''>
                  92/100
                </p>
            </span>

          </div>

          <div className='md:w-56 md:h-12 md:p-3 md:bg-[#F2FBFA] md:rounded-lg md:shadow md:flex md:gap-12  w-auto h-12 p-3 bg-red-50 rounded-lg shadow flex justify-between items-center'>

          <div className='md:flex md:gap-2 md:justify-center md:items-center flex justify-center items-center gap-2  '>
                <PiMessengerLogoDuotone className='text-[#4ECB71]'/>

                <p className='md:text-[#4ECB71] md:text-lg'>
                   Verbal
                </p>

            </div>

            <span>
                <p className=''>
                  61/100
                </p>
            </span>

          </div>

          <div className='md:w-56 md:h-12 md:p-3 md:bg-[#F3F3FD] md:rounded-lg md:shadow md:flex md:gap-12  w-auto h-12 p-3 bg-red-50 rounded-lg shadow flex justify-between items-center'>

          <div className='md:flex md:gap-2 md:justify-center md:items-center flex justify-center items-center gap-2 '>
                <FiEye className='text-[#5761AE]'/>

                <p className='md:text-[#5761AE] md:text-lg'>
                  Visual
                </p>

            </div>

            <span>
                <p className=''>
                  72/100
                </p>
            </span>

          </div>
        </div>

        <div className=' md:bg-slate-700 md:rounded-3xl md:w-56 md:h-11  md:mt-[1.5rem] md:mx-auto md:flex md:justify-center md:items-center w-auto h-11 bg-slate-700 rounded-3xl justify-center items-center mt-8 '>
          <p className='md:text-center md:text-stone-50 text-stone-50 text-lg flex justify-center items-center h-full '>
            Continue
          </p>
        </div>


      </div>
    </div>
    </section>
  )
}

