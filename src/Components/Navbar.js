const Navbar = () => {
  return (
    <nav className="h-20 flex px-28 py-2 items-center">
      <div className="flex-1 text-2xl">LOGO</div>
      <ul className="flex justify-between items-center bg-red-200 w-2/3 text-base">
        <li>
          <a href="/" className="hover:text-yellow">Features</a>
        </li>
        <li>
          <a href="/" className="hover:text-yellow">Offers & Rewards</a>
        </li>
        <li>
          <a href="/" className="hover:text-yellow">Security</a>
        </li>
        <li>
          <a href="/" className="hover:text-yellow">About</a>
        </li>
        <li>
          <a href="/" className="hover:text-yellow">FAQ</a>
        </li>
        <li>
          <a href="/" className="flex items-center px-4 py-2.5 bg-purple rounded-3xl text-sm text-white hover:bg-black">
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
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
