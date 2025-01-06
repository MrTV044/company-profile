import Image from "next/image";
import Link from "next/link";
import "./page.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

async function getSinglePost() {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/tvndgufzufq7/environments/master/entries?access_token=SzPPef_QzrgCC1tJK4jBJsuR_zLKxxpJcmUTnuUb168&content_type=blogpostPurwa&fields.slug=The-History-and-Evolution-of-Ferrari`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getSinglePost();
  const data = post.items[0].fields;
  console.log(slug);
  console.log(post);
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative h-[500px] w-full">
          <Image
            src={"/french-food.jpg"}
            alt="french food"
            className="object-cover object-bottom"
            fill
          ></Image>
          <div className="justify-items-left absolute bottom-2 grid gap-4 p-5">
            <p className="text-left text-4xl text-gray-900">
              <span className="text-4xl font-style: italic  font-semibold">
                Frenchie
              </span>
            </p>

            <p className="max-w-xl text-left text-lg font-semibold text-gray-900">
              At Frenchie, we bring the elegance, flavor, and artistry of
              authentic French cuisine to your events. Established in 2015, our
              mission has always been to create memorable dining experiences
              that celebrate the rich culinary traditions of France while
              adapting to the unique needs of our clients.
            </p>
          </div>
        </div>

        {/* company overview */}
        <h2 className="w-fit m-auto text-4xl mt-5 mb-2">Company Overview</h2>
        <div className="ml-10 mr-10">
          <p>
            Founded by a passionate Paris-trained chef, Frenchie began as a
            boutique catering service specializing in private dinners and
            intimate gatherings. Over the years, we’ve grown into a trusted name
            in the catering industry, recognized for our commitment to quality,
            creativity, and impeccable service.
          </p>
          <br />
          <p>
            We take pride in blending professionalism with a personal touch.
            Rooted in the timeless values of French hospitality, our culture
            emphasizes attention to detail, respect for tradition, and a deep
            love for food. Whether it’s a casual brunch or an extravagant
            wedding banquet, we approach every event with the same level of care
            and artistry. With Frenchie, you’re not just getting a meal—you’re
            indulging in a culinary journey that transports you and your guests
            straight to the heart of France.
          </p>
        </div>

        {/* teams */}
        <h2 className="w-fit m-auto text-4xl mt-5 ">Teams</h2>
        <div className="teams grid grid-cols-1 gap-4 p-10 pt-5 sm:grid-cols-3 sm:gap-10">
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

        {/* testimonials */}
        <h2 className="w-fit m-auto text-4xl mt-5 ">Testimonials</h2>
        <div className="teams grid grid-cols-1 gap-4 p-10 pt-5 sm:grid-cols-4 ">
          <div>
            Frenchie made our wedding an absolute dream. The food was
            extraordinary, and our guests couldn’t stop raving about the
            desserts! <br className="mb-2" /> - Emily & James
          </div>
          <div>
            Their attention to detail is unmatched. From the presentation to the
            flavors, every dish felt like a work of art. Thank you, Frenchie!{" "}
            <br className="mb-2" /> – Sarah R.
          </div>
          <div>
            Frenchie truly brought a taste of France to our event. The service
            and quality exceeded all our expectations. <br className="mb-2" /> –
            Laura M.
          </div>
          <div>
            Best catering experience we’ve ever had! The team was professional,
            and the menu was the perfect mix of traditional and creative French
            dishes. <br className="mb-2" /> – Jonathan P.
          </div>
        </div>
      </div>
    </>
  );
}
