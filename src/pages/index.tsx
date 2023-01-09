import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import classNames from 'classnames';
import { Container, Modal, Pagination, Empty, Loader } from '@gamiui/standard';

import { Categories } from '../common/components/Categories';
import { News } from '../common/components/News';
import { IProduct } from '../common/components/Product';
import { LayoutWrapper } from '../common/layouts';
import { ThemeContext } from '../context/ThemeContext';
import { get } from '../config/api';
import { lightTheme } from '../../styles/design-system/theme';
import { ProductList } from '../common/components/ProductList';
import useDebounce from '../common/components/hooks/useDebounce';

export interface INews {
  id?: number;
  title: string;
  description: string;
  backgroundColor?: string;
  color?: string;
  imageUrl: string;
  // className: string;
  // backgroundImg?: string;
}

export default function Home() {

  const [visible, setVisible] = useState(false);
  const [productsByPage, setProductsByPage] = useState<IProduct[]>([]);
  const [news, setNews] = useState<INews[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const { idCategory, value, page, setPage } = useContext(ThemeContext);
  const debouncedValue = useDebounce(value, 500);
 
  const SIZE_BY_PAGE = 5;
  let pageNumber = 1 + page;
  const numberPages = Math.ceil(totalItems / SIZE_BY_PAGE);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  useEffect(() => {
    async function newsFetch(){
      try {
        const { data } = await get(`news?startDate=2023-01-03&companyId=1`);
        console.log(data);
        setNews(data);
      }catch(e){
        console.log(e);
      }
    }
    newsFetch();
  }, [])

  useEffect(() => {
    async function dishesFetch(){
      try{
        const result = await get(`dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search=${debouncedValue}`);
        setProductsByPage(result.data);
        setTotalItems(result.metaData.pagination.totalItems);
        setIsLoading(false);
        setShowMessage(false);
        !result.data.length && setShowMessage(true);
      }catch(e){
        console.log(e);
      }
    }
    dishesFetch();
  }, [idCategory, pageNumber, debouncedValue])

  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);

  const handleChangePage = (page: number) => {
    // console.log('test', page);
    setPage(page);
  };

  return (
    <React.Fragment>
      <Modal visible={visible} onClose={onClose} title='This is my title'>
        <p style={{ padding: '1rem' }}>Hola como estas</p>
      </Modal>

      <Container padding='1rem' className={classNames('topics')}>
        <Container>
          <Categories />
        </Container>
       
        <div ref={sliderRef} className='keen-slider' style={{margin: '1rem 0'}}>
          {
            news?.map( 
              ({ id, title, description, backgroundColor, imageUrl }: INews ) => (
                <News
                  // className={`keen-slider__slide number-slide${id}`}
                  key={id}
                  title={title}
                  description={description}
                  backgroundColor={backgroundColor}
                  imageUrl={imageUrl}
                />
              )
            )
          }
        </div>

        <ProductList
          isLoading={isLoading}
          productsByPage={productsByPage}
        />

        <Container>
          {
            isLoading && (
              <Loader.Wrapper 
                minHeight='800px'
                isLoading={isLoading}
                loaderNode={<Loader type='spinner' background={`${lightTheme.primary.first}`}></Loader>}
                className={classNames('flex', 'items-center')}
              >
              </Loader.Wrapper>
            )
          }
        </Container>

        <Container>
          {
            showMessage && (
              <Empty text='No encontramos ningún producto para la búsqueda, intente con otro nombre.' />
            )
          }
        </Container>

        <Container margin='0 0 2rem'>
          {numberPages >= 1 && (
            <Pagination
              numberPages={numberPages}
              initialPage={0}
              onChangePage={page => handleChangePage(page)}
              page={page}
            />
          )}
        </Container>
      </Container>
    </React.Fragment>
  );
}

Home.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);