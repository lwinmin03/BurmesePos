import {TractorIcon, TrashIcon} from "lucide-react";

const ProfileCard = () => {
  return (
      <div className={`w-full flex flex-col bg-red-200  h-full overflow-x-auto`}>

      <div className={`row Profile Image flex`}>
          <img src={"https://placehold.co/400"} alt="Profile Image"  className={`rounded-full size-30`}/>
          <div className={`action group`}>

              <TrashIcon/>
             <button >upload</button>

          </div>
      </div>
          <div className={`row`}>
2
          </div>
          <div className={`row`}>
3
          </div>


      </div>


  )
}


export default ProfileCard;