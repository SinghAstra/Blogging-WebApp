import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="h-screen flex items-center justify-center flex-col text-blue-400 bg-black flex-1 text-center font-mono">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to Our Blogging Web Application
        </h1>
        <p className="text-sm">
          Where ideas flourish and stories come to life.
          <br /> Dive into a world of creativity and inspiration, and share your
          thoughts with the world.
        </p>
      </div>
      <div className="flex-1 relative">
        <Image src={"/images/hero.gif"} alt="idea" fill />
      </div>
    </div>
  );
}
