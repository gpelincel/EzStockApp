export default function InputNumber(props) {
    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input className="input input-bordered w-full max-w-xs" type="number" max={props.max} min={props.min} name={props.name} id={props.name} placeholder={props.placeholder} hidden={props.hidden} />
        </div>
    );
}