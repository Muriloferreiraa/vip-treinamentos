import { EmpresaType } from "@/types";
import { useEffect, useState } from "react";

export default function Empresas() {
	const [empresas, setEmpresas] = useState<EmpresaType[]>([]);
	const [start, setStart] = useState<boolean>(false);

	async function loadEmpresas() {
		const res = await fetch("/api/empresas/get", {
			method: "GET",
		});
		if (res.ok) {
			setEmpresas(
				(await res.json()).map((a: EmpresaType) => {
					return { ...a, selected: false };
				})
			);
		} else {
			console.error("Erro ao puxar empresa");
		}
	}

	useEffect(() => {
		if (!start) {
			loadEmpresas();
			setStart(true);
		}
	}, []);

	// Função para adicionar uma nova empresa
	const addCompany = () => {
		const newCompany: EmpresaType = {
			cnpj: "00.000.000/0000-00",
			razaoSocial: `Empresa ${String.fromCharCode(65 + empresas.length)}`,
			funcionarios: [],
			treinamentos: [],
			selected: false,
		};
		setEmpresas([...empresas, newCompany]);
	};

	// Função para deletar empresas selecionadas
	const deleteCompany = () => {
		const filteredCompanies = empresas.filter(
			(company) => !company.selected
		);
		setEmpresas(filteredCompanies);
	};

	// Função para selecionar/deselecionar uma empresa
	const toggleSelect = (id: string) => {
		setEmpresas(
			empresas.map((company) =>
				company.cnpj === id
					? { ...company, selected: !company.selected }
					: company
			)
		);
	};

	return (
		<div className="flex p-5 gap-5">
			{/* Área Principal */}
			<div className="flex-1 border-2 border-green-500 p-5 rounded">
				<h2 className="text-xl text-center text-green-500 font-bold mb-4">Lista de Empresas</h2>
				<table className="table-auto border-collapse border border-green-500 w-full">
					<thead>
						<tr className="bg-green-500">
							<th className="border border-gray-500 px-4 py-2">
								Selecionar
							</th>
							<th className="border border-gray-500 px-4 py-2">
								Razão Social
							</th>
							<th className="border border-gray-500 px-4 py-2">
								Funcionários
							</th>
							<th className="border border-gray-500 px-4 py-2">
								Treinamentos
							</th>
						</tr>
					</thead>
					<tbody>
						{empresas.map((company) => (
							<tr key={company.cnpj} className="text-center">
								<td className="border border-gray-500 px-4 py-2">
									<input
										type="checkbox"
										checked={company.selected}
										onChange={() =>
											toggleSelect(company.cnpj)
										}
										className="form-checkbox h-5 w-5 text-blue-600"
									/>
								</td>
								<td className="border border-gray-500 px-4 py-2">
									{company.razaoSocial}
								</td>
								<td className="border border-gray-500 px-4 py-2">
									{company.funcionarios.join(", ")}
								</td>
								<td className="border border-gray-500 px-4 py-2">
									{company.treinamentos.length}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Painel Lateral */}
			<div className="border-2 border-green-500 p-5 rounded">
				<button
					onClick={addCompany}
					className="block w-full mb-3 py-2 px-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
				>
					Nova Empresa
				</button>
				<button
					onClick={deleteCompany}
					className="block w-full py-2 px-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
				>
					Deletar Empresa
				</button>
			</div>
		</div>
	);
}
