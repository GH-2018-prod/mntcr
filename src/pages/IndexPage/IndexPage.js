
import StudentsFooter from '../StudentsFooter/StudentsFooter'
import StudentsHeader from '../StudentsHeader/StudentsHeader'
import CarouselHome from '../carousel/carousel'

const IndexPage = () => {
    return (
       <div>
            <header>
                <StudentsHeader />
            </header>
            <main>
                <CarouselHome />
            </main>
            <footer>
                <StudentsFooter />
            </footer>
        </div>
    )
}

export default IndexPage