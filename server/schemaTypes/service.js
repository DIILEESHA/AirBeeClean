import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "features",
      title: "Service Features",
      type: "array",
      of: [{ type: "string" }], 
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
