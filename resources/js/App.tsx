import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { Layout } from "@modules/Layout";
import {AboutPage} from "@pages/AboutPage/AboutPage.tsx";
import {InfrastructurePage} from "@pages/InfrastructurePage/InfrastructurePage.tsx";
import {RentOfficePage} from "@pages/RentOfficePage/RentOfficePage.tsx";
import {SellOfficePage} from "@pages/SellOfficePage/SellOfficePage.tsx";
import {Page404} from "@pages/Other/Page404.tsx";
import {TermsOfService} from "@pages/Other/TermsOfService.tsx";
import {PersonalData} from "@pages/Other/PersonalData.tsx";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/rent/:officeCrmId" element={<RentOfficePage/>}/>
                    <Route path="/sell/:officeCrmId" element={<SellOfficePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/infrastructure" element={<InfrastructurePage/>}/>

                    <Route path="/terms-of-service" element={<TermsOfService />}/>
                    <Route path="/personal-data" element={<PersonalData />}/>

                    <Route path='*' element={<Page404 />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
