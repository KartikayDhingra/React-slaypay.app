import img10 from "../images/img10.webp";

const Component5 = () => {
  return (
    <div className="text-white bg-red px-48 py-16">
      <div className="flex gap-x-28 items-center">
        <div className="flex flex-col gap-y-10">
          <h1 className="font-extrabold text-5xl tracking-wider">
            We are here to <span className="text-lightRed">rescue</span> you
            from
          </h1>
          <ul className="list-disc ml-2">
            <li className="mb-4">Dullness of boring cards</li>
            <li className="mb-4">Overspendings on your credit cards</li>
            <li>Exposing your debit cards and bank accounts for payments</li>
          </ul>
          <div className="">
            <a
              href="/"
              className="px-12 py-5 bg-black tracking-wide rounded-full text-md text-white transition duration-150 delay-75 ease-out hover:bg-white hover:text-black hover:ease-in"
            >
              Get Secured
            </a>
          </div>
        </div>
        <div className="ml-auto">
        <img src={img10} className="" alt="card"></img>
      </div>
      </div>
    </div>
  );
};

export default Component5;
