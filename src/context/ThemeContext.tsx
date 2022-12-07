import * as React from 'react';
import { createContext, useState } from 'react';

export interface IThemeContext {
  idCategory: number;
  setIdCategory: (id: number) => void;
}

//GENERICS TYPESCRIPT
export const ThemeContext = createContext<IThemeContext>({
  idCategory: 1,
  setIdCategory: () => {},
});

export interface IThemeProvider {
  children: React.ReactNode
}

const ThemeProvider = ({children}: IThemeProvider) => {
  // const { children } = props;
  const [idCategory, setIdCategory] = useState(1);
  // console.log(id);
  return (
    <ThemeContext.Provider
      value={{
        idCategory,
        setIdCategory,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;