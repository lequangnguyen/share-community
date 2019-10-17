<template>
    <div class="article-preview">
        <ArticleMeta :article="article"></ArticleMeta>
        <nuxt-link to="articleLink" class="preview-link">
            <h1 v-text="article.title"></h1>
            <p v-text="article.description"></p>
            <span>Read more...</span>
        </nuxt-link>
    </div>
</template>

<script>
import ArticleMeta from '~/components/ArticleMeta';
export default {
    name: 'ArticlePreview',
    components: { ArticleMeta },
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    computed: {
        articleLink() {
            return {
                name: 'article',
                params: {
                    slug: this.article.slug
                }
            };
        }
    }
};
</script>

<style></style>
