<template>
    <div @click="toggle" class="like-button" :class="{ liked: liked, liking: liking }">
        <IconLike class="icon-like" />
        <div class="count" v-if="count">{{ count }}</div>
    </div>
</template>

<script>
import IconLike from './IconLike.vue';

export default {
    components: {
        IconLike
    },
    model: {
        prop: 'liked',
        event: 'change'
    },
    props: {
        liked: Boolean,
        count: Number
    },
    data() {
        return {
            liking: false
        };
    },
    methods: {
        toggle() {
            this.$emit('change', !this.liked);
        }
    },
    watch: {
        liked(cur) {
            if (cur) {
                this.liking = true;
                setTimeout(() => {
                    this.liking = false;
                }, 1100);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.like-button {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
    transition: 1s color;
    // background: #666;

    .icon-like {
        // width: 70%;
        // height: 70%;
    }

    .count {
        font-size: 12px;
        height: 30%;
    }

    &.liked {
        color: orange;
    }

    &.liking {
        .icon-like {
            animation: btn-liking 1s 1;
        }
    }
}

@keyframes btn-liking {
    0% {
    }

    30% {
        transform: rotate(20deg) scale(0.7);
    }

    70% {
        transform: rotate(-20deg) scale(1.3);
    }

    100% {
    }
}
</style>
