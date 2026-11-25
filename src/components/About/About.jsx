import RewardCard from "./RewardCard";

const About = ({ rewards, quantity, openModal }) => {
  return (
    <section className="bg-white max-w-182.5 mx-auto px-6 py-8 md:px-12 md:py-14 mt-6 border border-gray-100 shadow-xs shadow-gray-100 rounded-lg">
      <div className="flex flex-col gap-8 mb-10">
        <h2 className="text-xl font-bold">About this project</h2>

        <p className="text-gray-500 leading-relaxed">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the
          task at hand.
        </p>

        <p className="text-gray-500 leading-relaxed">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      </div>
      <ul>
        {rewards.map((reward, index) => (
          <li key={reward.id}>
            <RewardCard reward={reward} quantity={quantity[index]} openModal={openModal} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
