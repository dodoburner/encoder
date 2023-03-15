import axios, { AxiosError } from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useAuthHeader } from "react-auth-kit";

class Result {
  constructor(input, output) {
    this.input = input;
    this.output = output;
  }
}

export default function EncoderForm({ setEncodedStrings }) {
  const authHeader = useAuthHeader();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [reqError, setReqError] = useState("");

  const onSubmit = async (data) => {
    const auth = authHeader().replace("string ", "");
    const { inputString } = data;

    try {
      const response = await axios.post("/coder/encode", data, {
        headers: {
          Authorization: auth,
        },
      });

      const result = new Result(inputString, response.data);

      setEncodedStrings((prev) => [...prev, result]);
    } catch (err) {
      console.log("Error: ", err);

      if (err && err instanceof AxiosError) {
        setReqError(err.response.data);
      } else if (err && err instanceof Error) setReqError(err.message);
    }
  };

  return (
    <div className="">
      {reqError && (
        <Alert variant="danger m-3 flex-center position-fixed top-0 mt-5 px-5">
          {reqError}
        </Alert>
      )}

      <Form
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p>
          Encode a string! A string must contain only alphabetic characters!
        </p>

        <Form.Control
          type="text"
          name="inputString"
          placeholder="Enter string"
          {...register("inputString", {
            required: "Please enter a string!",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Please enter only alphabetic charachters",
            },
          })}
          isInvalid={errors.inputString?.message}
        />

        <Form.Control.Feedback type="invalid" className="text-center fs-6">
          {errors.inputString?.message}
        </Form.Control.Feedback>

        <Button type="submit" className="mt-3">
          ENCODE!
        </Button>
      </Form>
    </div>
  );
}
