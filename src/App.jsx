import { BrowserRouter,Routes,Route } from "react-router";
import About from "./Components/About"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
   <BrowserRouter >
<Routes>
<Route element = {<Navbar />}>
<Route path="/"element={<Hero />}/>
  <Route path="/about"element ={<About />}/>
  <Route path="/contact"element ={<Footer />}/>
  <Route path="/contacts"element ={<Contact />}/>
</Route>
</Routes>
   </BrowserRouter>
    </div>
  )
}

export default App

