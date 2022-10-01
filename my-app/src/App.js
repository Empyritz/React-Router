import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"
import SingleProduct from "./pages/SingleProduct"

function App() {
  return (
    <BrowserRouter>
      {/* <nav>our navbar</nav> */}
        <Routes>
          <Route path="/" element={<SharedLayout />} > 
            <Route index element={<Home />}  />
            <Route path="about" element={<About />}  />
            <Route path="products" element={<Products />}  />
            <Route path="products/:productId" element={<SingleProduct />}  />
            <Route path="*" element={<Error />}  />
          </Route>
        </Routes>
      {/* <footer>our footer</footer> */}
    </BrowserRouter>
  );
}

//Index routes render in the parent routes outlet at the parent route's path
//Index routes match when a parent route matches but none of the items in a navigation list yet
//Index routes are the default child route for a parent route
//Index routes render when the user hasn't clicked one of the items in a navigation list yet 



export default App;
