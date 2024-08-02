import useFetch from "@/hooks/useFetch";
import { Book } from "@/types";
import { useNavigate, useParams } from "react-router-dom";
import arrowLeft from "@/assets/svg/arrow-left-solid.svg";
import "./book-detail.scss";
import { format } from "@/utils";
import Loader from "@/components/Loader";

export default function BookDetail() {
  const { id } = useParams();
  const { data, loading } = useFetch<Book>(
    `https://my-json-server.typicode.com/cutamar/mock/books/${id}`
  );
  const navigate = useNavigate();

  if (loading) return <Loader />;

  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex back-btn"
          onClick={() => navigate("/")}
        >
          <img src={arrowLeft} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={data?.cover} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{data?.title}</span>
            </div>
            <div className="book-details-item description">
              <span>{data?.description}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Author: </span>
              <span className="text-italic">{data?.author}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Publication Date: </span>
              <span className="text-italic">
                {format(data?.publicationDate || "")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
