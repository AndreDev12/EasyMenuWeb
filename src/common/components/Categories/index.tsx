import { Icon, RichText } from '@gamiui/standard';
import React from 'react';

import { lightTheme } from '../../../../styles/design-system/theme';
import { ThemeContext } from '../../../context/ThemeContext';
import { categories } from '../../mocks';
import * as S from './styles';

export const Categories = () => {
  const { id, setId } = React.useContext(ThemeContext);

  return (
    <S.Categories>
      {categories.map(({ idCategory, text, icon }) => (
        <S.Category key={idCategory} onClick={() => setId(idCategory)}>
          <Icon name={icon} />
          <RichText text={text} style={ idCategory === id && {
            color: lightTheme.extended.oceanStrong
          }} />
        </S.Category>
      ))}
    </S.Categories>
  );
};