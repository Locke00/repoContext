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
  //const useContextApp = useContext(contextApp);
  const { prods } = useContext(contextApp); //hago un destructuring para recuperar la variable
  //console.log(prods);
  return prods.map((prod) => <Item key={prod.id} prod={prod} />);
}

function ItemListContainer() {
  return <ItemList />;
}

export default function App() {
  const [prods, setProds] = useState(productos); //creo la var q voy a inyectar
  //console.log(contextApp);

  return (
    <contextApp.Provider value={{ prods }}>
      {" "}
      {/*envuelvo el rango donde puedo usar las vars*/}
      <ItemListContainer productos={productos} />
    </contextApp.Provider>
  );
}
