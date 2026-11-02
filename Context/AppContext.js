"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [completedAssignments, setCompletedAssignments] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load saved data
  useEffect(() => {
    const events = localStorage.getItem("registeredEvents");
    const assignments = localStorage.getItem("completedAssignments");

    if (events) {
      setRegisteredEvents(JSON.parse(events));
    }

    if (assignments) {
      setCompletedAssignments(JSON.parse(assignments));
    }

    setLoaded(true);
  }, []);

  // Save data
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "registeredEvents",
      JSON.stringify(registeredEvents)
    );

    localStorage.setItem(
      "completedAssignments",
      JSON.stringify(completedAssignments)
    );
  }, [registeredEvents, completedAssignments, loaded]);

  const registerEvent = (id) => {
    setRegisteredEvents((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  const toggleAssignment = (id) => {
    setCompletedAssignments((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <AppContext.Provider
      value={{
        registeredEvents,
        registerEvent,
        completedAssignments,
        toggleAssignment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
