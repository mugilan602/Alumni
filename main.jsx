import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/Pages/App";
import { BrowserRouter } from "react-router-dom";
import Footer from "./src/Pages/Footer/Footer";
import { AuthContextProvider } from "./src/context/AuthContext";
import { AdminAuthContextProvider } from "./src/context/AdminAuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminAuthContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </AdminAuthContextProvider>
  </React.StrictMode>
);
