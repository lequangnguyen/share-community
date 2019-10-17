<template>
    <div class="tag-list">
        <a
            v-for="(tag, index) in tags"
            :key="index"
            href=""
            class="tag-pill tag-default"
            >{{ tag }}</a
        >
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { FETCH_TAGS } from '~/store/actions.type';

export default {
    name: 'Tag',
    computed: {
        ...mapGetters(['tags'])
    },
    methods: {
        fetchTags() {
            this.$store.dispatch(FETCH_TAGS);
        }
    },
    mounted() {
        this.fetchTags();
    }
};
</script>

<style></style>
