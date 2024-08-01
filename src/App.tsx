import BookList from "@/components/book/BookList";
import Layout from "@/components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<BookList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
