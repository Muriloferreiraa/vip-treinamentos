import type { NextApiRequest, NextApiResponse } from "next";
import { EmpresaType } from "@/types";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<EmpresaType[]>
) {
	res.status(200).json([
		{
			razaoSocial: "VIP",
			cnpj: "04.033.013/0001-18",
			funcionarios: [
				"Murilo",
				"Jesus",
				"Mariana",
				"Bruno",
				"Luciana",
				"Rodrigo",
			],
			treinamentos: [],
		},
	]);
}
