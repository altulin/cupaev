import { api } from "../../service/api";

export const user = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/posts/",
      }),
      transformResponse: (response: { id: number; title: string }[]) => {
        return response.map((user) => {
          return { label: user.title.replace(/ .*/, ""), value: user.id };
        });
      },
      transformErrorResponse: () => {
        // console.log(response);
        // return;
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = user;
