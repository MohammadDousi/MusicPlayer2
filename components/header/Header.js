const Header = () => {
  return (
    <div className="w-full py-2 flex flex-row justify-between items-center gap-5">
      {/* profile */}
      <div className="w-4/12 flex flex-row justify-center items-center gap-6 overflow-hidden">
        <div className="w-full h-9 flex flex-row justify-start items-center gap-3 bg-gray-600/50 rounded-lg overflow-hidden">
          <img
            src="/u4.png"
            alt="/profile2.png"
            className="h-full shadow-xl rounded-lg object-cover"
          />

          <div className="w-full flex flex-row justify-between items-center pr-4">
            <p className="bg-transparent text-sm text-gray-400 font-normal">
              Danil Moyu
            </p>

            <i className="fa fa-angle-down text-sm text-gray-400"></i>
          </div>
        </div>
        <i className="fa fa-bell text-gray-400"></i>
      </div>

      {/* search box */}
      <div className="w-full py-2 px-3 flex flex-row justify-center items-center gap-3 bg-gray-600/50 rounded-lg">
        <i className="fa fa-search text-sm text-gray-400"></i>
        <input
          type="text"
          className="bg-transparent text-sm text-gray-400"
          placeholder="Search Music or Singer"
        />
      </div>
    </div>
  );
};

export default Header;
