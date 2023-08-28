import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom'
import Book from "containers/pages/Book/Book";
import BookPost from "containers/pages/Book/BookPost";
import BookCategory from "containers/pages/Book/category/BookCategory";
import Search from "containers/pages/search";

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

          <Route path="/search/:term" element={<Search/>}/>

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
