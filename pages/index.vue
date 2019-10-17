<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">canal</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link to="/" class="nav-link" active-class="active">Global Feed</nuxt-link>
              </li>
            </ul>
          </div>
        <ArticleList></ArticleList>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <Tag></Tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '~/components/TheTag';
import ArticleList from '~/components/ArticleList';
export default {
  layout: "default",
  components: { Tag, ArticleList }
};
</script>

<style>
</style>
