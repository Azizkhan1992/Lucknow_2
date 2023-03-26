<template>
    <div class="articlesContainer">
        <div class="articlesTitle">
            <h3>Articles</h3>

            <div class="articleRow">
                <BIconArrowRight />
            </div>
        </div>

        <div class="articlesWrapper">
            <b-row align-h="between" v-for="article in articles" :key="article.id">
                <b-col cols="3">
                    <div class="item"
                    :class="article.id == 1 ? 'chickArt' : '' ||
                    article.id == 2 ? 'maskArt' : '' ||
                    article.id == 3 ? 'breadArt' : '' ||
                    article.id == 4 ? 'pizzaArt' : ''
                    "
                    >
                        <img :src="require('../../assets/images/'+article.artImg)" alt="">
                    </div>
                </b-col>

                <b-col cols="9" class="titleCol">
                    <b-row>
                        <p>{{ article.title }}</p>
                    </b-row>

                    <b-row>
                        <div class="titleWrapper">
                            <img :src="require('../../assets/images/'+article.img1)" alt="" class="img">

                            <img :src="require('../../assets/images/'+article.img2)" alt="" class="img">

                            <div class="likes">
                                <img src="../../assets/images/signal.svg" alt="">
                                <span>{{ article.likes }}+</span>
                            </div>
                        </div>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
import { BIconArrowRight } from 'bootstrap-vue';
export default {
    name: 'home-articles',
    components: { BIconArrowRight },
    data(){
        return{
            articles: [
                {
                    id: 1,
                    artImg: 'chicken.svg',
                    title: 'How to cook turkey on Natural Gas ',
                    img1: 'Ellipse 1.svg',
                    img2: 'Ellipse 2.svg',
                    likes: 28
                },
                {
                    id: 2,
                    artImg: 'mask.svg',
                    title: 'Corona virus update: 3,43,287+ cases',
                    img1: 'Ellipse 1.svg',
                    img2: 'Ellipse 3.svg',
                    likes: 28
                },
                {
                    id: 3,
                    artImg: 'bread.svg',
                    title: 'Tasty chunk donutes with chocolate',
                    img1: 'Ellipse 1.svg',
                    img2: 'Ellipse 3.svg',
                    likes: 28
                },
                {
                    id: 4,
                    artImg: 'pizza.svg',
                    title: 'Home made double cheez with popcorn respies',
                    img1: 'Ellipse 1.svg',
                    img2: 'Ellipse 3.svg',
                    likes: 28
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.articlesContainer {
    max-width: 420px;

    .articlesWrapper {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        .row {

            .titleWrapper{
                position: relative;
                display: flex;

                .likes{
                    position: absolute;
                    left: 52px;
                    background: #fff8d5;
                    padding: 6px 12px;
                    box-sizing: border-box;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    column-gap: 6px;

                    span{
                        font-size: 0.65rem;
                        line-height: 12px;
                        font-weight: 500;
                    }
                }

                img.img{
                    padding: 2px;
                    box-sizing: border-box;
                    background: #fff;
                    border-radius: 50%;

                    &:nth-child(2){
                        position: absolute;
                        left: 32px;
                    }
                }
            }

            .titleCol{
                p{
                    font-size: 0.75rem;
                    line-height: 18px;
                    font-weight: 700;
                    color: #000000;
                    margin: 0;
                }
            }

            .item {
                width: 60px;
                height: 60px;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;

                &.pizzaArt{
                    background: #c1fff4;
                }

                &.breadArt{
                    background: #ffddf0;
                }

                &.maskArt{
                    background: #d6f5ff;
                }

                &.chickArt {
                    background: #fff0a5;
                }
            }
        }
    }

    .articlesTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-size: 1.5rem;
            line-height: 28px;
            font-weight: 800;
            color: #000000;
            margin: 0;
        }

        .articleRow {
            width: 50px;
            height: 50px;
            border-radius: 15px;
            background: #f5f6f7;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}


@media screen and (max-width: 1200px) and (min-width: 768px) {
    .articlesContainer{
        h3{
            font-size: 1.25rem !important;
        }

        .articlesWrapper{
            row-gap: 32px;
            margin-top: 72px !important;

            .titleCol{

                p{
                    font-size: 0.55rem !important;
                    line-height: 14px !important;
                }
            }

            .item{
                width: 38px !important;
                height: 38px !important;

                img{
                    max-width: 28px !important;
                }
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .articlesContainer{
        margin-top: 48px;
        padding-bottom: 12px;
        box-sizing: border-box;
    }
}
</style>