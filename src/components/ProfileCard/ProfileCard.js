import { LinkedinLogo } from "phosphor-react";
import Assets from "../../assets/Assets";

const ProfileCard = ({profileImage, displayName, email, linkedIn, imgClass}) => {
    const image = Assets[`${profileImage}`] || Assets.defaultImage
    return (
        <div className="p-6 rounded-lg flex flex-col bg-white justify-between items-center">
            <div className='h-[200px] w-[200px] bg-slate-200 mb-1 rounded-full overflow-hidden'>
                {/* <img className={imgClass} src={image} alt="f"/> */}
            </div>
            <div className="mt-1">
                <div className="flex justify-between items-center">
                    <p className="m-0 text-xl font-semibold">{displayName}</p>
                    <a href={linkedIn} target="_blank" rel="noreferrer" className="cursor-pointer">
                        <LinkedinLogo size={24} className="text-blue-400"/>
                    </a>
                </div>
                <p className="m-0 text-gray-600">{email}</p>
                {/* <a target="_blank" rel="noreferrer" href={`mailto:${email}`}>
                    <EnvelopeSimple className="text-red-500" size={24} />
                </a> */}
            </div>
        </div>
    );
}

export default ProfileCard;