import Link from "next/link";
import { Card } from "antd";
import {
  CarOutlined,
  CreditCardOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

export default function Home() {
  return (
    <div className="forms">
      <h1 className="title">Seja bem vindo Agente!</h1>

      <Link href={"/carros"}>
        <Card
          className="cards"
          hoverable
          style={{
            width: 250,
            height: 150,
            padding: 15,
          }}
        >
          <CarOutlined className="icons" />
          <br />
          Cadastre um carro
        </Card>
      </Link>

      <Link href={"/aluguel"}>
        <Card
          className="cards"
          hoverable
          style={{
            width: 250,
            height: 150,
            padding: 15,
          }}
        >
          <CreditCardOutlined className="icons" />
          <br />
          Cadastre um aluguel
        </Card>
      </Link>

      <Link href={"/aluguel"}>
        <Card
          className="cards"
          hoverable
          style={{
            width: 250,
            height: 150,
            padding: 15,
          }}
        >
          <IdcardOutlined className="icons" />
          <br />
          Aprovar pedidos
        </Card>
      </Link>
    </div>
  );
}
