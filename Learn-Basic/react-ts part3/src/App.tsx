import {Routes, Route} from "react-router"
import NavbarCostum from "./pages/NavbarCostum";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

// import NotFoundPage from "./pages/NotFoundPage";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import HeaderCustom from "./Components/HeaderCustom";
// import TermsPage from "./pages/TermsPage";



// Component
// function App() {
//   return (
//     <>
//     <HeaderCustom/> 
//     {/* jika ada HeaderCustom, ini akan tampil di semua router URL nya */}
//     <Routes>
//       <Route path="/" element={<HomePage/>}/>
//       <Route path="/terms" element={<TermsPage/>} />
//       <Route path="/product-list" element={<ProductListPage/>} />

//       {/* Dynamic Route */}
//       <Route path="product/:productSlug" element={<ProductDetailPage/>} />

//       <Route path="*" element={<NotFoundPage/>} />  {/* catch all*/}
//     </Routes>
//     </>
//   );
// }
// semua yang di comment ini bagian dari pembelajaran video

function App() {
    return (
        <>
        <NavbarCostum/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/product" element={<ProductListPage/>} />
            <Route path="/product-detail" element={<ProductDetailPage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="contact" element={<ContactPage/>} />
        </Routes>
        </>
    );
}
export default App
