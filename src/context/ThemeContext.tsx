import * as React from 'react';
import { createContext, useState } from 'react';

import useDebounce from '../common/components/hooks/useDebounce';

export interface IThemeContext {
  idCategory: number;
  value: string;
  setIdCategory: (id: number) => void;
  setValue: (value: string) => void;
}

//GENERICS TYPESCRIPT
export const ThemeContext = createContext<IThemeContext>({
  idCategory: 1,
  value: '',
  setIdCategory: () => {},
  setValue: () => {}
});

export interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {

  const [idCategory, setIdCategory] = useState(1);
  const [value, setValue] = useState('');
  
  return (
    <ThemeContext.Provider
      value={{
        idCategory,
        value,
        setIdCategory,
        setValue
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;