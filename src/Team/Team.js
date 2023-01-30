import './Team.css'
import ProfileCard from '../ProfileCard/ProfileCard';
import MemberInfo from '../Defaults';

const renderProfileCards = () => {
    console.log(MemberInfo)
    return (
        Object.entries(MemberInfo).map(([key, value]) => {
            return <ProfileCard 
                profileImage= {value.image}
                displayName= {key}
                id={"2092395"}
                email={"petlar5488@uhcl.edu"}
            />
        })
    ) 
}

const Team = () => {
    return (      
        <div className="container">
            <div className="team_container">
                <div className="text">Meet Our Team</div>
            </div>
            <div className="grid-container"> 
                {renderProfileCards()}      
            </div>
        </div>       
    );
}

export default Team;