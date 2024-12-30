import { Route, Routes } from "react-router-dom"
import { Home, Teachers, Testimonios, Faqs, Form } from "../Pages"

export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path="/teachers" element={<Teachers />}/>
            <Route path="/testimonios" element={<Testimonios />}/>
            <Route path="/faqs" element={<Faqs />}/>
            <Route path="/login" element={<Form />}/>
        </Routes>
    )
}