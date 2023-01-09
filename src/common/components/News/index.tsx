import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { RichText, Title } from '@gamiui/standard';

import { INews } from '../../../pages';
import * as S from './styles';

export const News: React.FC<INews> = ({
  id,
  title,
  description,
  backgroundColor,
  color,
  imageUrl
}) => {

  return (
    <S.News
      className={`keen-slider__slide number-slide${id}`}
      // width='full'
      $backgroundColor={backgroundColor}
      $backgroundImg={imageUrl}
      $color={color}
    >
      <Title level='h3'>{title}</Title>
      <RichText text={description} />
    </S.News>
  );
};
