import Image from "next/image";

export type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function Hero({ user, pagetype }: Props) {
  const greeting = user?.name ? (
    <h1 className="text-6xl font-extrabold text-white drop-shadow-md">
      Hello, {user.name}!
    </h1>
  ) : (
    <h1 className="text-6xl font-extrabold text-white drop-shadow-md">
      Welcome, Guest!
    </h1>
  );

  return (
    <section className="flex items-center justify-center bg-gradient-to-r from-blue-800 via-purple-800 to-black p-16">
      <div className="mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 mb-8 lg:mb-0">
          {greeting}
          <p className="text-3xl text-gray-300 mt-4">{pagetype} Page</p>
          {user?.email && (
            <p className="text-lg text-gray-400 mt-2">{user.email}</p>
          )}
        </div>

        <div className="lg:w-1/2 lg:pl-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Internship Goals!
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Pada project sederhana ini, saya berharap dapat memaksimalkan
            pengetahuan dan pendalaman saya melalui praktik lapangan yang
            menyeluruh di bidang Front End Development bersama ADS Digital.
          </p>
          <div>
            <a
              href="#"
              className="bg-blue-400 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-blue-300 transform transition-transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
