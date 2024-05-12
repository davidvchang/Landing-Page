import Footer from "./components/Footer"
import MiddleInfo from "./components/MiddleInfo"
import NavBar from "./components/NavBar"
import Principal from "./components/Principal"
import SectioAfterPrincipal from "./components/SectioAfterPrincipal"
import Services from "./components/Services"

function App() {

  return (
    <main className="bg-BG-Blue-Marine font-Gothic-A1">
      <NavBar/>
      <Principal/>
      <SectioAfterPrincipal/>
      <MiddleInfo/>
      <Services/>
      <Footer/>
    </main>
  )
}

export default App
