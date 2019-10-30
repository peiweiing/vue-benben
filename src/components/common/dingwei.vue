<template>
    <div>
        <van-button type="primary">
            <!-- <van-tree-select items="{{ items }}" main-active-index="{{ mainActiveIndex }}" active-id="{{ activeId }}" bind:click-nav="onClickNav" bind:click-item="onClickItem"/> -->
        </van-button>
        <div>123dingwei</div>
    </div>
</template>
<script>
export default {
    data: {
        mainActiveIndex: 0,
        activeId: null
    },

    onClickNav({ detail = {} }) {
        this.setData({
        mainActiveIndex: detail.index || 0
        });
    },

    onClickItem({ detail = {} }) {
        const activeId = this.data.activeId === detail.id ? null : detail.id;

        this.setData({ activeId });
    }

}
</script>
<style scoped>

</style>