import { createApp } from 'vue';
import Cards from './Components/Cards.vue';

export default function placeCards(el) {
  createApp(Cards).mount(el);
}
