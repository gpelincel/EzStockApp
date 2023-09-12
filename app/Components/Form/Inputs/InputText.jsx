export default function InputText(props) {
    return (
        <div className="form-control w-full max-w-xs mb-2">
            <label className="d-flex label w-fit">
                {props.icon}
                <span className="label-text font-bold">{props.label}</span>
            </label>
            <input className="input input-bordered w-full max-w-xs" type="text" name={props.name} id={props.name} placeholder={props.placeholder} />
        </div>
    );
}