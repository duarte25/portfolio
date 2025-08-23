import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 1. Importar o BrowserRouter
import "@/react-app/index.css";
import App from "@/react-app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 2. Envolver o App com o BrowserRouter e passar a base URL */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);