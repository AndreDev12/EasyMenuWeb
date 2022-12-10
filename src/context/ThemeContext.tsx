import * as React from 'react';
import { createContext, useState } from 'react';

export interface IThemeContext {
  idCategory: number;
  setIdCategory: (id: number) => void;
  searchDebounce: string;
  setSearchDebounce: (value: string) => void;
}

//GENERICS TYPESCRIPT
export const ThemeContext = createContext<IThemeContext>({
  idCategory: 1,
  setIdCategory: () => {},
});

export interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {

  const [idCategory, setIdCategory] = useState(1);
  const [searchDebounce, setSearchDebounce] = useDebounce<string>("");
  
  return (
    <ThemeContext.Provider
      value={{
        idCategory,
        setIdCategory,
        searchDebounce,
        setSearchDebounce,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;