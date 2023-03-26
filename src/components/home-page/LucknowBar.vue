<template>
    <div class="barContainer">
        <swiper :slides-per-view="items" :space-between="15" :autoplay="true" :loop="true" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="slide in barItems" :key="slide.id" class="test">
                <img :src="require('../../assets/images/' + slide.img)" 
                    class="img-fluid" blank="true">
                <p>{{ slide.name }}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { Navigation, Pagination, Autoplay } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay])
export default {
    name: 'lucknow-bar',
    components: { Swiper, SwiperSlide },
    props:{
        items: {
            type: [Number, String],
            default: 6
        }
    },
    data() {
        return {
            barItems: [
                {
                    id: 1,
                    name: 'All',
                    img: 'chicken.png'
                },
                {
                    id: 2,
                    name: 'Burger',
                    img: 'burger.png'
                },
                {
                    id: 3,
                    name: 'Pizza',
                    img: 'pizza.png'
                },
                {
                    id: 4,
                    name: 'Salads',
                    img: 'salad.png'
                },
                {
                    id: 5,
                    name: 'Donut',
                    img: 'donut.png'
                },
                {
                    id: 6,
                    name: 'Drinks',
                    img: 'drinks.png'
                }
            ]
        }
    },
    methods: {
        onSwiper() {
            // console.log('Swipe')
        },
        onSlideChange() {
            // console.log('Slide Change')
        }
    }
}
</script>
<style lang="scss">
.barContainer {
    .swiper-container{

        .swiper-slide{
            width: 100px;
            height: 140px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 60px;
            background: #f3f3f3;
            padding: 24px 9px;
            box-sizing: border-box;
            transition: 0.12s linear;

            &:hover{
                background: #fff;
                box-shadow: 0px 4px 46px rgba(0, 0, 0, 0.1);

                p{
                    color: #000000;
                }
            }

            p{
                margin: 0;
                font-size: 0.85rem;
                line-height: 46px;
                font-weight: 500;
                color: #585858;
            }

            img{
                width: 62px;
                height: 52px;
                object-fit: contain;
            }
        }
    }

    .img-fluid {
        max-width: 100%;
        height: auto;
    }

    .w-100 {
        width: 100%;
    }

    .ml-auto,
    .mx-auto {
        margin-left: auto;
    }

    .mr-auto,
    .mx-auto {
        margin-right: auto;
    }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
    .barContainer{
        .swiper-container{
            .swiper-slide{
                height: 130px !important;
                padding: 12px 8px !important;
                row-gap: 4px !important;

                p{
                    font-size: 0.65rem !important;
                    line-height: 42px !important;
                }

                img{
                    width: 68px !important;
                    height: 64px !important;
                }
            }
        }
    }
}

@media screen and (min-width: 1441px) {
    .barContainer{
        .swiper-container{
            .swiper-slide{
                height: 240px !important;
                border-radius: 120px !important;
                row-gap: 12px ;

                img{
                    width: 116px !important;
                    height: 108px !important;
                }
            }
        }
    }
}
</style>