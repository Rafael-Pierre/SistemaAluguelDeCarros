import Link from "next/link";
import FormAluguel from "./components/FormAluguel";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <div>
      <Link href={"/agente"}>
        <ArrowLeftOutlined /> Back
      </Link>
      <div className="forms">
        <h1 className="title">Cadastre o Aluguel</h1>
        <FormAluguel />
      </div>
    </div>
  );
}
