import Contact from "./components/HomePage/Contact"
import EducationPath from "./components/HomePage/EducationPath"
import Footer from "./components/HomePage/Footer"
import Header from "./components/HomePage/Header"
import Hero from "./components/HomePage/Hero"
import Project from "./components/HomePage/Project"
import Skills from "./components/HomePage/Skills"
import BackToTop from "./components/ui/BackToTop"

function App() {
  const list = [
    <Header />,
    <Hero />,
    <Skills />,
    <Project />,
    <EducationPath />,
    <Contact />,
    <Footer />,
    <BackToTop />
  ]

  return (
    <>
      {list.map((item, index) => 
        <div 
          key={index} 
          className={`transition-all duration-500 ${index % 2 === 0  ? "bg-bgSecondary dark:bg-bgDarkSecondary"  : "bg-bgPrimary dark:bg-bgDarkPrimary"}`}
        >
          {item}
        </div>
      )}

      <script src="./utils/script.js"></script>
    </>
  )
}

export default App
