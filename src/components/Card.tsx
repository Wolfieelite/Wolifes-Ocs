import { FaRightLong } from "react-icons/fa6";
import { MdTextFields } from "react-icons/md";
import { PiImageSquare } from "react-icons/pi";

interface CardProps{
  name: string,
  age?: number,
  bio: string,
}

function Card({ name, age, bio }: CardProps) {
  return (
    <article className="flex flex-col border-2 border-black rounded-t-3xl bg-orange-500/40 dark:bg-slate-950/20">
      <header className="border-black py-5 bg-inherit rounded-3xl">
        <h1 className="text-lg flex justify-center">{name} | {age}</h1>
      </header>

      <nav className="grid grid-cols-2">
        <button className="place-self-center hover:bg-black">
          <MdTextFields size={25} />
        </button>
        <button className="px-7 py-4 place-self-center">
          <PiImageSquare size={25} />
        </button>
      </nav>

      {/* content: */}
      <div className="px-8 min-h-96 max-h-96 overflow-scroll">{ bio }</div>

      <div className="grid grid-cols-1 w-full py-3 bg-inherit">
        <button className="flex gap-10 place-content-end">
          Bio of character
          <span>
            <FaRightLong size={30} />
          </span>
        </button>
      </div>
    </article>
  );
}

export default Card;
