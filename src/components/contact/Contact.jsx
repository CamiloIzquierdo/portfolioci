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
            <img src={Data.Mail} width={200} alt="" />
            <span>Email</span>
          </div>
          <div className="w-full h-1 bg-white" />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-1 bg-white" />
          <div className="flex flex-col py-4 px-7 border-white bg-black border rounded-full items-center justify-center hover:scale-105 cursor-pointer">
            <img src={Data.Wsp} width={200} alt="" />
            <span>Email</span>
          </div>
          <div className="w-full h-1 bg-white" />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-1 bg-white" />
          <div className="flex flex-col py-4 px-7 border-white bg-black border rounded-full items-center justify-center hover:scale-105 cursor-pointer">
            <img src={Data.Linkedin} width={200} alt="" />
            <span>Email</span>
          </div>
          <div className="w-full h-1 bg-white" />
        </div>
      </div>
    </div>
  );
};
