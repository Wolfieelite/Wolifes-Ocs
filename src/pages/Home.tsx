import { useState } from "react";
import Card from "../components/Card";
import FormModal from "../components/utils/mui/FormModal";

export default function Home() {
  const [modalState, setModalState] = useState(false);
  const [data, setData] = useState({
    name: "",
    formType: "human",
  });

  const handleCloseModal = () => {
    setModalState(!modalState);
  };
  const handleSumbitModal = () => {
    console.log("form selected with data = ", data);
  };
  return (
    <>
      <FormModal showModal={modalState} closeModal={handleCloseModal} submitModal={handleSumbitModal} data={data} />

      <div className="px-4 py-6 dark:text-white">
        {/* title section */}
        <header className="py-6">
          <h1 className="flex justify-center text-4xl">wolfie's characters</h1>
        </header>

        {/* section for organized dropdown menu */}
        {/* filter | settings | toggle dark/light mode | Create new */}
        <div className="px-4 py-2">
          <button onClick={() => setModalState(!modalState)}>Create new</button>
        </div>

        {/* main content for the cards */}

        <main className="my-12 grid grid-cols-[repeat(auto-fit,_minmax(250px,_360px))] gap-4 place-content-center">
          <Card name="Character name" age={21} bio="character bio" />
        </main>
      </div>
    </>
  );
}
