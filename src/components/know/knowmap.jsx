import { knows } from "../data/knows";

export const Knowmap = () => {
  return (
    <div className="h-full w-full px-14 gap-10 grid lg:grid-cols-3 grid-cols-1 justify-center items-center pb-10">
      {knows.map((know) => (
        <div key={know.id} className="flex items-center justify-center">
          <img src={know.image} alt="" width={60} />
          <div className={`h-1 w-full ${know.color} mx-3`} />
          <span className="text-white bebas">{know.name}</span>
        </div>
      ))}
    </div>
  );
};
