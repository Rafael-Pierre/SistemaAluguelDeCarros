import { Button, Form, Input } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  renavam?: string;
  ano?: number;
  placa?: string;
  marca?: string;
  remember?: string;
  modelo?: string;
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
      rules={[{ required: true, message: "Digite o ano do carro!" }]}
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

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Cadastrar
      </Button>
    </Form.Item>
  </Form>
);

export default FormCarros;
