import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return (
    <div className="flex gap-2">
        <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
            <TbGridDots color="#5f6368" size={20}/>
        </span>
        <span className="h-10 w-10 flex relative items-center justify-center ">
        <img src={ProfileRing} className="absolute"></img>
            <span className="h-8 w-8 rounded-full overflow-hidden">
                <img className="h-full w-full object-cover" src={Profile}></img>
            
            </span>
           
        </span>
    </div>
    );
};

export default ProfileIcon;
