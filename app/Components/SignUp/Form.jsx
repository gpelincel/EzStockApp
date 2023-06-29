export default function Form() {
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email" className="input input-bordered bg-base-300" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Senha</span>
                    </label>
                    <input type="text" placeholder="Senha" className="input input-bordered bg-base-300" />
                    <div className="flex">
                    <label className="label">
                        <a href="/" className="label-text-alt link link-hover">Já possui conta? Faça login!</a>
                    </label>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-2 form-control mt-6 w-full">
                    <button className="btn btn-primary">Cadastrar</button>
                    <button type="reset" className="btn btn-error">Limpar</button>
                </div>
            </form>
        </div>
    );
}