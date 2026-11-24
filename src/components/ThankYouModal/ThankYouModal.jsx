import Button from "../ui/Button";

const ThankYouModal = ({ closeModalSuccess }) => {
  return (
    <article className="flex flex-col items-center gap-4 text-center">
      <img src={`${import.meta.env.BASE_URL}icon-check.svg`} alt="" />
      <div className="flex flex-col items-center gap-4 my-4">
        <h2 className="font-bold" id="titleThankYou">Thanks for your support!</h2>
        <p className="text-gray-500 text-sm leading-loose">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
      </div>
      <Button description="Got it!" onClick={closeModalSuccess} />
    </article>
  );
};

export default ThankYouModal;
