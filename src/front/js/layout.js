import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import PokeducatorPokemonInfo from "./pages/pokeducatorPokemonInfo.jsx";
import PokeducatorWikiGuarderia from "./pages/pokeducatorWiki/pokeducatorWikiGuarderia.jsx";
import PokeducatorWikiLanding from "./pages/pokeducatorWiki/pokeducatorWikiLanding.jsx";
import PokeducatorObjetos from "./pages/pokeducatorObjetos.jsx";
import PokeducatorWikiCrianza from "./pages/pokeducatorWiki/pokeducatorWikiCrianza.jsx";
import PokeducatorMovimientos from "./pages/pokeducatorMovimientos.jsx";
import PokeducatorWikiGruposHuevo from "./pages/pokeducatorWiki/pokeducatorWikiGruposHuevo.jsx";
import PokeducatorWikiGenero from "./pages/pokeducatorWiki/pokeducatorWikiGenero.jsx";
import PokeducatorWikiSeries from "./pages/pokeducatorWiki/pokeducatorWikiSeries.jsx";
import PokeducatorWikiJuegos from "./pages/pokeducatorWiki/pokeducatorWikiJuegos.jsx";
import PokeducatorWikiNaturaleza from "./pages/pokeducatorWiki/pokeducatorWikiNaturaleza.jsx";
import PokeducatorObjetoInfo from "./pages/pokeducatorObjetoInfo.jsx"
import PokeducatorMovimientoInfo from "./pages/pokeducatorMovimientoInfo.jsx"
import PokeducatorPokemons from "./pages/pokeducatorPokemons.jsx";
import PokeducatorLandingPage from "./pages/pokeducatorLandingPage.jsx";
import PokeducatorProfilePage from "./pages/pokeducatorProfilePage.jsx";
import injectContext from "./store/appContext.jsx";
import ScrollToTop from "./component/scrollToTop.jsx";
import PokeducatorHabilidad from "./pages/pokeducatorHabilidades.jsx";
import PokeducatorHabilidadInfo from "./pages/pokeducatorHabilidadInfo.jsx";
import PokeducatorInfo from "./pages/pokeducatorInfo.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<PokeducatorPokemonInfo />} path={"/pokemon/:theid"} />
            <Route element={<PokeducatorObjetoInfo />} path={"/objeto/:theid"} />
            <Route element={<PokeducatorMovimientoInfo />} path={"/movimiento/:theid"} />
            <Route element={<PokeducatorHabilidadInfo />} path={"/habilidad/:theid"} />
            <Route element={<PokeducatorHabilidad />} path={"/habilidades"} />
            <Route
              element={<PokeducatorWikiGuarderia />}
              path="/wiki/guarderia-pokemon"
            />
            <Route
              element={<PokeducatorInfo />}
              path="/info"
            />
            <Route
              element={<PokeducatorWikiLanding />}
              path="/wiki"
            />
            <Route
              element={<PokeducatorWikiSeries />}
              path="/wiki/series-pokemon"
            />
            <Route
              element={<PokeducatorWikiJuegos />}
              path="/wiki/juegos-pokemon"
            />
            <Route
              element={<PokeducatorWikiCrianza />}
              path="/wiki/crianza-pokemon"
            />
            <Route
              element={<PokeducatorWikiGenero />}
              path="/wiki/genero-pokemon"
            />
            <Route
              element={<PokeducatorWikiGruposHuevo />}
              path="/wiki/grupos-huevo"
            />
            <Route
              element={<PokeducatorWikiNaturaleza />}
              path="/wiki/naturaleza-pokemon"
            />
            <Route element={<PokeducatorPokemons />} path="/pokemons" />
            <Route element={<PokeducatorObjetos />} path="/objetos" />
            <Route element={<PokeducatorMovimientos />} path="/movimientos" />
            <Route element={<PokeducatorLandingPage />} path="/" />
            <Route element={<PokeducatorProfilePage />} path="/perfil" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
