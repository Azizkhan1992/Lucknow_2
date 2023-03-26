<template>
    <div class="allItemsContainer">
        <div class="ItemsTitle">
            <h3>All Items</h3>
            <img src="../../assets/images/filter.png" alt="">
        </div>

        <div class="ItemsWrapper">
            <b-row class="lunchRows" v-for="item in items" :key="item.id" :class="item.id == 1 ? 'firstRow' : 'secondRow'">
                <b-col v-for="lunch in item.title" :key="lunch.id" md="4" lg="4" xl="4" :class="lunch.id == 2 ? 'center' : ''"
                    class="lunchCols">
                    <div class="lunch">
                        <img :src="require('../../assets/images/' + lunch.img)" alt="">

                        <div class="fire" v-if="lunch.isFire == true">
                            <img src="../../assets/images/flame.png" alt="">
                        </div>

                        <div class="like" v-if="lunch.isLike == true">
                            <img src="../../assets/images/like.png" alt="">
                        </div>

                        <div class="star" v-if="lunch.isStar == true">
                            <img src="../../assets/images/star.png" alt="">
                        </div>

                        <div class="lunchTitle">
                            <h4>{{ lunch.name }}</h4>
                            <p>{{ lunch.descript }}</p>

                            <div class="priceItems">
                                <span>{{ lunch.price }}</span>
                                <Icon v-if="lunch.isChecked == false" icon="ph:plus-circle-fill" width="32" height="32" />
                                <Icon v-if="lunch.isChecked == true" icon="icons8:checked" width="32" height="32" />
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
export default {
    name: 'all-items',
    components: {Icon},
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: [
                        {
                            id: 1,
                            name: 'Burger Wanted',
                            descript: 'Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade',
                            price: '$29',
                            img: 'item1.svg',
                            isFire: true,
                            isChecked: false
                        },
                        {
                            id: 2,
                            name: 'Butter Chciken',
                            descript: 'Reis, Sous-vide Chicken, Penaut Satay, Babyspian',
                            price: '$56',
                            img: 'item2.svg',
                            isLike: true,
                            isChecked: true
                        },
                        {
                            id: 3,
                            name: 'Hi, Salmon',
                            descript: 'Rels, Zoodies, Garnein Dressings, Avacode Edanmame, Maris.',
                            price: '$69',
                            img: 'item3.svg',
                            isChecked: false
                        }
                    ]
                },
                {
                    id: 2,
                    title: [
                        {
                            id: 1,
                            img: 'item4.svg'
                        },
                        {
                            id: 2,
                            img: 'item5.svg'
                        },
                        {
                            id: 3,
                            img: 'item6.svg',
                            isStar: true
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.allItemsContainer {

    .ItemsWrapper {
        margin-top: 80px;

        .lunchRows {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &.firstRow {

                .lunchCols {

                    &.center{
                        .lunch{
                            height: 152px;
                            background: #f2eeee;
                        }
                    }

                    .lunch {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        align-items: center;
                        row-gap: 6px;
                        max-width: 210px;
                        height: 170px;
                        background: #fff;
                        border: 1px solid #f2eeee;
                        border-radius: 30px;
                        padding: 0 12px 12px 28px;
                        box-sizing: border-box;
                        position: relative;

                        img{
                            max-width: 160px;
                        }

                        .fire{
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            background: #ffd1d1;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: absolute;
                            top: -48px;
                            right: -8px;
                        }

                        .like{
                            width: 24px;
                            height: 24px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            background: rgba(255, 193, 7, 0.16);
                            position: absolute;
                            top: -48px;
                            right: -8px;
                        }

                        

                        .lunchTitle{

                            .priceItems{
                                display: flex;
                                align-items: center;
                                justify-content: space-between;

                                svg{
                                    cursor: pointer;
                                }

                                span{
                                    font-size: 0.75rem;
                                    line-height: 18px;
                                    font-weight: 800;
                                    color: #000000;
                                }
                            }
                        }

                        h4{
                            font-size: 0.75rem;
                            line-height: 14px;
                            font-weight: 800;
                            color: #000000;
                            margin: 0;
                        }

                        p{
                            font-size: 0.55rem;
                            line-height: 18px;
                            font-weight: 600;
                            color: #898686;
                            margin: 0;
                        }
                    }
                }
            }

            &.secondRow {
                position: relative;
                .lunchCols{
                    padding-top: 30px;

                    &:nth-child(2){
                        .lunch{
                            height: 90px;
                        }
                    }

                    .lunch{
                        width: 170px;
                        height: 70px;
                        position: absolute;
                        bottom: -142px;
                        border: 1px solid #f2eeee;
                        border-radius: 30px 30px 0 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img{
                            margin-left: 24px;
                            margin-bottom: 24px;
                        }

                        .star{
                            width: 24px;
                            height: 24px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            background: rgba(255, 193, 7, 0.16);
                            position: absolute;
                            top: -24px;
                            right: -8px;

                            img{
                                margin-left: 0;
                                margin-bottom: 0;
                            }
                        }

                        img{
                            max-width: 160px;
                        }
                    }
                }
            }
        }
    }


    .ItemsTitle {
        display: flex;
        align-items: center;
        column-gap: 24px;

        h3 {
            font-size: 1.5rem;
            line-height: 28px;
            font-weight: 800;
            color: #000000;
            margin: 0;
        }
    }
}

@media screen and (min-width: 1441px) {
    .allItemsContainer{

        .ItemsWrapper{

            .lunchRows{

                .lunchCols{

                    .lunch{
                        max-width: 280px !important;
                    }

                    &:nth-child(2){
                        display: flex;
                        justify-content: center;
                    }

                    &:nth-child(3){
                        display: flex;
                        justify-content: flex-end;
                    }
                }

                &.secondRow{

                    .lunchCols{

                        .lunch{
                            bottom: -86px !important;
                            width: 280px !important;

                            .star{
                                top: -24px !important;
                                right: -8px;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1200px) and (min-width: 768px) {
    .allItemsContainer{
        padding-bottom: 12px;
        box-sizing: border-box;

        .ItemsTitle{
            margin-top: 12px;

            h3{
                font-size: 1.25rem !important;
            }
        }

        .ItemsWrapper{
            margin-top: 80px;

            .lunchRows{
                flex-direction: column;
                row-gap: 64px;

                .lunchCols{
                    width: 100%;
                    
                    .lunch{
                        width: 100%;
                        height: 190px !important;
                        padding: 0 8px 8px 12px !important;
                        max-width: 280px !important;

                        // img{
                        //     max-width: 120px !important;
                        // }
                    }
                }

                &.secondRow{
                    display: none;
                }
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .allItemsContainer{

        .ItemsWrapper{
            .lunchRows{

                &.firstRow{
                    row-gap: 96px;
                }

                .lunchCols{
                    .lunch{
                        max-width: 100% !important;
                    }
                }

                &.secondRow{
                    display: none;
                }
            }
        }
    }
}
</style>