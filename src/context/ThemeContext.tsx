import * as React from 'react';
import { createContext, useState } from 'react';

export interface IThemeContext {
  idCategory: number;
  value: string;
  page: number;
  setIdCategory: (id: number) => void;
  setValue: (value: string) => void;
  setPage: (value: number) => void;
}

//GENERICS TYPESCRIPT
export const ThemeContext = createContext<IThemeContext>({
  idCategory: 1,
  value: '',
  page: 0,
  setIdCategory: () => {},
  setValue: () => {},
  setPage: () => {}
});

export interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {

  const [idCategory, setIdCategory] = useState(1);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(0);
  
  return (
    <ThemeContext.Provider
      value={{
        idCategory,
        value,
        page,
        setIdCategory,
        setValue,
        setPage
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;