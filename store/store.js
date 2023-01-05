import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "./settings"
import feavouritesReducer from "./favourites"

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    favouriteBooks: feavouritesReducer,
  },
});
