// /schemas/pricing.js
import { defineField, defineType } from "sanity";

export default defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  fields: [
    defineField({
        name: "sortOrder",
        title: "Sort Order",
        type: "number",
      }),
      
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Main Price",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "commitments",
      title: "Commitments",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
        name: "serviceOptions",
        title: "Service Options",
        type: "array",
        of: [
          {
            type: "object",
            name: "serviceOption",
            title: "Service Option",
            fields: [
              {
                name: "name",
                title: "Name",
                type: "string",
              },
              {
                name: "price",
                title: "Price",
                type: "string",
              },
            ],
          },
        ],
      }),

   
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
