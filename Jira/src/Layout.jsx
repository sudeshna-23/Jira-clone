import { Header } from "./components/common/header/Header"
import SidePanel from "./components/common/side-panel/SidePanel"
import {Outlet} from "react-router-dom"
import { Backlog } from "./pages/backlog/Backlog"
import "./Layout.css"

export const Layout = () => {
    return(
        <>
        <Header />
        <div className="page-with-sidebar">
        <SidePanel />
        <Backlog />
        </div>
        </>
    )
}