import React, { createContext, useContext, useState } from 'react';

// Create the context
const ProfileContext = createContext();

// Create the provider component
export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null); // Example state, adjust as needed

  // Example functions to manage profile state
  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the profile context
export const useProfile = () => useContext(ProfileContext);
