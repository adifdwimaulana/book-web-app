import loader from "@/assets/svg/loader.svg";

export default function Loader() {
  return (
    <div className="loader flex flex-c">
      <img src={loader} alt="loader" />
    </div>
  );
}
