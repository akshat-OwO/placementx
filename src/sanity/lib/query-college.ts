import type { SanityDocument } from "@sanity/client";
import type { QueryParams } from "@sanity/client";
import { loadQuery } from "./load-query";

export const queryCollege = {
    getCollege: async (params: QueryParams) => {
        return await loadQuery<{
            name: string;
            image: {
                asset: {
                    _ref: string;
                    _type: string;
                };
            };
        }>({
            query: `*[_type == "college" && slug.current == $college][0]`,
            params,
        });
    },
    getColleges: async () => {
        return await loadQuery<SanityDocument[]>({
            query: `*[_type == "college"]`,
        });
    },
};
