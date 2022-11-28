import * as React from 'react';
import { createContext, useState } from 'react';

export interface IThemeContext {
  id: number;
  setId: (id: number) => void;
}

//GENERICS TYPESCRIPT
export const ThemeContext = createContext<IThemeContext>({
  id: 1,
  setId: () => {},
});

export interface IThemeProvider {
  children: React.ReactNode
}

const ThemeProvider = ({children}: IThemeProvider) => {
  // const { children } = props;
  const [id, setId] = useState(1);
  // console.log(id);
  return (
    <ThemeContext.Provider
      value={{
        id,
        setId,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;