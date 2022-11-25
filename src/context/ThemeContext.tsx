import * as React from 'react';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = (children: React.ReactNode) => {
    const [id, setId] = useState(1);

    return (
        <ThemeContext.Provider
          value={{
            id,
            setId
          }}
        >
          {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;