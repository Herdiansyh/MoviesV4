import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyListProvider } from "./context/MyListProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./store/Index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyListProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MyListProvider>
  </StrictMode>
);
