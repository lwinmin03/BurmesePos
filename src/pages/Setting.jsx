import ProfileCard from "../components/Setting/ProfileCard.jsx";

function Setting() {

    const setting=[{id:1,name:"Profile"},{id:2,name:"Role Management"}]

    return (
        <div className={` w-full h-full   p-1` }>

            <div className={` h-full max-w-6xl  shadow-sm rounded-sm`}>
                <header className={`bg-white shadow-sm  p-1 font-inter flex justify-around items-center w-1/2 text-center`}>
                    {setting.map((set)=>(
                        <button key={set.id}     className={`${1===set.id && "bg-gray-200" } cursor-pointer w-1/2 px-2 py-1  rounded-sm `}>{set.name}</button>
                    ))}
                </header>

                <div className={`container`}>
                    <ProfileCard/>


                </div>




            </div>
        </div>
    )
}
export default Setting;