import Assets from "../Assets/Assets";

const ProfileCard = ({profileImage, displayName, id, email, linkedIn}) => {
    const image = Assets[`${profileImage}`] || Assets.defaultImage
    return (
        <div className="profile-card">
            <div className="profile-content">
                <div className="profile-image">
                    <img src={image} alt="f" />
                    {/* <img src={profileImage} alt="first user" /> */}
                </div>
                <div className="desc">
                    <h2>{displayName}</h2>
                    <p><b>{id}</b></p>
                    <p>{email}</p>
                </div>
                <div className="btn-div">
                    <button className="btn"><i className="fa fa-facebook"></i>LinkedIn</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;