import { defineField, defineType } from "sanity";

export default defineType({
    name: "single",
    title: "Each Service",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "image",
            title: "Top Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },

        {
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },


        {
            name: "description",
            type: "array", // Change to an array of blocks
            of: [
                {
                    type: "block", // Allows rich text with support for images
                    styles: [{ title: "Normal", value: "normal" }],
                    marks: {
                        decorators: [{ title: "Strong", value: "strong" }],
                        annotations: [],
                    },
                },
                {
                    type: "image", // Allows adding images
                    options: {
                        hotspot: true, // For image cropping and focus area
                    },
                },
            ],
        },
        {
            name: "cards",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", type: "string" },
                        { name: "body", type: "blockContent" },
                    ],
                },
            ],
        },
    ],
});
