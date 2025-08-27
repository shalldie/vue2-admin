<template>
    <div class="step-page">
        <el-steps :active="step" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
        <div v-if="step === 0" class="step step0" key="0">
            <h4>第{{ step + 1 }}步</h4>
            <div>
                <el-button @click="fetchInfo">保存并生成id</el-button>
            </div>
        </div>
        <div v-if="step === 1" class="step step1" key="1">
            <h4>第{{ step + 1 }}步</h4>
            <textarea name="" id=""></textarea>
        </div>
        <div v-if="step === 2" class="step step2" key="2">
            <h4>第{{ step + 1 }}步</h4>
            <textarea name="" id=""></textarea>
        </div>
        <div class="ctl-bar">
            <el-button @click="step--">上一步</el-button>
            <el-button @click="step++">下一步</el-button>
        </div>
    </div>
</template>

<script>
import { sleep } from '@/common/utils';

export default {
    name: 'step',
    data() {
        return {
            id: this.$route.query.id,
            step: 0
        };
    },
    methods: {
        async fetchInfo() {
            await sleep(200);
            this.id = Math.random();
            await this.syncQuery();
            this.step++;
        },
        async syncQuery() {
            if (this.$route.query.id !== this.id) {
                await this.$router.replace({
                    query: { id: this.id }
                });
            }
        }
    },
    activated() {
        this.syncQuery();
    }
};
</script>

<style lang="less">
.step-page {
    display: flex;
    flex-direction: column;
    height: 100%;

    .step {
        flex: 1;
        min-height: 0;
    }

    .ctl-bar {
    }
}
</style>
