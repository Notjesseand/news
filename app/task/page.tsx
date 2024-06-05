import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white sm:px-14 md:px-24 lg:px-40">
      <div className="h-[310px] grid grid-cols-4 w-4/5 rounded shadow-effect">
        <div>
          <img
            src="https://res.cloudinary.com/dv62ty87r/image/upload/v1717564046/Screenshot_2024-06-04_235910_mvipk3.png"
            alt="tree image"
            className="h-[100%] w-full object-cover rounded-l"
          />
        </div>
        <div className="col-span-3 flex max-h-[310px] flex-col justify-between px-4 py-7">
          <p className="text-xl my-3 border-b-[2.5px]  inline-block border-black w-20 text-center">
            Travel
          </p>
          <p className="font-bold text-2xl">10 best things to do in Seatle</p>
          <p className="text-slate-500 text-xl">
            Seatle is a seaport city on the west coast of the United States...
          </p>
          <hr className="mt-8 border-t-[2.5px] border-black" />
          <p className="text-xl">By Katherine Kato</p>
        </div>
      </div>
    </div>
  );
};

export default page;
