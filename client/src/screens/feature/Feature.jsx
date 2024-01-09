import Features from "../../components/features/Features";
import { data } from "../../data/data";

const Feature = () => {
  return (
    <div className='bg-base-300'>
      <h1 className='text-center'>
        <span className='text-5xl font-bold'>Why StudySyncer</span>
        <span className='text-green-500 text-7xl font-bold'>?</span>
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <div className='flex flex-col gap-7'>
        {data.map((obj) => (
          <Features
            key={obj.idx}
            desc={obj.desc}
            heading={obj.heading}
            idx={obj.idx}
            img={obj.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
