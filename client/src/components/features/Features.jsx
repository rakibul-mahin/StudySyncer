const Features = ({ heading, desc, img, idx }) => {
  const isEven = idx % 2 === 0;
  return (
    <div className='flex justify-center items-center gap-20'>
      <div className={`basis-1/4 ${isEven ? "order-1" : ""}`}>
        <p className='text-xl'>
          {heading ? (
            <h1 className='text-2xl font-bold text-green-500'>{heading}</h1>
          ) : (
            ""
          )}
          {desc}
        </p>
      </div>
      <div className={`order-${isEven ? "2" : "1"}`}>
        <img src={`${img}`} className='w-96' />
      </div>
    </div>
  );
};

export default Features;
