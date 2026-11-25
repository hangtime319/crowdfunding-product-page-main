const BookmarkButton = ({ isBookmark, toggleBookmark }) => {
  return (
    <button
      type="button"
      aria-pressed={isBookmark}
      className={`md:flex md:items-center md:gap-4 md:bg-gray-100 ${isBookmark ? "text-green-700" : "text-gray-500"} text-sm rounded-full pr-0 md:pr-6 md:font-bold focus-visible:ring-2 focus-visible:ring-gray-500 cursor-pointer transition-all duration-75 group`}
      onClick={toggleBookmark}>
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle className={`${isBookmark ? "fill-green-700" : "fill-circle-bookmark"} group-hover:opacity-70`} cx="28" cy="28" r="28" />
          <path className={`${isBookmark ? "fill-white" : "fill-path-bookmark"}`} d="M23 19v18l5-5.058L33 37V19z" />
        </g>
      </svg>
      <span className="hidden md:block">{!isBookmark ? "Bookmark" : "Bookmarked"}</span>
    </button>
  );
};

export default BookmarkButton;
