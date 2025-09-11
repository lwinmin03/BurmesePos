import { TractorIcon, TrashIcon } from "lucide-react";
import avatar from '../../assets/POS LOGO.png'
const ProfileCard = () => {
    return (
        <div className={`w-full flex flex-col gap-y-9 h-full overflow-x-auto`}>

            <div className={`row Profile w-full Image p-1 justify-between items-center flex`}>
                <div className="size-20">
                    <img src={`https://avatar.iran.liara.run/public/34`} alt="Profile Image" className={`rounded-full w-full`} />
                </div>
                <div className={`action group flex items-center gap-2.5`}>

                    <TrashIcon />
                    <button className="px-2 py-1 bg-gray-800 text-white rounded-sm" >upload</button>

                </div>
            </div>


            <div className={`row flex justify-between p-1 items-center`}>
                <div className={``}>
                    <h1 className="text-xl font-medium">Display Name</h1>
                    <h4>Lwin Min Thein</h4>
                </div>

                <div>
                    <button className="px-2 py-1 bg-gray-800 text-white rounded-sm">EDIT</button>
                </div>
            </div>


            <div className={`row flex justify-between p-1 items-center`}>
                <div className={``}>
                    <h1 className="text-xl font-medium">Role</h1>
                    <h4>Manager</h4>
                </div>

                <div>
                    <button className="px-2 py-1 bg-gray-800 text-white rounded-sm">EDIT</button>
                </div>
            </div>


            <div className={`row flex justify-between p-1 items-center`}>
                <div className={``}>
                    <h1 className="text-xl font-medium">DOC</h1>
                    <h4>2022/01/15</h4>
                </div>

                <div>
                    <button className="px-2 py-1 bg-gray-800 text-white rounded-sm">EDIT</button>
                </div>
            </div>


            <div className={`row flex justify-between p-1 items-center`}>
                <div className={``}>
                    <h1 className="text-xl font-medium">NRC</h1>
                    <h4>12/YaKhaTa(N)000012</h4>
                </div>

                <div>
                    <button className="px-2 py-1 bg-gray-800 text-white rounded-sm">EDIT</button>
                </div>
            </div>



        </div>


    )
}


export default ProfileCard;