import Button from "../ui/Button";

const RewardCard = ({ reward, quantity, openModal }) => {
  const isOutOfStock = quantity <= 0;
  return (
    <div className="rounded-lg border border-gray-500/30 mt-6">
      <div className={`${isOutOfStock ? "opacity-40" : "opacity-100"} flex flex-col gap-6 md:gap-6 p-6 md:p-8`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-1 md:gap-0">
          <h3 className="font-bold text-base md:text-xl">{reward.name}</h3>
          <span className="text-green-400">Pledge ${reward.minPledge} or more</span>
        </div>
        <p className="text-gray-500 leading-relaxed">{reward.description}</p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-3xl text-black font-bold">{quantity}</span>
            <span className="text-gray-500">left</span>
          </div>
          <Button description={isOutOfStock ? "Out of Stock" : "Select Reward"} onClick={() => openModal(reward.id)} disabled={isOutOfStock}  />
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
