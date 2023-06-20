import React, { createContext, useContext } from 'react';
import { createClient } from 'contentful';

const ContentfulContext = createContext(null);

export function useContentful() {
  return useContext(ContentfulContext);
}

export function ContentfulProvider({ children }) {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  });

  return (
    <ContentfulContext.Provider value={client}>
      {children}
    </ContentfulContext.Provider>
  );
}