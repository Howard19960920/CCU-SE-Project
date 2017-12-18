import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import Router from 'vue-router'
import Vmodal from 'vue-js-modal'
import VueI18nDirectives from 'vue-i18n-directives'

import App from './App.vue'
import Nav from './Nav.vue'
import Footer from './Footer.vue'
import User from './components/User.vue'
import Main from './components/Main.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import ResumeShow from './components/ResumeShow.vue'
import ResumeEdit from './components/ResumeEdit.vue'
import ResumeHistory from './components/ResumeHistory.vue'
import Recruit from './components/Recruit.vue'
import RecruitShow from './components/RecruitShow.vue'
import RecruitEdit from './components/RecruitEdit.vue'
import RecruitHistory from './components/RecruitHistory.vue'
import StdMatch from './components/stdMatch.vue'
import ComMatch from './components/comMatch.vue'

Vue.component('navbar', Nav)
Vue.component('p-footer', Footer)

Vue.use(Vuetify)
Vue.use(Router)
Vue.use(Vmodal, {
    dialog: true
})
Vue.use(VueI18n)
Vue.use(VueI18nDirectives)

let english = require('../config/i18n/en.json')
let zh = require('../config/i18n/zh.json')

const i18n = new VueI18n({
    locale: 'zh',
    messages: {
        en: english,
        zh: zh
    }
})

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [{
        name: 'Main',
        path: '/',
        component: Main
    }, {
        path: '/main',
        component: Main
    }, {
        name: 'Login',
        path: '/login',
        component: Login
    }, {
        name: 'Register',
        path: '/register',
        component: Register
    }, {
        name: 'User',
        path: '/user',
        component: User
    }, {
        name: 'ResumeEdit',
        path: '/resume/edit',
        component: ResumeEdit
    }, {
        name: 'StdMatch',
        path: '/resume/match',
        component: StdMatch
    }, {
        name: 'ResumeHistory',
        path: '/resume/history',
        component: ResumeHistory
    }, {
        name: 'ResumeShow',
        path: '/resume',
        component: ResumeShow
    }, {
        path: '/resume/:id',
        component: ResumeShow
    }, {
        name: 'Recruit',
        path: '/recruit',
        component: Recruit
    }, {
        name: 'RecruitShow',
        path: '/recruit/:id',
        component: RecruitShow
    }, {
        name: 'ComMatch',
        path: '/recruit/match/:id',
        component: ComMatch
    }, {
        name: 'RecruitHistory',
        path: '/recruit/history/:id',
        component: RecruitHistory
    }, {
        name: 'RecruitEdit',
        path: '/recruit/edit/:id',
        component: RecruitEdit
    }, {
        path: '/*',
        redirect: '/main'
    }]
})

axios.get('/api/user')
    .then(response => {
        console.log(response.data)
        Vue.prototype.user = {username: ''}
        if (response.data.stat) Vue.prototype.user = response.data

        new Vue({
            i18n,
            el: '#app',
            router,
            render: create => create(App)
        })
    })
    .catch(err => console.log(err))
