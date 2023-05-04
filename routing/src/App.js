import Navigation from "./components/Navigation.component";
import Home from "./components/home.component";
import Product from "./components/products.component";
import Post from "./components/post.component";
import Admin from "./components/admin.component";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/notFound.component";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/products/:year?/:month?" element={ <Product selected = { true }/> } />
        <Route path="/posts" element={ <Post/> } />
        <Route path="/admin" element={ <Admin/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </>
  );
}

export default App;
