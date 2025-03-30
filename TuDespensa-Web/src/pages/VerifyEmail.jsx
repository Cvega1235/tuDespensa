import { useState } from "react";
import { verifyEmailRequest } from "../api/auth";

export const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await verifyEmailRequest(code);
      setSuccess(res.data.message);
      setError("");
      window.location.href = "/inicio";
    } catch (err) {
      setError(err.response.data.message);
      setSuccess("");
    }
  };

  return (
    <div>
      <h2>Verifica tu correo</h2>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Código de verificación"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Verificar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};
