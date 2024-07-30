import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { lazy,Suspense  } from "react";
import Spinner from "./components/spinner/Spinner"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"
import "./_media.scss"


const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Suspense fallback={<Spinner/>}>
          <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about-us" element={<AboutUsPage/>} />
                <Route path="/blog" element={<BlogPage/>} />
                <Route path="/gallery" element={<GalleryPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </Suspense>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
