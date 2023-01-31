import { EnvelopeSimple } from 'phosphor-react';
import Default from '../../assets/default.png';

export default function Mentors() {
  return (
    <div className='body-height p-8 grid grid-cols-2 grid-rows-1 gap-8'>
      <div className='col-span-1 flex justify-center items-center flex-col'>
        <img className='rounded-full' src={Default} alt="f"/>
        <p className="m-0 mb-2 text-xl font-semibold">Dr. Kwok-Bun Yue</p>
        <p className='m-0 text-center w-[250px] mb-2'>Professor of Computer Science and Computer Information Systems, College of Science and Engineering</p>
        <div className="flex justify-center items-center mb-2">
          <EnvelopeSimple size={24} />
          yue@uhcl.edu
        </div>
        <p className=''>Office: Delta 163</p>
      </div>
      <div className='col-span-1 flex justify-center items-center flex-col'>
        <img className='rounded-full' src={Default} alt="f"/>
        <p className="m-0 mb-2 text-xl font-semibold">Dr. Kewei Sha</p>
        <p className='m-0 text-center w-[250px] mb-2'>Assistant Professor of Computer Science, College of Science and Engineering</p>
        <div className="flex justify-center items-center mb-2">
          <EnvelopeSimple size={24} />
          sha@uhcl.edu
        </div>
        <p className=''>Office: Delta 148</p>
      </div>
    </div>
  )
}