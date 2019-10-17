import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import API_URL from './config';

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_URL;
    },
    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
            throw new Error(`ApiService ${error}`);
        });
    },
    get(resource, slug = '') {
        return Vue.axios.get(`${resource}/${slug}`).catch(error => {
            throw new Error(`ApiService ${error}`);
        });
    }
};

export default ApiService;

export const ArticlesService = {
    query(type, params) {
        return ApiService.query('articles' + (type === 'feed' ? '/feed' : ''), {
            params: params
        });
    },
    get(slug) {
        return ApiService.get('articles', slug);
    }
};

export const TagsService = {
    get() {
        return ApiService.get('tags');
    }
};
