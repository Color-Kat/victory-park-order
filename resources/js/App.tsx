import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { Layout } from "@modules/Layout";
import {AboutPage} from "@pages/AboutPage/AboutPage.tsx";
import {InfrastructurePage} from "@pages/InfrastructurePage/InfrastructurePage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/infrastructure" element={<InfrastructurePage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
