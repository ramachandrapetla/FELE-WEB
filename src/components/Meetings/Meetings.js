const MOM_TIME = '9:00 AM to 10:00 AM CST';

const MOMS = [
  { date: '01/31/2023', time: MOM_TIME, pdf: null, disabled: false },
  { date: '02/07/2023', time: MOM_TIME, pdf: null, disabled: true }
]

export default function Meetings() {
  const renderMOM = (mom, index) => {
    return (<div className={!mom.disabled ? "w-full rounded-md p-3 cursor-pointer transition duration-200 mb-4 hover:bg-green-50 hover:text-green-900 flex justify-center items-center select-none" : "w-full rounded-md p-3 text-gray-400 cursor-pointer mb-4 flex justify-center items-center select-none"} key={index}>
      <div className="mx-2">{mom.date}</div>
      <div className="">{mom.time}</div>
    </div>)
  }

  return (
    <div className="m-12 px-24 flex flex-col justify-center items-center">
      <p className="mb-4 text-2xl font-semibold w-full text-center">Mentor Meetings</p>
      <div className="grid grid-cols-1 grid-rows-14 w-[500px]">{MOMS.map(renderMOM)}</div>
    </div>
  )
}