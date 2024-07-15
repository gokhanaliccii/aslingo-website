const Header = () => {
  return (
    <div>
      <header className="text-gray-600  bg-bgColor">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">ASLingo</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {/* <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
          <button className="inline-flex text-white items-center bg-cora border-0 py-1 px-3 focus:outline-none hover:bg-cora2 rounded text-base mt-4 md:mt-0">
            Get the App
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
