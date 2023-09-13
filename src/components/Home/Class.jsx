import { FcReading } from "react-icons/fc"
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';


function Class({ color }) {
    return (
        <>
            <NavLink className={`all-classes-class class-${color} flex flex-col justify-between`} to="/singleClass">
                <i></i>
                <div className="h-16 flex class-details">
                    <div className="h-full p-2 text-5xl class-icon"><FcReading /></div>
                    <div className="h-full w-full p-1 flex justify-between class-details-data">
                        <div className="flex flex-col gap-1 class-names">
                            <div className="uppercase text-lg class-name">Cse 1</div>
                            <div className="text-xs font-thin admin-name">Jyotirmoy Baidya</div>
                        </div>
                        <div className="h-full flex flex-col justify-center gap-1 enrolled-data">
                            <div className="rounded-xl h-10 w-10 bg-gray-50 flex justify-center items-center font-bold text-black no-of-student">12</div>
                            <div className="text-center text-gray-300 enroll-text">Enrolled</div>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-full h-2 class-progress-bar">
                    <div className="bg-gray-300 h-2 rounded-full w-6/12 progress"></div>
                </div>

            </NavLink>

        </>
    )
}
Class.propTypes = {
    color: PropTypes.any
}

export default Class