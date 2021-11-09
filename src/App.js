import { createContext, useState, useContext } from "react";
import { productos } from "./productos";
import "./styles.css";

const contextApp = createContext({ nombre: "Fede" });

function Item({ prod }) {
  return (
    <>
      <h1>{prod.nombre}</h1>
    </>
  );
}

function ItemList() {
  const { prods } = useContext(contextApp);

  console.log(prods);
  return prods.map((prod) => <Item key={prod.id} prod={prod} />);
}

function ItemListContainer() {
  return <ItemList />;
}

export default function App() {
  const [prods, setProds] = useState(productos);

  console.log(contextApp);

  return (
    <contextApp.Provider value={{ prods }}>
      <ItemListContainer />;
    </contextApp.Provider>
  );
}
