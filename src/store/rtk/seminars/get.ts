import { ICard } from "@/components/home/promo/types";
import { api } from "../../service/api";

export interface ISeminarsResponse {
  res: ICard[];
  totalCount: number;
}

export interface IQuery {
  url: string;
  method?: string;
  body?: ICard;
}

export const seminars = api.injectEndpoints({
  endpoints: (build) => ({
    getSeminars: build.query<ISeminarsResponse, IQuery>({
      query: ({ url, method = "GET", body }) => ({
        url,
        method,
        body,
      }),
      transformResponse: (res, meta) => {
        return {
          res: res as ICard[],
          totalCount: meta?.response
            ? Number(meta.response.headers.get("X-Total-Count"))
            : 0,
        };
      },
      // transformErrorResponse: () => {
      //   // console.log(response);
      //   // return;
      // },
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetSeminarsQuery } = seminars;
