import { createContext, useContext } from "react";
import { app } from "../config/firebaseConfig";
import { getAnalytics, logEvent } from "@firebase/analytics";

const analyticsContext = createContext();

export function AnalyticsContextProvider({ children }) {
  async function printFirebaseAnalyticsLog(pageName) {
    if (process.env.REACT_APP_PROFILE === "PROD") {
      const analytics = getAnalytics(app);
      logEvent(analytics, pageName);
    }
  }

  return (
    <analyticsContext.Provider value={{ printFirebaseAnalyticsLog }}>
      {children}
    </analyticsContext.Provider>
  );
}

export function useAnalytics() {
  return useContext(analyticsContext);
}
