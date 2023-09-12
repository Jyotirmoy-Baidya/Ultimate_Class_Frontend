import { IoMdAdd } from 'react-icons/io';

import "../Style/Home.css"
import Class from "../Components/Home/Class";
import Options from "../Components/Home/Options";

function Home() {
    return (
        <div className="h-screen w-screen bg-gray-300 dark:bg-black grid lg:grid-cols-6 grid-cols-1 grid-rows-1 Teacher-Home">

            {/* leftmost Column Of Options */}
            <Options />

            {/* Middle Class Part  */}

            <div className="h-full flex flex-col lg:col-start-2 lg:col-end-6 bg-gray-200 dark:bg-gray-800 all-classes">
                <div className="w-100 pt-6 pb-2 px-10 text-4xl flex justify-between items-center all-classes-head">
                    <div className="text-left dark:text-white tracking-wide font-semibold all-classes-label">Classes</div>
                    <div className="rounded-lg p-1.5 flex justify-center items-center text-lg icon-active">
                        <IoMdAdd />
                    </div>
                </div>
                {/* Display All Classes  */}
                <div className="m-h-full w-full overflow-y-scroll px-10 pt-8 pb-10  grid lg:grid-cols-2 grid-cols-1 gap-8 all-classes-list">
                    {/* Blue  */}
                    <Class color="blue" />

                    {/* Pink   */}
                    <Class color="pink" />

                    {/* Yellow  */}
                    <Class color="yellow" />

                    {/* Green */}
                    <Class color="green" />

                    {/* Purple */}
                    <Class color="purple" />
                </div>
            </div>

            {/* To do list  */}
            < div className="flex flex-col bg-white all-classes" ></div>

        </div >
    )
}

export default Home