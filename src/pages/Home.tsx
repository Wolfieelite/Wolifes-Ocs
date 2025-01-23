import Card from "../components/Card";

export default function Home() {
  return (
    <div className="dark:text-white">
      {/* title section */}
      <header className="">
        <h1 className="flex justify-center text-4xl">wolfie's characters</h1>
      </header>

      {/* section for organized dropdown menu */}
      <div className="">filter | settings | toggle dark/light mode</div>

      {/* main content for the cards */}

      <main className="my-12 grid grid-cols-[repeat(auto-fit,_minmax(250px,_360px))] gap-4 place-content-center">
        <Card />
      </main>
    </div>
  );
}
