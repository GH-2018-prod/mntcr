import { Navigation, HomeCarousel, Footer } from "../"
import { HomeGrid } from "./HomeGrid"

export const Home = () =>{
    return(
        <>
            <header>< Navigation /></header>
            <main>
                < HomeCarousel />
                < HomeGrid />
            </main>
            <footer>< Footer /></footer>
        </>
    )
}