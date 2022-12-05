import React from 'react';
import styled from '@emotion/styled';
import { Icon, RichText } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { ThemeContext } from '../../../context/ThemeContext';
import { categories } from '../../mocks';
import * as S from './styles';

const CategoryTitle = styled(RichText)<{color?: string}>`
  color: ${({color}) => color}
`;

export const Categories = () => {
  const { id, setId } = React.useContext(ThemeContext);

  return (
    <S.Categories>
      {categories.map(({ idCategory, text, icon }) => (
        <S.Category key={idCategory} onClick={() => setId(idCategory)}>
          <Icon name={icon} />
          <CategoryTitle 
            text={text} 
            color={idCategory === id ? lightTheme.extended.oceanStrong : ''}
          />
        </S.Category>
      ))}
    </S.Categories>
  );
};