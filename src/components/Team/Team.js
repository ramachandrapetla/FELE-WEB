import './Team.css'
import ProfileCard from '../ProfileCard/ProfileCard';
import MemberInfo from '../../Defaults';

const renderProfileCards = () => {
    return (
        Object.entries(MemberInfo).map(([key, member]) => {
            return <ProfileCard 
                profileImage= {member.image}
                displayName= {member.displayName}
                key={"member-" + key}
                email={member.email}
                linkedIn={member.linkedIn}
                imgClass={member.classname}
            />
        })
    ) 
}

const Team = () => {
    return (    
        <div className='p-8 w-full'>
            <div className="text-3xl font-semibold text-green-900 mb-8">Meet Our Team</div>
            <div className="grid grid-cols-3 grid-rows-2 gap-8"> 
                {renderProfileCards()}      
            </div>
        </div>
    );
}

export default Team;