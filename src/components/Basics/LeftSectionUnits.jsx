
function LeftSectionUnits({ icon, data, active = "" }) {
    console.log(icon);
    return (
        <div className={`flex items-center gap-3.5 text-black dark:text-white type-option type-${active}`}>
            <div className={`rounded-xl p-2.5 type-icon icon-${active}`}>{icon}</div>
            <div className="text-black dark:text-white type-label">{data}</div>
        </div>
    )
}

export default LeftSectionUnits