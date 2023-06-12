import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { Layout } from "@modules/Layout";
import {AboutPage} from "@pages/AboutPage/AboutPage.tsx";
import {InfrastructurePage} from "@pages/InfrastructurePage/InfrastructurePage.tsx";
import {RentOfficePage} from "@pages/RentOfficePage/RentOfficePage.tsx";
import {SellOfficePage} from "@pages/SellOfficePage/SellOfficePage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/rent/:officeId" element={<RentOfficePage/>}/>
                    <Route path="/sell/:officeId" element={<SellOfficePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/infrastructure" element={<InfrastructurePage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
