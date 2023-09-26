import { Button, Form, Input } from "antd";
import axios from "axios";

const onFinish = async (values: any) => {
  console.log("Success:", values);

  try {
    const response = await postCar(values); // Supondo que "values" contenha os dados do carro
    console.log("Response from server:", response);
  } catch (error) {
    console.error("Error:", error);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  renavam?: string;
  ano?: number;
  placa?: string;
  marca?: string;
  modelo?: string;
  daily?: number;
};

const postCar = async (dataCar: {
  renavam: string;
  ano: number;
  marca: string;
  modelo: string;
  placa: string;
  daily: number;
}) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNGUzMzZiNy1hNzgwLTQxMjMtYjM3NS0zMTgyN2M4OWFkYTIiLCJ1c2VybmFtZSI6IjFAY2xpZW50LmNvbSIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE2OTU2ODUyMjQsImV4cCI6MTY5NTY5MTIyNH0.igsB0uPht8ZZEAwyzGBKnr3xfct5r_fjsoTWqKF56d4",
  };

  const response = await axios.post("localhost:5500/car", dataCar, { headers });

  return response.data;
};

const FormCarros: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Renavam"
      name="renavam"
      rules={[{ required: true, message: "Digite o renavam!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Ano"
      name="ano"
      rules={[
        { required: true, message: "Digite o ano do carro!" },
        {
          type: "integer",
          message: "Por favor, insira um número inteiro para o ano!",
          transform: (value) => {
            if (!isNaN(Number(value))) {
              return Number(value);
            }
            return value;
          },
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Marca"
      name="marca"
      rules={[{ required: true, message: "Digite a marca do carro!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Modelo"
      name="modelo"
      rules={[{ required: true, message: "Digite a modelo do carro!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Placa"
      name="placa"
      rules={[{ required: true, message: "Digite a placa!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Daily rate"
      name="daily"
      rules={[
        { required: true, message: "Digite o Daily rate!" },
        {
          type: "integer",
          message: "Por favor, insira um número inteiro para o Daily rate!",
          transform: (value) => {
            if (!isNaN(Number(value))) {
              return Number(value);
            }
            return value;
          },
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Cadastrar
      </Button>
    </Form.Item>
  </Form>
);

export default FormCarros;
