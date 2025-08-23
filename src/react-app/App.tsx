import { Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>

  );
}
