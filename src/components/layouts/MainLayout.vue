<template>
    <div class="mainLayout">
        <BIconJustify class="mob" @click="change"/>
        <b-row>
                <b-col sm="2"  md="2" xl="2" class="desctopNav">
                    <NavbarContainer/>
                </b-col>
                <b-col class="mobileCol" :class="$store.state.isNavActive ? 'active' : 'deactive'">
                    <NavbarContainer/>
                </b-col>
                <b-col sm="12" md="10" xl="10">
                    <router-view/>
                </b-col>
            </b-row>
    </div>
</template>
<script>
import NavbarContainer from './NavbarContainer.vue'
import { BIconJustify } from 'bootstrap-vue';
export default {
    name: 'main-layout',
    components: {NavbarContainer, BIconJustify},
    methods: {
        change(){
            this.$store.commit('changeNav')
        }
    }
}
</script>
<style lang="scss">
.mainLayout{
    padding: 53px 65px 53px 35px;
    box-sizing: border-box;
    background: #eaf1fe;
    box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.35), inset 5px 5px 10px rgba(255, 255, 255, 0.35);
    border-radius: 40px;

    .mob{
        display: none !important;
    }

    .desctopNav{
        display: block;
    }

    .mobileCol{
        display: none;
    }
}

@media screen and (max-width: 767px) {
    .mainLayout{
        padding: 35px !important;

        .mob{
            display: block !important;
            cursor: pointer;
            position: fixed;
            top: 12px;
            right: 12px;
            transform: scale(1.25);
            z-index: 499;
        }
    }
    .mobileCol{
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        display: block !important;
        width: 90% !important;
        transform-origin: left;
        transition: 0.24s linear;
        background: #eaf1fe;


        &.deactive{
            transform: scaleX(0);
        }

        &.active{
            transform: scaleX(1);
        }

        .navbarContainer{
            row-gap: 20px !important;
            background: #fff;
            padding: 50px 12px !important;
        }
    }
    .desctopNav{
        display: none !important;
    }
}


</style>