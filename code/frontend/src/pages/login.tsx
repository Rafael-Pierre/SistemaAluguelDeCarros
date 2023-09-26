import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import Link from "next/link";

const onFinish = async (values: any) => {
  console.log("Success:", values);

  try {
    const response = await axios.post("http://localhost:5500/auth", values);

    localStorage.setItem("token", response.data.access_token);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
};

const App: React.FC = () => (
  <div className="forms">
    <h1 className="title">Faça seu Login:</h1>

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
        label="email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      <div>
        <Link href={"/cadastro"}>Não possui conta? Crie a sua.</Link>
      </div>
    </Form>
  </div>
);

export default App;
