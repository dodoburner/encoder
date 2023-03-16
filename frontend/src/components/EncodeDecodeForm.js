import axios, { AxiosError } from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useAuthHeader } from "react-auth-kit";
import Result from "../Result";

export default function EncodeDecodeForm({
  setEncodedStrings,
  setDecodedStrings,
  isOnEncoderPage,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [reqError, setReqError] = useState("");
  const authHeader = useAuthHeader();
  let pageText;
  let invalidInputMsg;
  let pattern;

  if (isOnEncoderPage) {
    pageText =
      "Encode a string! A string must contain only alphabetic characters!";
    invalidInputMsg = "Please enter only alphabetic characters";
    pattern = /^[A-Za-z]+$/;
  } else {
    pageText = "Decode a string! A string must be a valid encoded string!";

    invalidInputMsg = "Please enter a valid encoded string!";
    pattern = /^([A-Za-z]\d){1,}$/;
  }

  const onSubmit = async (data) => {
    const auth = authHeader().replace("string ", "");
    const { inputString } = data;

    try {
      let response;
      let result;
      
      if (isOnEncoderPage) {
        response = await axios.post("/coder/encode", data, {
          headers: {
            Authorization: auth,
          },
        });

        result = new Result(inputString, response.data);
        setEncodedStrings((prev) => [...prev, result]);
      } else {
        response = await axios.post("/coder/decode", data, {
          headers: {
            Authorization: auth,
          },
        });

        result = new Result(inputString, response.data);
        setDecodedStrings((prev) => [...prev, result]);
      }

      reset();
    } catch (err) {
      console.log("Error: ", err);

      if (err && err instanceof AxiosError) {
        setReqError(err.response.data);
      } else if (err && err instanceof Error) setReqError(err.message);
    }
  };

  return (
    <div>
      {reqError && (
        <Alert variant="danger m-3 flex-center position-fixed top-0 mt-5 px-5">
          {reqError}
        </Alert>
      )}

      <Form
        className="d-flex flex-column align-items-center mt-4 w-75 ms-auto me-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="fs-5">{pageText}</p>

        <Form.Control
          type="text"
          name="inputString"
          placeholder="Enter string"
          {...register("inputString", {
            required: "Please enter a string!",
            pattern: {
              value: pattern,
              message: invalidInputMsg,
            },
          })}
          isInvalid={errors.inputString?.message}
        />

        <Form.Control.Feedback type="invalid" className="text-center fs-6">
          {errors.inputString?.message}
        </Form.Control.Feedback>

        <Button type="submit" className="mt-3">
          {isOnEncoderPage ? "ENCODE!" : "DECODE!"}
        </Button>
      </Form>
    </div>
  );
}
