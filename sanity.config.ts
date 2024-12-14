import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
    name: "placementx",
    title: "PlacementX",
    projectId: "i8gsm6jf",
    dataset: "production",
    plugins: [structureTool()],
    schema,
});
