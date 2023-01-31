import Assets from "../../assets/Assets";
// import { EnvelopeSimple } from "phosphor-react";

const ProfileCard = ({profileImage, displayName, id, email, linkedIn}) => {
    const image = Assets[`${profileImage}`] || Assets.defaultImage
    return (
        <div className="p-6 rounded-lg flex flex-col bg-white justify-between items-center">
            <img className="h-[190px]" src={image} alt="f" />
            <div className="mt-4">
                <p className="m-0 text-xl font-semibold">{displayName}</p>
                <p className="m-0 text-gray-500">{id}</p>
                {/* <a target="_blank" rel="noreferrer" href={`mailto:${email}`}>
                    <EnvelopeSimple className="text-red-500" size={24} />
                </a> */}
            </div>
        </div>
    );
}

export default ProfileCard;