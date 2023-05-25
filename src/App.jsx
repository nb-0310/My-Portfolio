import Sidebar from './Components/Navigation/Sidebar'
import Navbar from './Components/Navigation/Navbar'
import Hero from './Components/Hero/Hero'
import styles from './app.module.scss'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className={styles.home}>
        <Sidebar />
        <main>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
  )
}

export default App
