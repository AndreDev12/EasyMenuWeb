import React, { useEffect, useState } from 'react';
import { Icon } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { ThemeContext } from '../../../context/ThemeContext';
import { categories } from '../../mocks';
import * as S from './styles';
import { get } from '../../../config/api';

// const CategoryTitle = styled(RichText)<{color?: string}>`
//   color: ${({color}) => color}
// `;

export const Categories = () => {
  const { id, setId } = React.useContext(ThemeContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      get('categories')
        .then(data => console.log(data)) 
    } catch (e) {
      console.log(e);
    }
  }, []);
  
  return (
    <S.Categories>
      {categories.map(({ idCategory, text, icon }) => (
        <S.Category key={idCategory} onClick={() => setId(idCategory)}>
          <Icon name={icon} />
          <S.CategoryTitle 
            text={text} 
            color={idCategory === id ? lightTheme.extended.oceanStrong : ''}
          />
        </S.Category>
      ))}
    </S.Categories>
  );
};