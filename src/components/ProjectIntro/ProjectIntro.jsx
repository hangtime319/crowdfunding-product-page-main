import Button from "../ui/Button";
import BookmarkButton from "./BookmarkButton";

const ProjectIntro = ({ openModal, isBookmark, toggleBookmark }) => {
  return (
    <section className="bg-white max-w-182.5 mx-auto px-6 py-8 md:px-12 md:py-10 -mt-13 md:-mt-24 border border-gray-100 shadow-xs shadow-gray-100 rounded-lg relative">
      <img className="absolute -top-7 left-1/2 -translate-x-1/2" src={`${import.meta.env.BASE_URL}logo-mastercraft.svg`} alt="" />

      <div className="flex flex-col items-center justify-center gap-5 mt-3">
        <h1 className="text-2xl md:text-3xl text-black font-bold text-center">Mastercraft Bamboo Monitor Riser</h1>
        <p className="text-sm md:text-base text-center text-gray-500">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className="flex items-center justify-center md:justify-between gap-4 w-full md:mt-4">
          <Button description="Back this project" onClick={() => openModal()} className="flex-1 md:flex-none" size="large"/>
          <BookmarkButton isBookmark={isBookmark} toggleBookmark={toggleBookmark} />
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
