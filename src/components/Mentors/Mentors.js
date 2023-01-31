import KeweiSha from '../../assets/kewei-sha-bg.png';
import BunYue from '../../assets/yue-bun-bg.png';
import { EnvelopeSimple } from 'phosphor-react';

export default function Mentors() {
  return (
    <div className='body-height p-8'>
      <div className="text-3xl font-semibold text-green-900 mb-16">Meet Our Mentors</div>
      <div className='grid grid-cols-2 grid-rows-1 gap-8'>
        <div className='col-span-1 flex justify-center items-center flex-col'>
          <div className='h-[300px] w-[300px] bg-yellow-200 mb-4 rounded-full overflow-hidden'>
            <img className='w-[85%] ml-10 mt-4' src={BunYue} alt="f"/>
          </div>
          <p className="m-0 mb-2 text-xl font-semibold">Dr. Kwok-Bun Yue</p>
          <p className='m-0 text-center w-[250px] mb-2'>Professor of Computer Science and Computer Information Systems, College of Science and Engineering</p>
          <p className='mb-2'>Office: Delta 163</p>
          <div className="flex justify-center items-center">
            <EnvelopeSimple size={24} className='mr-2'/>
            yue@uhcl.edu
          </div>
        </div>
        <div className='col-span-1 flex justify-center items-center flex-col'>
          <div className='h-[300px] w-[300px] bg-emerald-200 mb-4 rounded-full overflow-hidden'>
            <img className='w-[90%] ml-5 mt-4' src={KeweiSha} alt="f"/>
          </div>
          <p className="m-0 mb-2 text-xl font-semibold">Dr. Kewei Sha</p>
          <p className='m-0 text-center w-[250px] mb-2'>Assistant Professor of Computer Science, College of Science and Engineering</p>
          <p className='mb-2'>Office: Delta 148</p>
          <div className="flex justify-center items-center">
            <EnvelopeSimple size={24} className='mr-2'/>
            sha@uhcl.edu
          </div>
        </div>
      </div>
    </div>
  )
}