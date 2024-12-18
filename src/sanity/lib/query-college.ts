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
            maintainer: {
                name: string;
                contact: string;
            };
        }>({
            query: `*[_type == "college" && slug.current == $college][0]`,
            params,
        });
    },
    getCollegesParams: async () => {
        return await loadQuery<SanityDocument[]>({
            query: `*[_type == "college"]`,
        });
    },
    getColleges: async () => {
        return await loadQuery<
            {
                _id: string;
                name: string;
                image: {
                    _type: string;
                    asset: { _ref: string; _type: string };
                };
                slug: {
                    _type: string;
                    current: string;
                };
                _updatedAt: string;
                _createdAt: string;
            }[]
        >({
            query: `*[_type == "college"]`,
        });
    },
};
