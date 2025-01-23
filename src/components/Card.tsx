
import { MdTextFields } from "react-icons/md";
import { PiImageSquare } from "react-icons/pi";



function Card() { 
  return (
    <article className="flex flex-col border-2 border-black rounded-t-xl bg-slate-900/20">
      <header className="border-black py-5">
        <h1 className="text-lg flex justify-center">Character name | age?</h1>
      </header>

      <nav className="flex justify-around bg-inherit">
        <button className="px-7 py-4"><MdTextFields size={25}/></button>
        <button className="px-7 py-4"><PiImageSquare size={25}/></button>
      </nav>

      {/* content: */}
      <div className="px-8 min-h-96 max-h-96 overflow-scroll bg-inherit">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error itaque
        blanditiis fugiat ex temporibus reiciendis quos ullam magnam sint quo
        facere nostrum at reprehenderit laudantium distinctio, illo inventore
        expedita hic? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Ipsam molestias a voluptatem quod non! Non voluptates eum tempora
        reiciendis dignissimos, voluptatum commodi quibusdam aliquam quas
        laudantium maxime ut, consequuntur fugit! Molestias earum dicta impedit?
        Eos quisquam magnam magni quibusdam dolores corporis natus odio alias,
        labore harum quod eligendi repellendus inventore similique perspiciatis
        fugiat officiis voluptates aut omnis impedit necessitatibus id. Minus ex
        eum obcaecati labore quasi aliquid, voluptatibus rerum atque? Quibusdam
        natus dolores deserunt distinctio, quas ipsam officia, voluptatem dicta
        illo minima, quia unde architecto optio voluptatibus? Soluta, id
        aliquid! Aliquid fugit rerum beatae et cumque minima nulla
        exercitationem eligendi unde reprehenderit facere iste quasi qui saepe
        ducimus molestiae cupiditate autem est, consectetur, architecto
        temporibus necessitatibus dolor? Ad, modi blanditiis.
      </div>

      <div className="w-full py-3">
        <button className="w-full text-center">Show more</button>
      </div>
    </article>
  );
}

export default Card;
