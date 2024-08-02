import BookCard from "@/components/book-list/BookCard";
import useFetch from "@/hooks/useFetch";
import { Book } from "@/types";
import "./book-list.scss";
import Loader from "@/components/Loader";

export default function BookList() {
  const { data, loading } = useFetch<Book[]>(
    "https://my-json-server.typicode.com/cutamar/mock/books"
  );

  if (loading) return <Loader />;

  return (
    <div className="book-container">
      <div className="container">
        <h4 className="text-uppercase">list book</h4>
        <div className="book-content grid">
          {data?.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
