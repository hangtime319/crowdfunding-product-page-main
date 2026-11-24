import "./App.css";
import useCrowdfund from "./hooks/useCrowdfund";
import Header from "./components/Header/Header";
import ProjectIntro from "./components/ProjectIntro/ProjectIntro";
import ProgressStats from "./components/ProgressStats/ProgressStats";
import About from "./components/About/About";
import BackProjectModal from "./components/BackProjectModal/BackProjectModal";
import Modal from "./components/ui/Modal";
import ThankYouModal from "./components/ThankYouModal/ThankYouModal";

const App = () => {
  const { target, backed, noReward, backers, daysLeft, rewards, quantity, isBookmark, isOpenModalChoice, selectedReward, setSelectedReward, isOpenModalSuccess, toggleBookmark, openModal, closeModal, closeModalSuccess, progressBar, confirmPledge } = useCrowdfund();

  const progress = progressBar();

  return (
    <>
      <Header />
      <main className="px-6 md:px-0">
        <ProjectIntro isBookmark={isBookmark} toggleBookmark={toggleBookmark} openModal={openModal} />
        <ProgressStats target={target} backed={backed} backers={backers} daysLeft={daysLeft} progress={progress} />
        <About quantity={quantity} rewards={rewards} openModal={openModal} />
        {isOpenModalChoice && (
          <Modal className="max-w-182.5 w-full md:px-10 md:py-12" onClose={closeModal} titleId="titleProject">
            <BackProjectModal rewards={rewards} quantity={quantity} closeModal={closeModal} noReward={noReward} selectedReward={selectedReward} setSelectedReward={setSelectedReward} confirmPledge={confirmPledge} />
          </Modal>
        )}
        {isOpenModalSuccess && (
          <Modal className="max-w-135 w-full" onClose={closeModalSuccess} titleId="titleThankYou">
            <ThankYouModal closeModalSuccess={closeModalSuccess} />
          </Modal>
        )}
      </main>
    </>
  );
};

export default App;
