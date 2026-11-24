import PledgeOption from "./PledgeOption";

const BackProjectModal = ({ rewards, quantity, closeModal, noReward, selectedReward, setSelectedReward, confirmPledge }) => {
  const noRewardOption = {
    id: noReward,
    name: "Pledge with no reward",
    description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold" id="titleProject">Back this project</h2>
        <button type="button" className="cursor-pointer focus-visible:outline-1 focus-visible:outline-gray-500" aria-label="Close Modal" onClick={closeModal}>
          <img src={`${import.meta.env.BASE_URL}icon-close-modal.svg`} alt="" />
        </button>
      </div>
      <p className="text-gray-500 leading-relaxed mt-2">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

      <fieldset>
        <legend className="sr-only">Choose a reward</legend>
        <ul>
          <li>
            <PledgeOption reward={noRewardOption} selectedReward={selectedReward} setSelectedReward={setSelectedReward} confirmPledge={confirmPledge} />
          </li>
          {rewards.map((reward, index) => (
            <li key={reward.id}>
              <PledgeOption reward={reward} quantity={quantity[index]} selectedReward={selectedReward} setSelectedReward={setSelectedReward} confirmPledge={confirmPledge} />
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
  );
};

export default BackProjectModal;
