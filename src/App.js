import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom'
import Book from "containers/pages/Book/Book";
import BookPost from "containers/pages/Book/BookPost";
import BookCategory from "containers/pages/Book/category/BookCategory";
import Search from "containers/pages/search";
import AddBook from "containers/pages/Book/AddBook";
import SignInForm from "containers/pages/User/SignInForm";
import RegisterForm from "containers/pages/User/RegisterForm";
import BookListCategories from "containers/pages/Book/category/BookListCategories";
import Contact from "containers/pages/Contact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>}/>

          {/* Home Display */}
          <Route path="/" element={<Home/>}/>

          <Route path="/book" element={<Book/>}/>
          <Route path="/book/post/:slug" element={<BookPost/>}/>
          <Route path="/book/categories/:category_id" element={<BookCategory/>}/>
          <Route path="/book/categories" element={<BookListCategories/>}/>

          <Route path="/search/:term" element={<Search/>}/>

          <Route path="/addbook" element={<AddBook/>}/>

          <Route path="/signin" element={<SignInForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          {/*<Route path="/user/:user_id" element={<AddBook/>}/>*/}

          <Route path="/contact" element={<Contact/>}/>
          {/*<Route path="/about" element={<AddBook/>}/>*/}

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
