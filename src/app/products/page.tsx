// import { contentfull } from "@/types/contentfull";
import { contentfull } from "@/types/contentful";
import Image from "next/image";
import { getContentfulData } from "@/utils/get-contetful-data";

export default async function PostsPage() {
  const posts = (await getContentfulData({
    content_type: "companyProfile",
  })) as unknown as contentfull[];

  console.log(posts);

  // const posts = mapProduct(contentfullData);

  if (posts) {
    return (
      <section>
        {posts.map((post, index) => (
          <div key={index} className="">
            <div className="relative h-32 w-full">
              <Image
                src={`https:${post.fields.image.fields.file.url}`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p>{post.fields.products}</p>
          </div>
        ))}
      </section>
    );
  } else {
    return <h1>Not Found</h1>;
  }
}
