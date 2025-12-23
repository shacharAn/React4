import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "characters", element: <Characters /> },
        { path: "characters/:id", element: <CharacterDetails /> },
        { path: "*", element: <NotFound /> },
        ],
    },
]);
