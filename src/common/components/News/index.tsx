import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { RichText, Title } from '@gamiui/standard';


import { INews } from '../../../pages';
import * as S from './styles';

// export interface INews {
//   title: string;
//   description: string;
//   backgroundColor?: string;
//   color?: string;
//   backgroundImg?: string;
// }

export const News: React.FC<INews> = ({
  title,
  description,
  backgroundColor,
  color,
  imageUrl
}) => {

  const [sliderRef] = useKeenSlider({
    loop: true,
  })

  return (
    // <S.News
    //   width='full'
    //   $backgroundColor={backgroundColor}
    //   $backgroundImg={imageUrl}
    //   $color={color}
    // >
    //   <Title level='h3'>{title}</Title>
    //   <RichText text={description} />
    // </S.News>

    <div
      // width='full'
      // $backgroundColor={backgroundColor}
      // $backgroundImg={imageUrl}
      // $color={color}
      ref={sliderRef}
      className="keen-slider"
    >
      {/* <Title level='h3'>{title}</Title>
      <RichText text={description} /> */}
      {/* <Title className="keen-slider__slide number-slide1">{title}</Title>
      <RichText text={description} /> */}
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
    </div>
  );
};
