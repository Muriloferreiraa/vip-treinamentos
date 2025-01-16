import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
	return (
		<nav className="bg-green-600 p-4">
			<div className="container mx-auto flex items-center justify-between">
				<h1 className="text-white text-2xl font-bold flex-1">
					<Link href="/">VIP SST</Link>
				</h1>
				<ul className="flex space-x-4">
					<li className="text-white hover:text-gray-300 cursor-pointer">
						<Link href="/empresas">Empresas</Link>
					</li>
					<li className="text-white hover:text-gray-300 cursor-pointer">
						<Link href="/funcionarios">Funcionários</Link>
					</li>
					<li className="text-white hover:text-gray-300 cursor-pointer">
						<Link href="/treinamentos">Treinamentos</Link>
					</li>
					<li className="text-white hover:text-gray-300 cursor-pointer"></li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
