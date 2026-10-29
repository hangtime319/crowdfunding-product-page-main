import "./App.css";
import useCrowdfund from "./hooks/useCrowdfund";

const App = () => {
  const { target, backed, noReward, backers, daysLeft, rewards, quantity, isBookmark, isOpenModalChoice, selectedReward, setSelectedReward, isOpenModalSuccess, toggleBookmark, openModal, closeModal, closeModalSuccess, progressBar, confirmPledge } = useCrowdfund();
  return (
    <div>
      <p>{target} - target</p>
      <p>{progressBar()} - progressBar</p>
      <p>{quantity.join(", ")}</p>
      <p>{noReward} - noReward</p>
      <p>{backed}</p>
      <p>{daysLeft}</p>
      <p>{rewards.map((reward) => reward.id)}</p>
      <p>{backers}</p>
      <p>{String(selectedReward)} - selectReward</p>
      <p>{String(isBookmark)}</p>
      <p>{isOpenModalChoice ? "aberto" : "fechado"} - isOpenModalChoice</p>
      <p>{String(isOpenModalSuccess)} - isOpenModalSuccess</p>
      <button onClick={() => openModal(1)} className="cursor-pointer">
        openModal(1)
      </button>
      <p>{" "}</p>
      <button onClick={() => openModal()} className="cursor-pointer">
        openModal()
      </button>
      <p>{" "}</p>
      <button onClick={() => openModal(noReward)} className="cursor-pointer">
        openModal(noReward)
      </button>
      <p>{" "}</p>
      <button onClick={() => confirmPledge(10)} className="cursor-pointer">
        confirmPledge(10)
      </button>
      <p>{" "}</p>
      <button onClick={() => confirmPledge(25)} className="cursor-pointer">
        confirmPledge(25)
      </button>
      <p>{" "}</p>
      <button onClick={() => toggleBookmark()} className="cursor-pointer">
        toggleBookmark()
      </button>
    </div>
  );
};

export default App;
