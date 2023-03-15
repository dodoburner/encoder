import { useState } from "react";
import EncoderForm from "../components/EncoderForm";
import StringsList from "../components/StringsList";

export default function Encoder() {
  const [encodedStrings, setEncodedStrings] = useState([]);

  return (
    <div className="h-100 flex-column flex-center">
      <EncoderForm setEncodedStrings={setEncodedStrings} />
      <StringsList strings={encodedStrings} />
    </div>
  );
}
