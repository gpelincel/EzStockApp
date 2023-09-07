export default function InputRadio(props) {
    return (
        <>
            {props.radios.forEach(radio => {
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">{radio.label}</span>
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked={radio.checked} />
                    </label>
                </div>
            })}
        </>
    );
}