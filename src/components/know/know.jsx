import { Knowmap } from "./knowmap";

export const Know = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col bg-black gap-4">
      <h3 className="lg:text-9xl text-7xl text-white text-center lg:pb-10 pb-5 bebas">
        Conocimientos
      </h3>
      <Knowmap />
    </div>
  );
};
