import { ProjectsSlider } from "./ProjectsSlider";

export const Projects = () => {
  return (
    <div className="h-full bg-black items-center justify-center flex w-full">
      <div className="w-[95%] h-full py-32 items-center justify-center gap-5">
        <h2 className="lg:text-9xl text-7xl text-white text-center lg:pb-10 pb-5 bebas">
          Sus proyectos
        </h2>
        <div className=" lg:hidden flex gap-2 items-center justify-center pb-6">
          <img src="/izquierda.svg" width={30} />
          <img src="/derecha.svg" width={30} />
        </div>
        <ProjectsSlider />
      </div>
    </div>
  );
};
