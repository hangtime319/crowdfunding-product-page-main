import { useState } from "react";
import Button from "../ui/Button";

const PledgeOption = ({ reward, quantity, selectedReward, setSelectedReward, confirmPledge }) => {
  const minimum = reward.minPledge ?? 1;
  const [pledge, setPledge] = useState(minimum);

  const enviar = (e) => {
    e.preventDefault();
    confirmPledge(Number(pledge));
  };

  const isSelected = selectedReward === reward.id;
  const isOutOfStock = quantity !== undefined && quantity <= 0;

  return (
    <div className={`rounded-lg border-2 ${isSelected ? "border-green-400" : "border-gray-500/30"} mt-6 ${isOutOfStock ? "opacity-40" : "opacity-100"}`}>
      <label>
        <div className="flex items-center justify-between px-5 pt-5">
          <div className="flex items-center gap-4">
            <input
              type="radio"
              name="pledge"
              checked={isSelected}
              onChange={() => setSelectedReward(reward.id)}
              disabled={isOutOfStock}
              className="aspect-square rounded-full appearance-none size-5 border-2 border-gray-500/30 cursor-pointer checked:bg-green-400 p-1 bg-clip-content disabled:cursor-not-allowed"
            />
            <div className="flex flex-col md:flex-row gap-1 md:gap-3">
              <h3 className="font-bold text-base">{reward.name}</h3>
              {reward.minPledge && <span className="text-green-400">Pledge ${reward.minPledge} or more</span>}
            </div>
          </div>
          {quantity !== undefined ? (
            <div className="hidden md:flex items-center gap-2 text-gray-500">
              <span className="text-2xl text-black font-bold">{quantity}</span>
              <span className="text-gray-500">left</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed px-4 py-6 md:p-6 ml-2 md:ml-8">{reward.description}</p>
        {quantity !== undefined ? (
          <div className="md:hidden flex items-center gap-2 text-gray-500 ml-6 mb-6">
            <span className="text-xl text-black font-bold">{quantity}</span>
            <span className="text-gray-500">{quantity !== undefined ? "left" : ""}</span>
          </div>
        ) : (
          ""
        )}
      </label>
      {isSelected ? (
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 p-6 border-t-2 border-t-gray-500/30">
          <label className="text-gray-500 text-sm" htmlFor={`pledge-amount-${reward.id}`}>
            Enter your pledge
          </label>
          <form onSubmit={enviar} className="flex gap-4 relative">
            <span aria-hidden="true" className="text-gray-500/50 absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
              $
            </span>
            <input
              type="number"
              value={pledge}
              min={minimum}
              required
              onChange={(e) => setPledge(e.target.value)}
              id={`pledge-amount-${reward.id}`}
              className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none rounded-full border border-gray-500/30 pl-10 w-26 focus:outline focus:outline-green-400 font-bold caret-green-400"
            />
            <Button type="submit" description="Continue" confirmPledge={confirmPledge} />
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PledgeOption;
