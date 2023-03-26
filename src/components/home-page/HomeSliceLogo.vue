<template>
    <div class="sliceLogoContainer">
        <img src="../../assets/images/burger.svg" alt="" class="burger">
        <div class="fire">
            <img src="../../assets/images/flame.png" alt="">
        </div>
        <img src="../../assets/images/apple.svg" alt="" class="apple">
        <img src="../../assets/images/orange.svg" alt="" class="orange">
        <img src="../../assets/images/cheese.svg" alt="" class="cheese">
        <p>-50% Off</p>
        <span>the full price of burgers</span>
    </div>
</template>
<script>
export default {
    name: 'slice-logo'
}
</script>
<style lang="scss">
.sliceLogoContainer{
    width: 100%;
    max-width: 420px;
    height: 140px;
    background: #ab97f3;
    border-radius: 30px;
    padding: 0 0 30px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    row-gap: 6px;
    position: relative;

    img.cheese{
        position: absolute;
        bottom: 32px;
        right: -18px;
    }

    img.apple{
        position: absolute;
        top: -36px;
    }

    img.orange{
        position: absolute;
        top: 12px;
        right: 112px;
    }

    .fire{
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #ffd1d1;
        position: absolute;
        top: -36px;
        right: 148px;
    }

    img.burger{
        position: absolute;
        bottom: -12px;
        right: -100px;
    }

    p{
        font-size: 1.5rem;
        line-height: 28px;
        font-weight: 700;
        color: #fff;
        margin: 0;
    }

    span{
        font-size: 0.85rem;
        line-height: 16px;
        font-weight: 600;
        color: #fff;
    }
}

@media screen and (min-width: 1441px) {
    .sliceLogoContainer{
        height: 240px !important;
        row-gap: 12px !important;

        p{
            font-size: 3rem !important;
        }

        span{
            font-size: 1.15rem !important;
        }

        img.burger{
            transform: scale(1.5);
            bottom: 64px !important;
            right: -80px !important;
        }

        .fire{
            right: 210px !important;
        }

        img.orange{
            top: 24px !important;
            right: 230px !important;
        }
    }
}

@media screen and (max-width: 1200px) and (min-width: 768px) {
    .sliceLogoContainer{
        height: 130px !important;
        padding: 0 0 16px 8px !important;
        row-gap: 4px !important;
        border-radius: 20px !important;

        .fire{
            width: 18px !important;
            height: 18px !important;
            right: 70px !important;
            top: -24px !important;

            img{
                transform: scale(0.65);
            }
        }

        img.burger{
            transform: scale(0.55);
            bottom: -36px !important;
            right: -136px !important;
        }

        img.apple{
            transform: scale(0.5);
            left: -12px;
        }

        img.orange{
            transform: scale(0.5);
            right: 48px !important;
            top: -6px !important;
        }

        img.cheese{
            transform: scale(0.55);
        }

        p{
            font-size: 1rem !important;
            line-height: 18px !important;
        }

        span{
            font-size: 0.75rem !important;
            line-height: 12px !important;
        }
    }
}

@media screen and (max-width: 767px) {
    .sliceLogoContainer{
        width: 100% !important;
        max-width: 100%;
        img.burger{
            transform: scale(0.85);
            right: -100px !important;
            bottom: -24px;
        }
    }
}
</style>