export default function InputSelect(props) {
    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <select className="select select-bordered">
                <option disabled selected>Selecione</option>
                {props.options.forEach(option => {
                <>
                    <option value={option.value}>{option.name}</option>
                </>
                })}
            </select>
        </div>
    );
}