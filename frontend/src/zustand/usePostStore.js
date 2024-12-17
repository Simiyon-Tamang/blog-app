import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePostStore = create(
  persist(
    //persist allows to store data in localStorage and rehydrate it on page reload or component mount
    (set, get) => ({
      selectedPost: null,
      setSelectedPost: (post) => ({ selectedPost: post }),
      clearPost: () => set({ selectedPost: null }), // Clear selected post from store after unmount of SinglePostPage component
    }),
    {
      name: "post-storage", // Unique key to store data in localStorage
      getStorage: () => localStorage, // Use localStorage as storage
    }
  )
);

export { usePostStore };
