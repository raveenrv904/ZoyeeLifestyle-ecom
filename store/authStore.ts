/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";

interface AuthStore {
  isLoading: boolean;
  categories: any[];
  error: string | null;
  getAllCategories: () => Promise<void>;
  allProducts: any[];
  getAllProducts: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,
  categories: [],
  allProducts: [],

  signup: async (username: string, email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      setTimeout(() => {
        set({
          isLoading: false,
        });
      }, 2000);
    } catch (error: any) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },
  signin: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      await setTimeout(() => {
        console.log("Time Up");
      }, 2000);
      return "success";
    } catch (error: any) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  getAllCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories"
      );
      const data = await response.json();
      set({ categories: data.slice(0, 5) });
    } catch (error: any) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  getAllProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      set({ allProducts: data });
    } catch (error: any) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  addToCart: async () => {
    set({ isLoading: true, error: null });
    try {
    } catch (error: any) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));
