import Vue from 'vue';
import Vuex from 'vuex';
import article from '../store/modules/article.module';
import home from '../store/modules/home.module';
import ApiService from '../common/api.service';

Vue.use(Vuex);
ApiService.init();

const createStore = () => {
    return new Vuex.Store({
        modules: {
            article,
            home
        }
    });
}

export default createStore