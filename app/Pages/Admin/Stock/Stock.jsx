import Desktop from "../../../Components/Admin/Menu/Menu.Desktop";
import Table from "../../../Components/Stock/Stock.table";
import ToolBar from "../../../Components/Stock/Stock.toolBar";

export default function Stock() {
    return (
        <>
            <Desktop></Desktop>
            <main className="p-8 flex items-center flex-col">
                <ToolBar></ToolBar>
                <Table></Table>
            </main>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="flex flex-row w-full justify-between items-center">
                        <h1 className="prose text-center uppercase text-lg m-3"><b>Cadastrar produto</b></h1>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6">X</label>
                        </div>
                    </div>
                    <form>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Nome do Produto</span>
                            </label>
                            <input type="text" placeholder="Digite o nome do produto" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Preço de Custo</span>
                            </label>
                            <input type="text" placeholder="Digite o preço de custo" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Preço de Venda</span>
                            </label>
                            <input type="text" placeholder="Digite o preço de venda" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Quantidade</span>
                            </label>
                            <input type="text" placeholder="Digite a quantidade" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Data de Fabricação</span>
                            </label>
                            <input type="date" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Data de Validade</span>
                            </label>
                            <input type="date" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Medida da Unidade do Produto</span>
                            </label>
                            <input type="text" placeholder="Digite a medida da unidade do produto" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Fornecedor</span>
                            </label>
                            <input type="text" placeholder="Digite o nome do fornecedor" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Marca</span>
                            </label>
                            <input type="text" placeholder="Digite a marca do produto" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
                    </form>
                </div>
            </div>
        </>
    );
}