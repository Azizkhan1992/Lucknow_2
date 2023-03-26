<template>
    <div class="navbarContainer">
        <b-row align-h="center">
            <b-col sm="12" md="10" xl="6">
                <div class="logoContainer">
                    <img src="../../assets/images/luck.png" alt="">
                    <p class="fontfS">Alka Yagik</p>
                </div>
            </b-col>
        </b-row>
        <b-row align-h="center">
            <b-col cols="12">
                <router-link to="/" class="navLink">
                    <div class="iconWr">
                        <BIconHouse />
                    </div>
                    Home
                </router-link>
            </b-col>
        </b-row>
        <b-row align-h="center">
            <b-col cols="12">
                <router-link to="/menu" class="navLink">
                    <div class="iconWr">
                        <BIconCardChecklist />
                    </div>
                    Menu
                </router-link>
            </b-col>
        </b-row>
        <b-row align-h="center">
            <b-col cols="12">
                <router-link to="/treending" class="navLink">
                    <div class="iconWr">
                        <Icon icon="mdi:fire" width="16" height="16" />
                    </div>
                    Treending
                </router-link>
            </b-col>
        </b-row>
        <b-row align-h="center">
            <b-col cols="12">
                <router-link to="/settings" class="navLink">
                    <div class="iconWr">
                        <Icon icon="ri:settings-5-line" width="16" height="16" />
                    </div>
                    Settings
                </router-link>
            </b-col>
        </b-row>
        <b-row align-h="center">
            <b-col cols="12">
                <div class="navbarBottom">
                    <div class="smallCircle"></div>
                    <div class="middleCircle"></div>
                    <div class="purpleCircle">
                        <div class="miniCircle"></div>
                    </div>
                    <div class="blueCircle"></div>

                    <img src="../../assets/images/man.png" alt="" class="man">
                    <div class="navCard">
                        <p>Faster
                            delivery!</p>

                        <div class="cardItems">
                            <span>Know More</span>
                            <BIconArrowRight />
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { BIconHouse, BIconCardChecklist, BIconArrowRight } from 'bootstrap-vue';
import { Icon } from '@iconify/vue2';
export default {
    name: 'navbar-container',
    components: { BIconHouse, BIconCardChecklist, BIconArrowRight, Icon }
}
</script>
<style lang="scss">
.navbarContainer {
    max-width: 280px;
    padding-top: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 40px;

    .navbarBottom {
        width: 100%;
        height: 274px;
        position: relative;
        display: flex;
        align-items: flex-end;

        .smallCircle {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #fff;
            position: absolute;
            top: 0;
            left: 16px;
        }

        .middleCircle {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #fff;
            position: absolute;
            top: 32px;
            left: 24px;
        }

        .purpleCircle {
            width: 76px;
            height: 76px;
            border-radius: 50%;
            background: #b080ff;
            position: absolute;
            top: 4px;
            left: 44px;
        }

        .miniCircle {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #fff;
            position: absolute;
            top: 16px;
            left: 20px;
        }

        .blueCircle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #80d1ff;
            position: absolute;
            top: 60px;
            left: 86px;
        }

        img.man {
            position: absolute;
            left: 5px;
            bottom: 48px;
        }

        .navCard {
            width: 100%;
            height: 162px;
            background: #fff;
            border-radius: 25px;
            padding: 0 12px 12px 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            row-gap: 12px;

            .cardItems {
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                    font-size: 0.75rem;
                    line-height: 12px;
                    font-weight: 700;
                    color: #000000;
                }
            }

            p {
                width: 55%;
                font-size: 1.15rem;
                line-height: 20px;
                color: #000000;
                font-weight: 800;
                margin: 0;
            }
        }
    }

    .navLink {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        column-gap: 24px;
        border-radius: 15px;
        text-decoration: none;
        background: transparent;
        color: #909090;
        transition: 0.12s linear;
        font-size: 0.85rem;
        line-height: 16px;
        font-weight: 500;

        &:hover {
            background: #ff5454;
            color: #fff;

            .iconWr {
                background: #df4545;
            }
        }

        &.router-link-exact-active {
            background: #ff5454;
            color: #fff;

            .iconWr {
                background: #df4545;
            }
        }

        .iconWr {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
            box-sizing: border-box;
            background: #fff;
            border-radius: 15px;
        }
    }

    .logoContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 12px;

        p {
            font-size: 0.85rem;
            line-height: 16px;
            font-weight: 700;
            margin: 0;
            text-align: center;
        }

        img {
            padding: 8px;
            box-sizing: border-box;
            background: #fff;
            border-radius: 15px;
        }
    }
}


@media screen and (max-width: 1200px) and (min-width: 768px) {
    .navbarContainer {

        .navLink {
            column-gap: 8px !important;
            font-size: 0.65rem !important;
            z-index: 199;
        }

        .navbarBottom {
            height: 174px !important;

            .middleCircle {
                width: 28px !important;
                height: 28px !important;
                left: 12px !important;
            }

            .purpleCircle {
                width: 64px !important;
                height: 64px !important;
            }

            .blueCircle {
                width: 52px !important;
                height: 52px !important;
                left: 60px !important;
                top: 52px !important;
            }

            .navCard {
                height: 112px !important;

                p {
                    width: 100% !important;
                    font-size: 0.85rem !important;
                }

                span {
                    font-size: 0.65rem !important;
                }
            }

            img.man {
                max-width: 142px !important;
                bottom: 48px !important;
                left: -8px !important;
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .navbarContainer {
        .navbarBottom {
            height: 140px !important;

            .smallCircle {
                background: #eaf1fe !important;
            }

            .middleCircle {
                background: #eaf1fe !important;
                top: 8px !important;
            }

            .blueCircle {
                top: 24px !important;
                left: 96px !important;
            }

            .navCard {
                height: 100px !important;
                background: #eaf1fe;

                p {
                    font-size: 0.85rem !important;
                }

                span {
                    font-size: 0.65rem !important;
                }
            }

            img.man {
                max-width: 90px !important;
                bottom: 50px !important;
                left: 64px !important;
            }
        }
    }
}</style>