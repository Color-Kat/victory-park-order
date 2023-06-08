import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { FavouritesPage } from "@pages/FavouritesPage/FavouritesPage";
import { Layout } from "@modules/Layout";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/favourites" element={<FavouritesPage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
