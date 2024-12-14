import type { QueryParams } from "@sanity/client";
import { loadQuery } from "./load-query";

export const queryPlacement = {
    getPlacements: async (params: QueryParams) => {
        return await loadQuery<{
            name: string;
            role: string;
            placed_students: number;
            package: string;
        }>({
            query: `*[_type == "placement" && college._ref in *[_type == "college" && slug.current == $college]._id]{
                name,
                role,
                placed_students,
                package
            }`,
            params,
        });
    },
};
