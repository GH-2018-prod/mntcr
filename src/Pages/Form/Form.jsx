import { FormContent } from "./FormContent"
import { Navigation, Footer, Alert } from "../"

export const Form = () => {
  return (
    <>
        <main>
        <header> <Navigation /></header>
        <Alert />
        <FormContent />
        <Footer />
        </main>
    </>
  )
}