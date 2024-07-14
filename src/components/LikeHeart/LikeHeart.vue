<template>
    <div @click="toggle" class="like-heart" :class="{ liked: liked }"></div>
</template>

<script>
export default {
    model: {
        prop: 'liked',
        event: 'change'
    },
    props: {
        liked: Boolean
    },
    methods: {
        toggle() {
            this.$emit('change', !this.liked);
        }
    }
};
</script>

<style lang="scss" scoped>
.like-heart {
    cursor: pointer;
    height: 50px;
    width: 50px;
    background-image: url('./heart.webp');
    background-position: left;
    background-repeat: no-repeat;
    background-size: 2900%;

    &.liked {
        background-position: right;
    }

    &.liked {
        animation: heart-burst 0.8s steps(28) 1;
    }
}
@keyframes heart-burst {
    from {
        background-position: left;
    }
    to {
        background-position: right;
    }
}
</style>
