import React from 'react';
import { RichText, Title } from '@gamiui/standard';

import * as S from './styles';

export interface INews {
  title: string;
  description: string;
  backgroundColor?: string;
  backgroundImg?: string;
  color?: string;
}

export const News: React.FC<INews> = ({
  title,
  description,
  backgroundColor,
  color,
  backgroundImg,
}) => {
  return (
    <S.News
      width='full'
      $backgroundColor={backgroundColor}
      $backgroundImg={backgroundImg}
      $color={color}
    >
      <Title level='h3'>{title}</Title>
      <RichText text={description} />
    </S.News>
  );
};
