import cover from "../assets/images/coverimage.png";

const Herosection = () => {
  return (
    <div className="mt-2 mb-10 bg-emerald-300 relative">
      <img src={cover} alt="" className="w-full h-96 opacity-30 " />
      <p className="text-5xl font-bold absolute inset-0 mt-30 ml-10 bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent">
        The best movies ever
      </p>
    </div>
  );
};
export default Herosection;
