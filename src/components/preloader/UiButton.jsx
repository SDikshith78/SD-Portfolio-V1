import { atom, useAtom } from "jotai";

export const currentPageAtom = atom("intro");

const UiButton = ({ onButtonClick }) => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const handleClick = () => {
    // Existing functionality
    setCurrentPage("store");
    // Call the passed onButtonClick function
    setTimeout(() => {
        onButtonClick();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
        duration-100
        ${currentPage === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[66%]"></div>
        <button
          onClick={handleClick}
          className="pointer-events-auto py-4 px-3 bg-yellow-300 text-black font-neueMontrealmedium font-bold rounded-full hover:shadow-[0_0_15px_10px_rgba(250,204,21,0.8)] hover:text-white cursor-pointer transition-colors duration-500"
        >
          Click To Enter My World
        </button>
      </section>
    </div>
  );
};

export default UiButton;
