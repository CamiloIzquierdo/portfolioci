import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { projects } from "../data/Projects";
import * as Data from "../../assets/Index";

export const ProjectsSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className="gap-3 flex my-slider justify-center items-center"
    >
      {projects.map((project) => (
        <div
          className="lg:grayscale lg:hover:grayscale-0 transition-all 2xl:hover:scale-110 group max-w-md "
          key={project.id}
        >
          <div
            style={{ backgroundImage: `url(${project.image})` }}
            className="lg:min-h-[300px] min-h-[200px]  object-cover bg-contain bg-no-repeat bg-center flex justify-center items-center p-5 xl:min-w-[650px] 2xl:min-w-[700px] "
          >
            <div className="hidden lg:h-full lg:min-h-[250px] h-[300px] justify-between text-xl max-w-lg p-3 text-white lg:top-24 lg:left-[85px] lg:hidden group lg:group-hover:flex flex-col transition-all delay-500 bg-gray-800 bg-opacity-70">
              <span className="bebas text-5xl">{project.nameProject}</span>
              <span className="play text-sm lg:text-base">
                {project.dataProject}
              </span>
              <span className="text-center">{project.tec}</span>
              <div>
                <div className="flex gap-14 items-center justify-center">
                  <a
                    href={project.live}
                    target="__blank"
                    className="hover:text-blue-500 font-semibold flex gap-2 items-center hover:scale-105 cursor-pointer"
                  >
                    <img src={Data.Live} width={30} alt="" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.code}
                    target="__blank"
                    className="hover:text-blue-500 font-semibold flex gap-2 items-center hover:scale-105 cursor-pointer"
                  >
                    <img src={Data.Github} width={30} alt="" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:h-full lg:min-h-[250px] h-[300px] justify-between text-xl max-w-lg p-3 text-white lg:hidden group flex flex-col transition-all delay-500 bg-gray-800 bg-opacity-70">
            <span className="bebas text-5xl">{project.nameProject}</span>
            <span className="play text-sm lg:text-base max-w-sm">
              {project.dataProject}
            </span>
            <span className="text-center">{project.tec}</span>
            <div>
              <div className="flex gap-14 items-center justify-center">
                <a
                  href={project.live}
                  target="__blank"
                  className="hover:text-blue-500 font-semibold flex gap-2 items-center hover:scale-105 cursor-pointer"
                >
                  <img src={Data.Live} width={30} alt="" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.code}
                  target="__blank"
                  className="hover:text-blue-500 font-semibold flex gap-2 items-center hover:scale-105 cursor-pointer"
                >
                  <img src={Data.Github} width={30} alt="" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
