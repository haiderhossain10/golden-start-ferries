import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "@/components/header/Header";
import HeaderTopBar from "@/components/bar/HeaderTopBar";

export default function Router() {
    return (
        <>
            <HeaderTopBar />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}
