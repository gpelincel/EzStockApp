export default function InputSelect(props) {
    return (
        <div className="form-control w-full max-w-xs mb-2">
            <label className="d-flex label w-fit">
                {props.icon}
                <span className="label-text font-bold">{props.label}</span>
            </label>
            <select className="select select-bordered">
                <option defaultValue={null}>Selecione</option>
                {props.options.map(option => {
                    return (
                        <option key={option.id} value={option.value}>{option.name}</option>
                    )
                })}
            </select>
        </div>
    );
}