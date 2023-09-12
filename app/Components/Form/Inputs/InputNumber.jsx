export default function InputNumber(props) {
    return (
        <div className="form-control w-full max-w-xs mb-2">
            <label className="d-flex label w-fit">
                {props.icon}
                <span className="label-text font-bold">{props.label}</span>
            </label>
            <input className="input input-bordered w-full max-w-xs" type="number" max={props.max} min={props.min} name={props.name} id={props.name} placeholder={props.placeholder} hidden={props.hidden} />
        </div>
    );
}