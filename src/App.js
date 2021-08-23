import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import { primary, secondary } from "./color-palette";
// import React from "react";
import { CenteredText, NavBar, TextWithImage } from "./components";

// Este es mi contenido dinamico, luego mediante una funcion de JS hago que corra de manera dinamica por el sitio

const myContent = [
  {
    title: "First Title",
    subTitle: "first subtitle",
    descriptions: ["1st description", "2nd description"],
    img: "https://i.blogs.es/3c0801/speedtest-2/450_1000.jpg",
  },
  {
    title: "Second Title",
    subTitle: "second subtitle",
    descriptions: ["1st description", "2nd description"],
    img: "https://i.blogs.es/3c0801/speedtest-2/450_1000.jpg",
  },
];

// Constante para el tema, donde le digo a material ui para crear un tema basado en una paleta de colores Primarios y Secundarios (acentuacion). Anteriormente se usaba createMuiTheme, pero esta función fue deprecada

const theme = createTheme({
  palette: {
    primary: primary,
    secundary: secondary,
  },
});

// Esta función es la que arroja todo el contenido en la pagina

function App() {
  return (
    // theme provider se en carga de colocar el tema establecido segun el valor que le des, que en este caso seria el tema que cree con "createTheme"
    <ThemeProvider theme={theme}>
      <NavBar />
      <CenteredText />
      {/* Aqui mediante una funcion de JSX hago que se pasen todos los items del arreglo que se encuentran en myContent, donde map() se encarga de establecer cada item y el indice. Y luego a un componente le establezco si el indice es par o impar dividiendolo entre 2 e igualandolo a 0. Finalmente establezco que la variable content represente a cada uno de los items en myContent */}
      {myContent.map((item, index) => (
        <TextWithImage TextToTheRight={index % 2 === 0} content={item} />
      ))}
    </ThemeProvider>
  );
}

export default App;
