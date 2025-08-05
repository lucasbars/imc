"use client";

import { useState } from "react";

export default function Imc() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState<number | null>(null);
  const [classificacao, setClassificacao] = useState("");

  function updatedPeso(e: React.ChangeEvent<HTMLInputElement>) {
    setPeso(e.target.value);
  }

  function updatedAltura(e: React.ChangeEvent<HTMLInputElement>) {
    setAltura(e.target.value);
  }

  function classificacaoIMC(valor: number): string {
    if (valor < 18.5) return "Abaixo do peso";
    if (valor >= 18.5 && valor < 25) return "Peso normal";
    if (valor >= 25 && valor < 30) return "Sobrepeso";
    if (valor >= 30 && valor < 35) return "Obesidade grau I";
    if (valor >= 35 && valor < 40) return "Obesidade grau II";
    return "Obesidade grau III (mórbida)";
  }

  function calculaIMC() {
    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura.replace(",", "."));

    if (!pesoNum || !alturaNum) {
      alert("Informe peso e altura válidos");
      return;
    }

    const resultado = pesoNum / (alturaNum * alturaNum);
    const imcCalculado = parseFloat(resultado.toFixed(2));
    setImc(imcCalculado);

    if (imcCalculado !== null) {
      setClassificacao(classificacaoIMC(imcCalculado));
    }
  }

  return (
    <div className="min-h-screen bg-emerald-50 text-sky-900">
      <section className="container mx-auto px-4 py-10">
        <div className="flex justify-center text-3xl font-bold text-emerald-700 mb-6">
          <h1>Cálculo de IMC</h1>
        </div>

        <div>
          <div className="grid gap-6 mb-6">
            <div>
              <label
                htmlFor="peso"
                className="block mb-2 text-sm font-medium text-emerald-800"
              >
                Digite seu peso
              </label>
              <input
                type="text"
                id="peso"
                value={peso}
                onChange={updatedPeso}
                className="bg-white border border-emerald-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                placeholder="Peso em kg (ex: 70)"
                required
              />
            </div>
            <div>
              <label
                htmlFor="altura"
                className="block mb-2 text-sm font-medium text-emerald-800"
              >
                Digite sua altura
              </label>
              <input
                type="text"
                id="altura"
                value={altura}
                onChange={updatedAltura}
                className="bg-white border border-emerald-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                placeholder="Altura em metros (ex: 1.75)"
                required
              />
            </div>
          </div>

          {imc !== null && (
            <div
              className={`flex justify-start text-xl font-medium mt-4 ${
                classificacao.includes("normal")
                  ? "text-green-600"
                  : classificacao.includes("Sobrepeso")
                  ? "text-yellow-600"
                  : classificacao.includes("Obesidade")
                  ? "text-red-600"
                  : "text-gray-700"
              }`}
            >
              <h1>
                Resultado: IMC: {imc} - {classificacao}
              </h1>
            </div>
          )}

          <div className="w-full md:max-w-2xl mx-auto mt-7">
            <button
              type="submit"
              onClick={calculaIMC}
              className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-semibold rounded-lg text-lg w-full px-5 py-2.5 text-center"
            >
              Calcular
            </button>
          </div>
        </div>

        <div className="overflow-x-auto mt-8">
          <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-emerald-600 text-white text-left">
                <th className="px-4 py-3 border-b border-gray-300">IMC</th>
                <th className="px-4 py-3 border-b border-gray-300">
                  Classificação
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="odd:bg-white even:bg-emerald-100">
                <td className="px-4 py-2 border-b border-gray-300">
                  Menor que 18,5
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  Abaixo do peso
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-emerald-100">
                <td className="px-4 py-2 border-b border-gray-300">
                  Entre 18,5 e 24,9
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  Peso normal
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-emerald-100">
                <td className="px-4 py-2 border-b border-gray-300">
                  Entre 25,0 e 29,9
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  Sobrepeso
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-emerald-100">
                <td className="px-4 py-2 border-b border-gray-300">
                  Entre 30,0 e 34,9
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  Obesidade grau I
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-emerald-100">
                <td className="px-4 py-2 border-b border-gray-300">
                  Entre 35,0 e 39,9
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  Obesidade grau II
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-emerald-100">
                <td className="px-4 py-2 border-b border-gray-300">
                  Maior que 40,0
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  Obesidade grau III (mórbida)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
