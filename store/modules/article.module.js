import Vue from "vue";
import { FETCH_ARTICLE, SET_ARTICLE } from "../actions.type";
import { ArticlesService } from "../../common/api.service";

const state = {
  article: {},
  comments: []
};

const getters = {
  article(state) {
    return state.article;
  },
  comments(state) {
    return state.comments;
  }
};

const mutations = {
  [SET_ARTICLE](state, article) {
    state.article = article;
  }
};

const actions = {
  async [FETCH_ARTICLE](context, slug) {
    const { data } = await ArticlesService.get(slug);
    context.commit(SET_ARTICLE, data.article);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
