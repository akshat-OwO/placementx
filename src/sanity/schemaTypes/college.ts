import { defineType, defineField } from "sanity";

export const collegeType = defineType({
    name: "college",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "name",
            },
        }),
        defineField({
            name: "image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: "name",
            acronym: "acronym",
            image: "image",
        },
    },
});
