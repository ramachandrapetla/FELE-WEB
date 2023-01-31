const REPORTS = [
  { date: '01/31/2023', pdf: null, disabled: false },
  { date: '02/07/2023', pdf: null, disabled: true }
]

export default function Reports() {
  const renderReport = (report, index) => {
    return (<div className={!report.disabled ? "w-full rounded-md p-3 cursor-pointer transition duration-200 mb-4 hover:bg-green-50 hover:text-green-900 flex justify-center items-center select-none" : "w-full rounded-md p-3 text-gray-400 cursor-pointer mb-4 flex justify-center items-center select-none"} key={index}>
      <div className="mx-2">{report.date}</div>
    </div>)
  }

  return (
    <div className="m-12 px-24 flex flex-col justify-center items-center">
      <p className="mb-4 text-2xl font-semibold w-full text-center">Weekly Reports</p>
      <div className="grid grid-cols-1 grid-rows-14 w-[500px]">{REPORTS.map(renderReport)}</div>
    </div>
  )
}