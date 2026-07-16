import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Project from "./pages/Projects";
import NotFound from "./components/layout/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
