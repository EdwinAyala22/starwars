import React from 'react'
import {CarouselApp} from '../../Components/Carousel/index';
import { TextoApp } from '../../Components/Text';
import { CardsApp } from '../../Components/Cards';
export const HomeApp = () => {
  return (
    <div>
        <CarouselApp/>
        <TextoApp/>
        <CardsApp/>
    </div>
  )
}
