<template>
    <div class="water-mark" :style="waterStyle"></div>
</template>

<script>
function getBase64(text, width, height) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.setAttribute('width', `${width}px`);
    canvas.setAttribute('height', `${height}px`);

    ctx.font =
        '20px -apple-system, BlinkMacSystemFont, "SF Pro SC", "SF Pro Text", "Helvetica Neue", Helvetica, "PingFang SC", "Segoe UI", Roboto, "Hiragino Sans GB", "Arial", "microsoft yahei ui", "Microsoft YaHei", SimSun, sans-serif';
    ctx.fillStyle = 'rgba(0,0,0,0.1)'; // 颜色、透明度
    ctx.translate(width / 2, height / 2);
    ctx.rotate(-Math.PI / 9);
    ctx.fillText(text, 0, 0);

    return canvas.toDataURL();
}

export default {
    computed: {
        waterStyle() {
            // 如果没获取到用户名
            // if (!this.$store.state.userName) {
            //     return '';
            // }
            // 如果有用户名，生成背景图&样式
            const img = getBase64('刘德华', 300, 200);
            return [
                //
                `background-image:url(${img})`,
                `background-repeat: repeat`
            ].join(';');
        }
    }
};
</script>

<style lang="less" scoped>
.water-mark {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    pointer-events: none;
}
</style>
