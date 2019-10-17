<template>
    <div class="article-meta">
        <a href="profile.html"><img :src="article.author.image"/></a>
        <div class="info">
            <a href="" class="author">{{ article.author.username }}</a>
            <span class="date">{{ article.createdAt }}</span>
        </div>
        <button class="btn btn-outline-primary btn-sm pull-xs-right">
            <i class="ion-heart"></i> {{ article.favoritesCount }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'ArticleMeta',
    props: {
        article: {
            type: Object,
            required: true
        }
    }
};
</script>

<style></style>
