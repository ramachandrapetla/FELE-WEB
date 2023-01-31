import './Team.css'
import ProfileCard from '../ProfileCard/ProfileCard';
import MemberInfo from '../../Defaults';

const renderProfileCards = () => {
    return (
        Object.entries(MemberInfo).map(([key, value]) => {
            return <ProfileCard 
                profileImage= {value.image}
                displayName= {key}
                key={"member-" + key}
                id={"2092395"}
                email={"petlar5488@uhcl.edu"}
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