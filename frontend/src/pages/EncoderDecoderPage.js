import { useState } from "react";
import { useLocation } from "react-router-dom";
import EncodeDecodeForm from "../components/EncodeDecodeForm";
import StringsList from "../components/StringsList";

export default function EncoderDecoderPage() {
  const [encodedStrings, setEncodedStrings] = useState([]);
  const [decodedStrings, setDecodedStrings] = useState([]);
  const location = useLocation();
  const isOnEncoderPage = location.pathname === "/encoder";

  return (
    <div className="h-100 pt-5">
      <EncodeDecodeForm
        isOnEncoderPage={isOnEncoderPage}
        setEncodedStrings={setEncodedStrings}
        setDecodedStrings={setDecodedStrings}
      />
      <StringsList
        strings={isOnEncoderPage ? encodedStrings : decodedStrings}
      />
    </div>
  );
}
