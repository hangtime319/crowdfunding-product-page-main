import { useState } from "react";
import rewards from "../data/rewards";

const noReward = rewards.length + 1;

const useCrowdfund = () => {
  const target = 100000;
  
  const [backed, setBacked] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [quantity, setQuantity] = useState(rewards.map((reward) => reward.quantity));
  const [isBookmark, setIsBookmark] = useState(false);
  const [isOpenModalChoice, setIsOpenModalChoice] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false);
  const daysLeft = 56;

  function toggleBookmark() {
    setIsBookmark(!isBookmark);
  }

  function openModal(choicedReward = null) {
    setIsOpenModalChoice(true);
    setSelectedReward(choicedReward);
  }

  function closeModal() {
    setIsOpenModalChoice(false);
    setSelectedReward(null);
  }

  function closeModalSuccess() {
    setIsOpenModalSuccess(false);
  }

  function progressBar() {
    const width = (backed / target) * 100;
    return Math.min(width, 100);
  }

  function confirmPledge(valueBacked) {
    setBacked(Number(valueBacked) + backed);
    setBackers(backers + 1);
    setQuantity(rewards.map((reward, index) => reward.id === selectedReward ? quantity[index] - 1 : quantity[index]));
    closeModal();
    setIsOpenModalSuccess(true);
  }

  return {
    target,
    backed,
    noReward,
    backers,
    daysLeft,
    rewards,
    quantity,
    isBookmark,
    isOpenModalChoice,
    selectedReward,
    setSelectedReward,
    isOpenModalSuccess,
    toggleBookmark,
    openModal,
    closeModal,
    closeModalSuccess,
    progressBar,
    confirmPledge,
  };
};

export default useCrowdfund;
