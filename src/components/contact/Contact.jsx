import * as Data from "../../assets/Index";

export const Contact = () => {
  return (
    <div className="w-full h-full bg-black pb-14">
      <h1 className="lg:text-9xl text-7xl text-white text-center lg:pb-10 pb-5 bebas">
        {" "}
        Contacto
      </h1>
      <div className="text-white grid grid-cols-3 justify-center items-center">
        <div className="flex items-center justify-center">
          <div className="w-full h-1 bg-white" />

          <div className="flex flex-col py-4 px-7 border-white bg-black border rounded-full items-center justify-center hover:scale-105 cursor-pointer">
            <a
              href="mailto:camiloi.dev@gmail.com"
              className="flex flex-col items-center justify-center"
            >
              <img
                src={Data.Mail}
                className="lg:min-w-[120px] lg:max-w-[120px] min-w-[60px] max-w-[60px]"
                alt=""
              />
              <span>Email</span>
            </a>
          </div>
          <div className="w-full h-1 bg-white" />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-1 bg-white" />
          <div className="flex flex-col py-4 px-7 border-white bg-black border rounded-full items-center justify-center hover:scale-105 cursor-pointer">
            <a
              href="https://wa.me/34651701297"
              className="flex flex-col items-center justify-center"
            >
              <img
                src={Data.Wsp}
                className="lg:min-w-[120px] lg:max-w-[120px] min-w-[60px] max-w-[60px]"
                alt=""
              />
              <span className="text-sm">Whatsapp</span>
            </a>
          </div>
          <div className="w-full h-1 bg-white" />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-1 bg-white" />
          <div className="flex flex-col py-4 px-7 border-white bg-black border rounded-full items-center justify-center hover:scale-105 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/camilo-izquierdo-99a660229/"
              target="__blank"
              className="flex flex-col items-center justify-center"
            >
              <img
                src={Data.Linkedin}
                className="lg:min-w-[120px] lg:max-w-[120px] min-w-[60px] max-w-[60px]"
                alt=""
              />
              <span>Email</span>
            </a>
          </div>
          <div className="w-full h-1 bg-white" />
        </div>
      </div>
    </div>
  );
};
