export default function InputCheckBox(props) {
    return (
        <>
            {props.checks.forEach(check => {
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" checked={check.checked} className="checkbox" name={check.name} />
                        <span className="label-text">{check.label}</span>
                    </label>
                </div>
            })}
        </>
    );
}