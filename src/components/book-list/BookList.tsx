import BookCard from "@/components/book-list/BookCard";
import useFetch from "@/hooks/useFetch";
import { Book } from "@/types";
import "./book-list.scss";

export default function BookList() {
  const { data } = useFetch<Book[]>(
    "https://my-json-server.typicode.com/cutamar/mock/books"
  );

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
