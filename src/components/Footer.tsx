import moment from "moment";

const Footer = () => {
  const date = () => {
    return moment().year();
  };
  return (
    <div className=" bg-blue-950 text-white">
      <div className="flex flex-col md:flex-row md:space-x-3  font-bold ">
        <div className="pb-2 ml-2">
          <p className="text-2xl">THE BASICS</p>
          <p>About Movies</p>
          <p>Support Forums</p>
          <p>System status</p>
        </div>
        <div className="pb-2 ml-2">
          <p className="text-2xl">LEGAL</p>
          <p>Terms of use</p>
          <p>privacey policies</p>
        </div>
      </div>
      <p>&copy; {date()} movie copmany</p>
    </div>
  );
};

export default Footer;
