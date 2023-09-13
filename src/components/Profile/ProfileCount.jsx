import PropTypes from 'prop-types';
function ProfileCount({ icon, count, data }) {
    return (
        <div className="flex lg:flex-row flex-col items-center gap-3 dark:text-white text-black">
            <div className="rounded-lg p-3 shadow-md dark:text-violet-400 text-violet-800 dark:shadow-indigo-500/40 shadow-violet-500/50 profile-count-icon">{icon}</div>
            <div className="flex flex-col">
                <div className="font-bold dark:text-violet-400 lg:text-left text-center text-violet-800">{count}</div>
                <div className="font-normal tracking-wider lg:text-left text-center lg:pt-0 pt-2 text-gray-500 dark:text-gray-400 text-sm">{data}</div>
            </div>
        </div>
    )
}
ProfileCount.propTypes = {
    icon: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    data: PropTypes.string.isRequired

}

export default ProfileCount