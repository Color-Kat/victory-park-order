import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { Layout } from "@modules/Layout";
import {AboutPage} from "@pages/AboutPage/AboutPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
