import { FETCH_ARTICLES, FETCH_TAGS } from "../actions.type";
import { FETCH_START, FETCH_END, SET_TAGS } from "../mutations.type";
import { ArticlesService, TagsService } from "../../common/api.service";

const state = {
  articles: [],
  isLoading: true,
  articlesCount: 0,
  tags: []
};

const getters = {
  articles(state) {
    return state.articles;
  },
  articlesCount(state) {
    return state.articlesCount;
  },
  isLoading(state) {
    return state.isLoading;
  },
  tags(state) {
    return state.tags;
  }
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, { articles, articlesCount }) {
    state.articles = articles;
    state.articlesCount = articlesCount;
    state.isLoading = false;
  },
  [SET_TAGS](state, tags) {
    state.tags = tags;
  }
};

const actions = {
  [FETCH_ARTICLES]({ commit }, params) {
    commit(FETCH_START);
    return ArticlesService.query(params.type, params.filters)
      .then(({ data }) => {
        commit(FETCH_END, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [FETCH_TAGS]({ commit }) {
    return TagsService.get()
      .then(({ data }) => {
        commit(SET_TAGS, data.tags);
      })
      .catch(error => {
        console.log('d');
        throw Error(error);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
