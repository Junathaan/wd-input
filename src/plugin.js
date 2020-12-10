import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './App.vue';

const CustomElement = wrap(Vue, App);

window.customElements.define('hoo-navbar', CustomElement);

const app = document.createElement('hoo-navbar');
document.body.append(app);
