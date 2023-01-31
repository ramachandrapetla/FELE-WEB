import Default from '../../assets/default.png';

export default function Mentors() {
  return (
    <div className="m-8 grid grid-cols-1 divide-y divide-dashed divide-green-600 gap-8">
      <div className="p-4 grid grid-cols-8 gap-8 grid-rows-1">
        <img className="col-span-2 rounded-full" src={Default} alt="f"/>
        <div className="col-span-6">
          <p className="m-0 mb-2 text-2xl font-semibold">Mentor 1</p>
          <p className="m-0 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="text-sm">
            Email, LinkedIn etc
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-8 gap-8 grid-rows-1">
        <img className="col-span-2 rounded-full" src={Default} alt="f"/>
        <div className="col-span-6">
          <p className="m-0 mb-2 text-2xl font-semibold">Mentor 2</p>
          <p className="m-0 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="text-sm">
            Email, LinkedIn etc
          </div>
        </div>
      </div>
    </div>
  )
}