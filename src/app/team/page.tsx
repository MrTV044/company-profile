import Image from "next/image";
import "./teams.css";

export default function Team() {
  return (
    <>
      <h2 className="w-fit m-auto text-4xl mt-5 ">Teams</h2>
      <div className="teams grid grid-cols-1 gap-4 bg-black p-10 pt-5 sm:grid-cols-3 sm:gap-10">
        <div>
          <Image
            src="/headshot-guy-3.jpg"
            alt="picture guy"
            width={500}
            height={500}
          />
          <h3>Chef Pierre Duval</h3>
          <p>Executive Chef & Founder</p>
          <p>
            Pierre is the creative force behind Frenchie. A graduate of Le
            Cordon Bleu in Paris, he has over 15 years of experience in French
            fine dining and catering. Known for his innovation and meticulous
            attention to detail, Pierre blends traditional French flavors with
            modern culinary techniques to create unforgettable menus. His
            philosophy: &quot;Cooking is not just about food; it’s about
            crafting moments that linger in memories.&quot;
          </p>
        </div>
        <div>
          <Image
            src="/headshot-girl-3.jpg"
            alt="picture girl"
            width={500}
            height={500}
          />
          <h3>Marie Moreau</h3>
          <p>Event Manager</p>
          <p>
            Marie is the backbone of every event at Frenchie. With a background
            in luxury event planning and a flair for organization, she ensures
            every detail is executed flawlessly, from décor to guest experience.
            Her charm and calm demeanor make clients feel at ease while she
            works her magic behind the scenes to turn visions into reality.
          </p>
        </div>
        <div>
          <Image
            src="/headshot-guy-1.jpg"
            alt="picture guy"
            width={500}
            height={500}
          />
          <h3>Julien Laurent</h3>
          <p>Pastry Chef</p>
          <p>
            Julien specializes in crafting exquisite French pastries and
            desserts that are as visually stunning as they are delicious. From
            flaky croissants to decadent macarons, Julien’s creations
            consistently wow clients. He learned his craft from a
            Michelin-starred pastry chef in Lyon, and his dedication to
            perfection ensures every dessert is a masterpiece.
          </p>
        </div>
      </div>
    </>
  );
}
