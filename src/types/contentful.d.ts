import { Document } from "@contentful/rich-text-types";

export interface ContentfulPost {
  fields: {
    title: string;
    slug: string;
    author: string;
    content: Document;
    shortDescription: Document;
    picture: { fields: { file: { url: string } } };
    names: string;
    description: Document;
    image: { fields: { file: { url: string } } };
    products: string;
    featuredImage: {
      sys: {
        id: string;
      };
    };
  };
}
// export interface ContentfulPost {
//   items: [
//     {
//       fields: {
//         title: string;
//         slug: string;
//         author: string;
//         content: Document;
//         shortDescription: Document;
//         featuredImage: {
//           sys: {
//             id: string;
//           };
//         };
//       };
//     },
//   ];
//   includes: {
//     Asset: [{ fields: { file: { url: string } }; sys: { id: string } }];
//   };
// }
