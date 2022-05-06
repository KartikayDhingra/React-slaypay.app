import Heading from "./Heading";
import img3 from "../images/img3.gif";
import img4 from "../images/img4.gif";
import img5 from "../images/img5.gif";
import img6 from "../images/img6.webp";
import img7 from "../images/img7.webp";
import img8 from "../images/img8.webp";

const Component3 = () => {
  return (
    <div className="bg-black px-36 py-10 text-white text-center">
      <Heading content="How it works?" color="text-white" />
      <div className="flex justify-between mt-20 gap-x-24">
        <div className="text-center w-1/4 flex flex-col flex-1 gap-y-6">
          <div className="flex justify-center items-center">
            <h3 className="text-2xl font-semibold">Design</h3>
            <img src={img3} className="h-10" alt="img"></img>
          </div>
          <div className="mx-auto w-3/4">
            <p className="">your card the way you want with the SlayPay app.</p>
            <p>Go Crazy!</p>
          </div>
          <img src={img6} className="w-3/4 mx-auto mt-auto" alt="img"></img>
        </div>
        <div className="text-center w-1/4 flex flex-col flex-1 gap-y-4">
          <div className="flex justify-center items-center">
            <h3 className="text-2xl font-semibold">Load</h3>
            <img src={img4} className="h-10" alt="img"></img>
          </div>
          <p className="mx-auto w-3/4">
            funds using cards, banks & UPI apps to securely spend with SlayPay.
          </p>
          <img src={img7} className="w-3/4 mx-auto mt-auto" alt="img"></img>
        </div>
        <div className="text-center w-1/3 flex flex-col flex-1 gap-y-4">
          <div className="flex justify-center items-center">
            <h3 className="text-2xl font-semibold">Slay</h3>
            <img src={img5} className="h-10" alt="img"></img>
          </div>
          <p className="mx-auto w-3/4">
            while you pay using your cool card & earn rewards on each spend!
          </p>
          <img src={img8} className="w-3/4 mx-auto mt-auto" alt="img"></img>
        </div>
      </div>
    </div>
  );
};

export default Component3;
