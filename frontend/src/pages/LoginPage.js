import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [loginError, setLoginError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/login", data);

      signIn({
        token: response.data.token,
        expiresIn: 90,
        tokenType: "string",
        authState: { email: data.email },
      });

      navigate("/encoder");
    } catch (err) {
      console.log("Error: ", err);

      if (err && err instanceof AxiosError) {
        setLoginError(err.response.data);
      } else if (err && err instanceof Error) setLoginError(err.message);
    }
  };

  return (
    <div className="container h-100 flex-center">
      {loginError && (
        <Alert variant="danger m-3 flex-center position-fixed top-0 px-5">
          {loginError}
        </Alert>
      )}

      <Form className="login-form p-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email", { required: "This field is required" })}
            type="email"
            placeholder="Enter email"
            isInvalid={!!errors.email}
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password length must be atleast 6 charachters",
              },
              pattern: {
                value: /\d+/,
                message: "Password must contain atleast 1 number",
              },
            })}
            type="password"
            placeholder="Password"
            isInvalid={!!errors.password}
          />

          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
