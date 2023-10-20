const Artists = (props) => {
  const { data } = props;

  return (
    data &&
    data.map((items) => (
      <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
        <img
          src={items.pic}
          alt={items.pic}
          className="w-[88px] h-28 object-cover rounded-full shadow-xl"
        />
        <h2 className="text-white/40 text-xs font-normal capitalize ">{items.singer}</h2>
      </div>
    ))
  );
};

export default Artists;
