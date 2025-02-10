import { IoMdClose } from "react-icons/io";

interface Props {
  onCloseOverView: (id: number) => void;
  overview: string;
  image: string;
  id: number;
}

const MoviesOverview = ({ overview, image, onCloseOverView, id }: Props) => {
  return (
    <div className="fixed inset-0 flex flex-col lg:flex-row lg:items-center lg:justify-center bg-black bg-opacity-50 z-50 p-4 gap-4">
      <IoMdClose
        className="text-white text-2xl absolute top-4 right-4 z-60 cursor-pointer"
        onClick={() => onCloseOverView(id)}
      />
      )
      <img
        src={`https://image.tmdb.org/t/p/w500${image} `}
        alt=""
        className="w-52 h-auto mx-auto lg:w-64 lg:mx-0"
      />
      <p className="text-white">{overview}</p>
    </div>
  );
};

export default MoviesOverview;
