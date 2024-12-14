import type { SchemaTypeDefinition } from "sanity";
import { collegeType } from "./college";
import { placementType } from "./placement";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [collegeType, placementType],
};
