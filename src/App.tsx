import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Template from "./templates_pages/Template";
import HomePage from "./pages/HomePage";
import RequireAuth from "./hoc/RequireAuth";
import ModalManager from "./components/modal/ModalManager";
import { HelmetProvider } from "react-helmet-async";
import Seo from "./hoc/seo/Seo";

const App: FC = () => {
  const title = import.meta.env.VITE_APP_TITLE;
  const description = import.meta.env.VITE_APP_DESCRIPTION;
  const url = import.meta.env.VITE_APP_URL;

  return (
    <HelmetProvider>
      {import.meta.env.PROD && (
        <Seo title={title} description={description} url={url} />
      )}
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<HomePage />} />
          <Route
            path="/private"
            element={<RequireAuth>{/* <Private /> */ <h1>лк</h1>}</RequireAuth>}
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ModalManager />
    </HelmetProvider>
  );
};

export default App;
