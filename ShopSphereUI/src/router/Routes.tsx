import { createBrowserRouter } from "react-router";
import App from "../components/App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductDetailsPage from "../pages/catalog/ProductDetails";
import ErrorPage from "../pages/catalog/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import ShoppingCartPage from "../pages/cart/ShoppingCartPage";
import LoginPage from "../pages/account/loginPage";
import RegisterPage from "../pages/account/registerPage";

export const router= createBrowserRouter([
    {
        path: "/",
        element : <App />,
        children: [
            { path:"", element: <HomePage />},
            { path:"about", element: <AboutPage />},
            { path:"contact", element: <ContactPage />},
            { path:"catalog", element: <CatalogPage />}, 
            { path:"card", element: <ShoppingCartPage/>},
            { path:"catalog/:id", element: <ProductDetailsPage />},
            { path:"login", element: <LoginPage />},
            { path:"register", element: <RegisterPage />},
            { path:"error", element: <ErrorPage />},
            { path:"server-error", element: <ServerError />},
            { path:"not-found", element: <NotFound />},
            { path:"*", element: <NotFound/>},

        ]
    }
])  