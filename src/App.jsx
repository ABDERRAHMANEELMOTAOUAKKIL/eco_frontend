
// import About from './components/About';
import Home from './components/Home';
// import Projects from './components/Projects';
import CategoryProducts from './components/categories/CategoryDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Menu';
import ProductDetail from './components/products/ProductDetail';
import CategoriesPage from './components/categories/CategoryListPage';
import LoginForm from './components/auth/Login';
// import RegisterForm from './components/auth/Register';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='dark:bg-black '>
    <Navbar />
    <Header />

    {/* <Router> */}
    {/* <BrowserRouter> */}
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<CategoriesPage />} />
    <Route path="/category/:category_id" element={<CategoryProducts />} />
    <Route path="/eco/products/:id" element={<ProductDetail />} />
    <Route path="/login" element={<LoginForm />} /> {/* Add login route */}
    {/* <Route path="/register" element={<RegisterForm />} /> Add login route */}


    </Routes>
    {/* </BrowserRouter> */}

    {/* </Router> */}
    <Footer/>
    </div>
  );
}

export default App;
