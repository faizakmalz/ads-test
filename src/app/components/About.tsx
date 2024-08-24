import Image from "next/image";
import { User } from "./UserCard";
import avatar from "../../../public/avatar2.png";

type Props = {
  user: User | null;
  pagetype: string;
};

export default function About({ user, pagetype }: Props) {
  return (
    <div className=" flex flex-col justify-center items-center h-[410px]">
      <div className=" w-full h-[370px] bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-16 w-full max-w-4xl">
        <h2 className="text-3xl font-extrabold text-white text-center mr-20">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="lg:w-1/3">
            <Image
              src={avatar}
              alt="User Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-xl text-gray-300 mb-4">
              Saya Faza, seorang antusiasi di bidang Web Development dan
              mendalami berbagai Cabang Praktik di Industri IT.
            </p>
            <p className="text-lg text-gray-400">
              Dengan segala skill dan pengalaman yang saya miliki, saya harap
              dapat berpartisipasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
