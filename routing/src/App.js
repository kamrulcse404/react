import Navigation from "./components/Navigation.component";
import Home from "./components/home.component";
import Product from "./components/products.component";
import Post from "./components/post.component";
import Admin from "./components/admin.component";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/products" Component={Product} />
        <Route path="/posts" Component={Post} />
        <Route path="/admin" Component={Admin} />
      </Routes>
    </>
  );
}

export default App;
