import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom'
import { createContext, useState } from "react";
import { Helmet } from "react-helmet";
import Book from "containers/pages/Book/Book";
import BookPost from "containers/pages/Book/BookPost";
import BookCategory from "containers/pages/Book/category/BookCategory";
import Search from "containers/pages/search";
import AddBook from "containers/pages/Book/AddBook";
import SignInForm from "containers/pages/User/SignInForm";
import RegisterForm from "containers/pages/User/RegisterForm";
import BookListCategories from "containers/pages/Book/category/BookListCategories";
import Contact from "containers/pages/Contact";
import About from "containers/pages/About";
import Users from "containers/pages/User/Users";
import Lends from "containers/pages/Lend/Lends";

export const AuthContext = createContext();

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [superUser, setSuperUser] = useState(false);

  return (
    <Provider store={store}>
      <Router>
      <Helmet>
          <title>Bookapi</title>
          <link rel="icon" href="https://www.uco.es/aulasoftwarelibre/wp-content/uploads/2018/09/logo-cuadrado-transparente-invertido-1.png" />
        </Helmet>
        <AuthContext.Provider value={{ isLogged, setIsLogged, username, setUsername, superUser, setSuperUser }}>
          <Routes>
            {/* Error Display */}
            <Route path="*" element={<Error404/>}/>

            {/* Home Display */}
            <Route path="/" element={<Home/>}/>

            <Route path="/book" element={<Book/>}/>
            <Route path="/book/post/:slug" element={<BookPost/>}/>
            <Route path="/book/categories/:category_id" element={<BookCategory/>}/>
            <Route path="/book/categories" element={<BookListCategories/>}/>
            {/* superUser ?
            <Route path="/book/post/:slug/modify" element={<ModifyBookPost/>}/>
            : null */}

            <Route path="/search/:term" element={<Search/>}/>

            { superUser ?
            <Route path="/addbook" element={<AddBook/>}/>
            : null}

            { isLogged ?
            <Route path="/lends" element={<Lends/>}/>
            : null}

            <Route path="/signin" element={<SignInForm/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            { superUser ?
            <Route path="/users" element={<Users/>}/>
            : null}
            {/*<Route path="/user/:user_id" element={<User/>}/>*/}
            {/*<Route path="/dashboard/:user_id" element={<Dashboard/>}/>*/}

            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>

          </Routes>
        </AuthContext.Provider>
      </Router>
    </Provider>
  );
}

export default App;
