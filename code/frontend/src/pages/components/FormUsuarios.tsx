import { Button, Form, Input, Radio, Select } from "antd";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const onFinish = async (values: any) => {
  console.log("Success:", values);

  try {
    const response = await postUser(values);
    console.log("Response from server:", response);
  } catch (error) {
    console.error("Error:", error);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  name?: string;
  cpf?: string;
  email?: string;
  password?: string;
};

const postUser = async (dataUser: {
  name: string;
  password: string;
  email: string;
  cpf: string;
  role: string;
}) => {
  const response = await axios.post("http://localhost:5500/user", dataUser);
  console.log("aaaa");
  return response.data;
};

function FormUsuarios() {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  const [tipoUsuario, setTipoUsuario] = useState<string>("client");

  const handleRadioChange = (e: any) => {
    setTipoUsuario(e.target.value);
    setComponentDisabled(e.target.value !== "client");
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 13 }}
      wrapperCol={{ span: 118 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Qual o seu tipo de usuário" name="role">
        <Radio.Group onChange={handleRadioChange} value={tipoUsuario}>
          <Radio value="agent"> Empresa </Radio>
          <Radio value="bank"> Banco </Radio>
          <Radio value="client"> client </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item<FieldType>
        label="Nome"
        name="name"
        rules={[{ required: true, message: "Digite o Nome!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="cpf/cnpj"
        name="cpf"
        rules={[{ required: true, message: "Digite o cpf/cnpj!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          { required: true, type: "email", message: "Digite o email válido!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Senha"
        name="password"
        rules={[{ required: true, message: "Digite uma senha!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </Form.Item>

      <div>
        <Link href={"/login"}>Já possui conta? Faça o Login.</Link>
      </div>
    </Form>
  );
}

export default FormUsuarios;
