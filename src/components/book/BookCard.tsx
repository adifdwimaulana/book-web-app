import { Book } from "@/types";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={book.cover} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <div className="book-item-info-item title fw-7 fs-18">
          <span>{book.title}</span>
        </div>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{book.author}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">Publication Date: </span>
          <span>{book.publicationDate.toString()}</span>
        </div>
      </div>
    </div>
  );
}
