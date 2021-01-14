import React, { useState } from "react"
import { Swiper, Navigation, Pagination } from 'swiper/swiper.esm';
import ReactIdSwiper from "react-id-swiper/lib/ReactIdSwiper.custom";
import Layout from '../components/Layout/'
import Welcome from '../templates/welcome/'
import AboutYou from '../templates/about-you/'
import Audience from '../templates/audience/'
import TopMoment from '../templates/top-moment/'
import Inspiration from '../templates/inspiration/'

import 'swiper/swiper-bundle.min.css'

import Data from "../data/mock-api.json"
const data = Data.content

const IndexPage = () => {

  const [ updateSwiper] = useState(null);

  const params = {
    Swiper,
    modules: [Navigation, Pagination],

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      renderBullet: function (i, className) {
        return '<span class="' + className + '"><p>'+data.pagination.titles[i]+'</p></span>';
      },
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev'
    },
    getSwiper: updateSwiper,
  };

  return (
    <Layout>
      <ReactIdSwiper {...params}>
        <Welcome />
        <AboutYou />
        <Audience />
        <TopMoment />
        <Inspiration />
      </ReactIdSwiper>
    </Layout>
  )
}

export default IndexPage
