import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="about">
        <h1 className="text-2xl mb-2">Company History</h1>
        At Frenchie, we bring the elegance, flavor, and artistry of authentic
        French cuisine to your events. Established in 2015, our mission has
        always been to create memorable dining experiences that celebrate the
        rich culinary traditions of France while adapting to the unique needs of
        our clients. Our Story: Founded by a passionate Paris-trained chef,
        Frenchie began as a boutique catering service specializing in private
        dinners and intimate gatherings. Over the years, we’ve grown into a
        trusted name in the catering industry, recognized for our commitment to
        quality, creativity, and impeccable service. Our Team: At Frenchie,
        every dish reflects the skill and passion of our dedicated team of
        chefs, bakers, and event professionals. From selecting the finest
        ingredients to crafting exquisite presentations, our team ensures every
        bite is a celebration of French gastronomy.
        <br />
        <br />
        <br />
        <h2 className="text-2xl mb-2">Company's Culture</h2>
        Our Culture: We take pride in blending professionalism with a personal
        touch. Rooted in the timeless values of French hospitality, our culture
        emphasizes attention to detail, respect for tradition, and a deep love
        for food. Whether it’s a casual brunch or an extravagant wedding
        banquet, we approach every event with the same level of care and
        artistry. With Frenchie, you’re not just getting a meal—you’re indulging
        in a culinary journey that transports you and your guests straight to
        the heart of France.
      </div>

      <div>
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
              Marie is the backbone of every event at Frenchie. With a
              background in luxury event planning and a flair for organization,
              she ensures every detail is executed flawlessly, from décor to
              guest experience. Her charm and calm demeanor make clients feel at
              ease while she works her magic behind the scenes to turn visions
              into reality.
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
      </div>
    </>
  );
}
