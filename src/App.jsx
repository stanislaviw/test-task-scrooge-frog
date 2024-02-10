import "./App.css";
import { Layout } from "./components/layout";
import { List } from "./components/list";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <List />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
