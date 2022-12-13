import React, { useEffect, useState } from 'react';
import { Icon } from '@gamiui/standard';

import * as S from './styles';
import { lightTheme } from '../../../../styles/design-system/theme';
import { ThemeContext } from '../../../context/ThemeContext';
import { get } from '../../../config/api';

export const Categories = () => {
  const { idCategory, setIdCategory, page, setPage } = React.useContext(ThemeContext);
  const [categories, setCategories] = useState([]);

  const icon = 'share' as const;

  useEffect(() => {
    try {
      get('categories')
        .then(res => setCategories(res.data)) 
    } catch (e) {
      console.log(e);
    }
  }, []);

  // console.log(categories);
  console.log(page);
  
  return (
    <S.Categories>
      {categories.map(({ id, title }) => (
        <S.Category key={id} onClick={() => {
          setPage(0)
          setIdCategory(id)
          }}
        >
          <Icon 
            name={icon}
            color={id === idCategory ? lightTheme.extended.oceanStrong : lightTheme.primary.jordyBlue}
            // color={id === idCategory ? lightTheme.extended.oceanStrong : 'initial'}
          />
          <S.CategoryTitle 
            text={title} 
            color={id === idCategory ? lightTheme.extended.oceanStrong : ''}
          />
        </S.Category>
      ))}
    </S.Categories>
  );
};