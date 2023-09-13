import { useState } from "react"
import { MdOutlineGroups } from "react-icons/md"
import { SiGoogleclassroom } from "react-icons/si"
import LeftSectionUnits from "../Basics/LeftSectionUnits";

function Options() {
    const [type, setType] = useState(0);
    return (
        <>
            <div className="h-full grid-span-1 py-28 px-10 bg-white dark:bg-gray-900 class-type">
                <div className="flex flex-col gap-6 options">
                    <div onClick={() => setType(0)}>
                        {
                            type == 0 ? <LeftSectionUnits icon={<MdOutlineGroups />} data="Own" active="active" onClick={() => setType(0)} /> :
                                <LeftSectionUnits icon={<MdOutlineGroups />} data="Own" onClick={() => setType(0)} />
                        }
                    </div>
                    <div onClick={() => setType(1)}>
                        {
                            type == 1 ? <LeftSectionUnits icon={<SiGoogleclassroom />} data="Institutes" active="active" /> :
                                <LeftSectionUnits icon={<SiGoogleclassroom />} data="Institutes" />
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Options