import ProgressBar from "./ProgressBar";

const ProgressStats = ({ target, backed, backers, daysLeft, progress }) => {
  return (
    <section className="bg-white max-w-182.5 mx-auto px-6 py-8 md:px-12 md:py-14 mt-6 border border-gray-100 shadow-xs shadow-gray-100 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:divide-x-2 divide-gray-500/10">
        <div className="flex flex-col items-center md:items-start gap-2.5 md:gap-1 md:pr-10">
          <p className="text-4xl md:text-3xl font-bold">${backed.toLocaleString("en-US")}</p>
          <span className="text-gray-500">of ${target.toLocaleString("en-US")} backed</span>
        </div>
        <div className="md:hidden block w-25 h-0.5 bg-gray-500/10 my-6"></div>
        <div className="md:flex-1 flex flex-col items-center md:items-start gap-2.5 md:gap-1 md:px-12">
          <p className="text-4xl md:text-3xl font-bold">{backers.toLocaleString("en-US")}</p>
          <span className="text-gray-500">total backers</span>
        </div>
        <div className="md:hidden block w-25 h-0.5 bg-gray-500/10 my-6"></div>
        <div className="md:flex-1 flex flex-col items-center md:items-start gap-2.5 md:gap-1 md:px-12">
          <p className="text-4xl md:text-3xl font-bold">{daysLeft}</p>
          <span className="text-gray-500">days left</span>
        </div>
      </div>
      <div>
        <ProgressBar progress={progress} />
      </div>
    </section>
  );
};

export default ProgressStats;
