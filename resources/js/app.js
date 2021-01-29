require('./bootstrap');

import Vue from 'vue';
import App from './vue/App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTrash, faPlusSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    el:'#app',
    components: { App }
});
