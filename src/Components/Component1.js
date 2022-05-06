import Navbar from "./Navbar";
import img1 from "../images/img1.gif";
import img2 from "../images/img2.webp";

const Component1 = () => {
  return (
    <div className="bg-peach">
      <Navbar />
      <div className="flex px-40 py-8 items-center">
        <div className="flex-1 tracking-wider flex flex-col gap-y-4">
          <div className="text-2xl">Introducing SlayPay</div>
          <div className="text-6xl font-bold">India's coolest payment card</div>
          <div className="text-2xl w-1/3">
            Pay in style with a card designed by you
          </div>
          <div className="mt-2">
            <a
              href="/"
              className="flex w-fit items-center px-10 py-4 bg-purple rounded-full text-md text-white hover:bg-black"
            >
              Reserve Now
              <svg
                className="ml-2"
                data-bbox="13.05 2.55 33.878 54.8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                width="12px"
                height="12px"
              >
                <g>
                  <path
                    fill="#fff"
                    d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img src={img1} className="" alt="phone-screen"></img>
        </div>
      </div>
      <div className="flex justify-center items-center py-6">
        <div className="flex px-40 justify-center items-center">
          <div className="text-2xl tracking widest mr-12">FEATURED ON</div>
          <div className="">
            <img src={img2} alt="img" className="h-24"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
