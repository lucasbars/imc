import Imc from "./imc/page";

export const metadata = {
  title: "Calculadora de IMC",
  description:
    "Veja seu Índice de Massa Corporal com esta calculadora simples.",
};
export default function Home() {
  return <Imc />;
}
