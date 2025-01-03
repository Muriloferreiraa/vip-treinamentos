import React, { useState } from 'react';

function Navbar() {
  // Estados para armazenar os valores digitados nos campos
  const [empresa, setEmpresa] = useState('');
  const [funcionario, setFuncionario] = useState('');
  const [setor, setSetor] = useState('');
  const [cargo, setCargo] = useState('');

  // Função para exibir os valores no console ao enviar o formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      empresa,
      funcionario,
      setor,
      cargo,
    });
  };

  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">VIP Engenharia</h1>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-300 cursor-pointer">Empresa</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">Funcionário</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">treinamento</li>
          <li className="text-white hover:text-gray-300 cursor-pointer"></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

