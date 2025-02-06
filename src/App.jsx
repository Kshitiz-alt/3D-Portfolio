import Contacts from "./components/Contacts/Contacts"

import Hero from "./components/hero/Hero"
import Projects from "./components/Projects/Projects"


import Services from "./components/Services/Services"








function App() {

  return (
    <>
      <div className="h-auto bg-gradient-to-t from-zinc-900 to-black container bg-cover bg-fixed border-x-2 border-x-fuchsia-500">

        <section id="Home">
          <Hero />
         
     
        </section>

        <section id="Services">
          <Services />
         
          
         
        </section>
        <section id="Projects">
          <Projects/>

        </section>

        <section id="Contacts">
          <Contacts />
        </section>
        
      </div>
      







    </>
  )
}

export default App
