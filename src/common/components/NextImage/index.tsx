import Image, { ImageLoaderProps } from 'next/image';

import * as S from './styles';

export interface IImage {
    imageUrl: string;
    alt: string;
}

export const NextImage = ({ imageUrl, alt }: IImage) => {
    const base = imageUrl.split("/").slice(0,-1).join("/");
    const src = imageUrl.split("/").slice(-1)[0];

    const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
        return `${base}/${src}?w=${width}&q=${quality || 75}`;
    }

    return (
        <S.NextImage> 
            <Image
                loader={customLoader}
                alt={alt}
                src={src}
                fill={true}
                // width='100%'
                // height={300}
                // width={300}
            />
        </S.NextImage>
    )
}