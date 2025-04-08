import { defineField, defineType } from 'sanity'
export default defineType({
    name: 'about',
    title: 'Aboutus',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Top title ',
            type: 'string',
        }),

        defineField({
            name: "description",
            title: "Top Description",
            type: "text",
        }),

        defineField({
            name: "missiontitle",
            title: "Mission Title is here",
            type: "text",
        }),

        defineField({
            name: 'missionImage',
            title: 'Mission image',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),

        defineField({
            name: 'missionbody',
            title: 'Mission body ',
            type: 'blockContent',
        }),


        defineField({
            name: "committitle",
            title: "Commitment Title is here",
            type: "text",
        }),
        defineField({
            name: 'commitTitle',
            title: 'Commitment image',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),

        defineField({
            name: 'commitbody',
            title: 'Commitment body ',
            type: 'blockContent',
        }),


    ]
})