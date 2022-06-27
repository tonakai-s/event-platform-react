import { Routes, Route } from "react-router-dom";
import { Event } from "./pages/Event";
import { Page404 } from "./pages/Page404";
import { Subscribe } from "./pages/Subscribe";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Subscribe />}/>
            <Route path="/event" element={<Event />}/>
            <Route path="/event/lesson/:slug" element={<Event />}/>
            <Route
                path="*"
                element={<Page404 />}
            />
        </Routes>
    )
}