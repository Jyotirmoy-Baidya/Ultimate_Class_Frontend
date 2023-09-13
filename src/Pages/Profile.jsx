import { MdOutlineGroups, MdPersonOutline } from "react-icons/md"
import { PiExam } from "react-icons/pi"
import { BsBellFill } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import LeftSectionUnits from "../Components/Basics/LeftSectionUnits"
import { useState } from "react"
import { SiGoogleclassroom } from "react-icons/si"
import ProfileCount from "../Components/Profile/ProfileCount"

const role = "teacher"

function Profile() {
    const [type, setType] = useState(0);
    return (
        <div className="h-screen w-screen bg-gray-100 dark:bg-black grid lg:grid-cols-6 grid-cols-1 grid-rows-1 Teacher-Home">
            <div className="h-full col-span-1 py-16 px-10 bg-white dark:bg-gray-900 class-type">
                <div className="flex flex-col gap-6 options">
                    <div onClick={() => setType(0)}>
                        {
                            type == 0 ? <LeftSectionUnits icon={<MdPersonOutline />} data="Profile" active="active" /> :
                                <LeftSectionUnits icon={<MdPersonOutline />} data="Profile" />
                        }
                    </div>
                    <div onClick={() => setType(1)}>
                        {
                            type == 1 ? <LeftSectionUnits icon={<PiExam />} data="Quiz" active="active" /> : <LeftSectionUnits icon={<PiExam />} data="Quiz" />
                        }
                    </div>
                    <div onClick={() => setType(2)}>
                        {
                            type == 2 ? <LeftSectionUnits icon={<BsBellFill />} data="Notification" active="active" /> : <LeftSectionUnits icon={<BsBellFill />} data="Notification" />
                        }
                    </div>
                    <div onClick={() => setType(3)}>
                        {
                            type == 3 ? <LeftSectionUnits icon={<FiSettings />} data="Settings" active="active" /> : <LeftSectionUnits icon={<FiSettings />} data="Settings" />
                        }
                    </div>
                </div>
            </div>
            <div className="h-full flex flex-col lg:col-span-5 col-span-1 bg-gray-100 dark:bg-gray-800 data">
                <div className="grid lg:grid-cols-5 grid-cols-4 p-10 profile-data">
                    <img className="rounded-3xl lg:col-span-1 col-span-2 col-start-2 col-end-4" src="https://1fid.com/wp-content/uploads/2022/06/cartoon-profile-picture-12-1024x1024.jpg" alt="" />
                    <div className="lg:col-span-4 lg:p-8 lg:px-10 py-8 flex flex-col col-span-4 profile-details">
                        <div className="text-3xl lg:text-left text-center dark:text-white user-name">Jyotirmoy Baidya</div>

                        {/* Progress Bar  */}
                        <div className="rewards-progress">
                            <div className="mt-8 mb-1 text-sm text-right text-gray-400">240/2400 xp</div>
                            <div className="mb-5 h-2.5 w-full  overflow-hidden rounded-full dark:bg-gray-200 bg-gray-300">
                                <div className="h-2.5 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500 w-4/12"></div>
                            </div>
                        </div>
                        <div className="py-3 flex justify-between records">
                            {
                                role === "student" ?
                                    <>
                                        <div className="my-classes-count">
                                            <div className="profile-count-icon"><MdOutlineGroups /></div>
                                            <div>Own Classes</div>
                                        </div>
                                        <div className="quizzes-attempted-count"><SiGoogleclassroom /> </div>
                                        <div>Insititutes</div>
                                    </> :
                                    role === "teacher" ?
                                        <>
                                            <ProfileCount icon={<MdOutlineGroups />} count={23} data="Own Classes" />
                                            <ProfileCount icon={<SiGoogleclassroom />} count={10} data="Insititutes" />
                                            <ProfileCount icon={<PiExam />} count={23} data="Quiz Created" />

                                        </> : <></>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile