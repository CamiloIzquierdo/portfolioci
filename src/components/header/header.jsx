export const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black md:bg-[url()] bg-[url(header.jpg)] bg-center bg-cover w-full h-screen lg:h-full">
      <div className="md:w-1/3 z-20 w-full flex md:h-fit justify-center flex-col md:items-start items-center xl:px-10 px-5 bg-white md:bg-transparent bg-opacity-50 h-full">
        <div className="flex py-8 flex-col">
          <div className="flex">
            <span className="text-black md:text-white md:text-9xl text-6xl bebas ">
              FRONT
            </span>
            <span className="text-black md:text-white md:text-[60px] text-[30px] rotate-[270deg] bebas">
              END
            </span>
          </div>
          <span className="text-black md:text-white bebas md:text-9xl text-6xl">
            DEVELOPER
          </span>
        </div>
        <div className="flex flex-col gap-12 justify-center items-center">
          <p className="text-black md:text-white lg:text-xs xl:text-base font-bold play lg:max-w-sm text-justify">
            Camilo Izquierdo programador front-end de 23 años, actualmente vive
            en Barcelona. Especializado en lenguajes como React JS, Javascript,
            CSS, Tailwind, Directus, Firebase, MongoDB y TSX. Ha tenido algunas
            contribuciones exitosas como freelancer, pero su verdadero objetivo
            es unirse a una empresa y formar parte de un equipo de trabajo en el
            que pueda seguir creciendo profesionalmente. Le apasiona la
            tecnología y siempre esta buscando nuevos desafíos para superarse a
            sí mismo. Si estás interesado en conocer más sobre el, no dudes en
            contactarlo.
          </p>
          <div className="bg-white w-fit md:w-fit justify-center items-center flex flex-col">
            <a href="https://wa.me/34651701297">
              <img src="/codigo.png" width={150} alt="" />
              <span className="text-justify">3 4 6 5 1 7 0 1 2 9 7</span>
            </a>
          </div>
        </div>
      </div>
      <div className="h-full hidden md:flex items-end justify-end bg-black md:w-2/3 w-full">
        <div
          className="w-full h-screen bg-center bg-cover"
          style={{ backgroundImage: "url(header.jpg)" }}
        ></div>
      </div>
    </div>
  );
};
