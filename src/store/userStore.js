import { atom } from "recoil";

//users
export const usernameAtom = atom({
  key: "usernameAtom",
  default: "Karthik Rishinarada",
});

export const userIdAtom = atom({
  key: "userIdAtom",
  default: "@karthik11135",
});

//for post input only
export const audienceAtom = atom({
  key: "audienceAtom",
  default: "Everyone",
});

export const showModalAtom = atom({
  key: "showModalAtom",
  default: false,
});

//what's happening state
export const trendingPostsAtom = atom({
  key: "trendingPostsAtom",
  default: [
    {
      trendingPlace: "Trending in India",
      trendingContent: "#DoubleIsmart",
      postsCount: "46.2k",
    },
    {
      trendingPlace: "Trending in India",
      trendingContent: "#NITTrichy",
      postsCount: "100.2k",
    },

    {
      trendingPlace: "Trending in India",
      trendingContent: "#Djokovic",
      postsCount: "90.11k",
    },
  ],
});
