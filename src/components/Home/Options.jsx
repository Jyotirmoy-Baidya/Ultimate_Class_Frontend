import { MdOutlineGroups } from "react-icons/md"
import { SiGoogleclassroom } from "react-icons/si"

function Options() {
    return (
        <>
            <div className="h-full grid-span-1 py-28 px-10 bg-white dark:bg-gray-900 class-type">
                <div className="flex flex-col gap-6 options">
                    <div className="flex items-center gap-3.5 text-black dark:text-white type-option type-active">
                        <div className="rounded-xl p-2.5 type-icon icon-active"><MdOutlineGroups /></div>
                        <div className="text-black dark:text-white type-label">Own</div>
                    </div>
                    <div className="flex items-center gap-3 text-black dark:text-white type-option">
                        <div className="rounded-xl p-2.5 type-icon"><SiGoogleclassroom /></div>
                        <div className="text-black dark:text-white type-label">Insitutes</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Options