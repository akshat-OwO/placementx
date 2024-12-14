import { defineField, defineType } from "sanity";

export const placementType = defineType({
    name: "placement",
    type: "document",
    fields: [
        defineField({
            name: "college",
            type: "reference",
            to: [{ type: "college" }],
        }),
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "role",
            type: "string",
        }),
        defineField({
            name: "placed_students",
            type: "number",
        }),
        defineField({
            name: "package",
            type: "string",
        }),
    ],
});
