import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePostStore = create(
  persist(
    (set) => ({
      selectedPost: null,
      setSelectedPost: (post) => set({ selectedPost: post }),
      clearPost: () => set({ selectedPost: null }),
    }),
    {
      name: "post-storage", // Unique key for localStorage
      getStorage: () => localStorage, // Use localStorage as storage
    }
  )
);

export { usePostStore };
