import { Icon, RichText } from '@gamiui/standard';
import React from 'react';

import { ThemeContext } from '../../../context/ThemeContext';
import { categories } from '../../mocks';
import * as S from './styles';

export const Categories = () => {
  const { setId } = React.useContext(ThemeContext);

  return (
    <S.Categories>
      {categories.map(({ id, text, icon }) => (
        <S.Category key={id} onClick={() => setId(id)}>
          <Icon name={icon} />
          <RichText text={text} />
        </S.Category>
      ))}
    </S.Categories>
  );
};