<template>
    <div class="homeContainer">
        <b-row class="topRow">
            <b-col sm="6" lg="4" xl="6">
                <div class="homeTitle">
                    <h3>Welcome To
                        Lucknow</h3>
                    <img src="../assets/images/smile.png" alt="" class="smile">
                </div>
            </b-col>
            <b-col sm="4" lg="5" xl="3" class="colItem">
                <div class="search" :class="isSearch ? 'active' : ''" @mouseover="isSearch = true"
                    @mouseleave="isSearch = false">
                    <b-form-input :class="isSearch ? 'searchActive' : 'seachDeactive'"></b-form-input>
                    <BIconSearch />
                </div>
            </b-col>
            <b-col sm="2" lg="3" xl="3" class="colItem">
                <div class="cart">
                    <BIconCart3 />
                </div>
            </b-col>
        </b-row>
        <b-row class="barRow">
            <b-col md="8" lg="9" xl="9">
                <LucknowBar />
            </b-col>
            <b-col md="4" lg="3" xl="3" class="sliceCol">
                <HomeSliceLogo />
            </b-col>
        </b-row>

        <b-row class="mobileBar">
            <b-col md="8" lg="9" xl="8">
                <LucknowBar :items="3" />
            </b-col>
            <b-col md="4" lg="3" xl="4" class="sliceCol">
                <HomeSliceLogo />
            </b-col>
        </b-row>

        <b-row class="planshBar">
            <b-col md="7" lg="7" xl="8">
                <LucknowBar :items="3" />
            </b-col>
            <b-col md="5" lg="5" xl="4" class="sliceCol">
                <HomeSliceLogo />
            </b-col>
        </b-row>

        <b-row class="ItemsRow">
            <b-col md="8" lg="9" xl="9" class="ItemsCol">
                <AllLucknowItemsVue />
            </b-col>

            <b-col md="4" lg="3" xl="3" class="articlesCol">
                <HomeArticles />
            </b-col>
        </b-row>

        <b-row class="planshItems">
            <b-col md="7" lg="7" xl="9" class="ItemsCol">
                <AllLucknowItemsVue />
            </b-col>

            <b-col md="5" lg="5" xl="3" class="articlesCol">
                <HomeArticles />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BIconSearch, BIconCart3, BIconJustify } from 'bootstrap-vue';
import LucknowBar from '@/components/home-page/LucknowBar.vue';
import HomeSliceLogo from '@/components/home-page/HomeSliceLogo.vue';
import AllLucknowItemsVue from '@/components/home-page/AllLucknowItems.vue';
import HomeArticles from '@/components/home-page/HomeArticles.vue';
export default {
    name: 'home-page',
    components: { BIconSearch, BIconCart3, BIconJustify, LucknowBar, HomeSliceLogo, AllLucknowItemsVue, HomeArticles },
    data() {
        return {
            isSearch: false
        }
    },

}
</script>

<style lang="scss">
.homeContainer {
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.35), inset 5px 5px 10px rgba(255, 255, 255, 0.35);
    border-radius: 40px;
    padding: 42px 60px 0 60px;
    box-sizing: border-box;

    .topRow {
        display: flex;
        justify-content: space-between;
    }

    .ItemsRow {
        margin-top: 45px;


    }

    .planshItems {
        display: none;
    }

    .barRow {
        display: flex;
        margin-top: 30px;
        justify-content: space-between;

        .sliceCol {
            display: flex;
            justify-content: flex-end;
        }
    }

    .planshBar {
        display: none;
    }

    .mobileBar {
        display: none;
    }

    .colItem {
        padding-top: 12px;
        box-sizing: border-box;
        display: flex;

        &:nth-child(2) {
            justify-content: flex-end;
        }

        &:nth-child(3) {
            justify-content: flex-end;
        }

        .cart {
            width: 50px;
            height: 50px;
            border-radius: 15px;
            background: #666666;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            cursor: pointer;

            &::after {
                content: "";
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #ff5454;
                position: absolute;
                top: -2px;
                right: -2px;
            }
        }

        .search {
            width: 50px;
            height: 50px;
            background: #f3f3f3;
            border-radius: 15px;
            padding-right: 25px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.24s linear;

            &.active {
                width: 100%;
                padding-right: 12px;
                padding-left: 12px;
                column-gap: 12px;
            }

            svg {
                cursor: pointer;
            }

            input {
                transform-origin: right;
                transition: 0.24s linear;

                &.seachDeactive {
                    transform: scaleX(0);
                }

                &.searchActive {
                    transform: scaleX(1);
                }
            }
        }
    }

    .homeTitle {
        max-width: 320px;
        position: relative;

        h3 {
            font-size: 3rem;
            line-height: 65px;
            font-weight: 800;
            color: #000000;
            margin: 0;
        }

        img.smile {
            width: 62px;
            height: 66px;
            position: absolute;
            bottom: 0;
            right: 18px;
        }
    }
}

@media screen and (min-width: 1441px) {
    .homeContainer {

        .ItemsRow {

            .articlesCol {
                display: flex;
                justify-content: flex-end;
            }
        }
    }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
    .homeContainer {

        .ItemsRow {
            display: none;
        }

        .planshItems {
            display: flex;
            margin-top: 30px;
        }

        .barRow {
            display: none;
        }

        .planshBar {
            margin-top: 30px;
            display: flex;

            .barContainer {
                .swiperContainer {

                    .swiper-slide {
                        height: 160px !important;
                    }
                }
            }
        }
    }

    .mainLayout {
        .homeTitle {
            h3 {
                font-size: 1.5rem !important;
                line-height: 45px !important;
            }

            img.smile {
                width: 42px !important;
                height: 46px !important;
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .homeContainer {
        padding: 32px 40px 0 40px !important;

        .barRow {
            display: none;
        }

        .mobileBar {
            margin-top: 48px;
            display: flex !important;
            flex-direction: column;
            row-gap: 64px;
        }

        .topRow {

            .colItem {
                display: inline-block;

                &:nth-child(2) {
                    width: calc(65% - 12px) !important;
                }

                &:nth-child(3) {
                    width: calc(35% - 12px) !important;
                    display: flex;
                    justify-content: flex-end;
                }
            }

            .homeTitle {
                h3 {
                    font-size: 1.5rem !important;
                    line-height: 45px !important;
                }

                img {
                    max-width: 48px !important;
                    height: 48px !important;
                }
            }
        }
    }
}
</style>
