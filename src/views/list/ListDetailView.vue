<template>
    <div class="page-list-detail">
        <!-- <h4>{{ $route.params.id }}</h4> -->
        <p>
            <textarea v-model="value" style="height: 60vh; width: 100%"></textarea>
        </p>
    </div>
</template>

<script>
export default {
    name: 'list-detail',
    data() {
        return {
            value: this.$route.params.id
        };
    }
};
</script>
