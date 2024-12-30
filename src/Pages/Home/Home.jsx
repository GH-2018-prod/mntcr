import { Navigation, HomeCarousel, Footer } from "../"
import { HomeGrid } from "./HomeGrid"
import { Heading } from "@chakra-ui/react";

export const Home = () =>{
    return(
        <>
            <header>< Navigation /></header>
            <main>
                < HomeCarousel />
                <Heading color="#3574a5c7" textAlign="center" pt={16} fontSize={60}>
                    Nuestra Empresa
                </Heading>
                < HomeGrid />
            </main>
            <footer>< Footer /></footer>
        </>
    )
}