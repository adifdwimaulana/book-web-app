import BookDetail from "@/components/book-detail/BookDetail";
import BookList from "@/components/book-list/BookList";
import Layout from "@/components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
