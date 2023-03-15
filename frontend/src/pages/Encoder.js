import { useState } from "react";
import EncoderForm from "../components/EncoderForm";

export default function Encoder() {
  const [encodedStrings, setEncodedStrings] = useState([]);

  console.log(encodedStrings);

  return (
    <div className="h-50 flex-column flex-center">
      <EncoderForm setEncodedStrings={setEncodedStrings} />
    </div>
  );
}
