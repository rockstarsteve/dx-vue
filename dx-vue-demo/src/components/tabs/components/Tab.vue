<template>
    <div
            v-show="isSelected"
            class="tab__pane"
    >
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'tab',
        props: {
            title: String,
        },
        data() {
            return {
                parent: null,
            };
        },
        computed: {
            index() {
                return this.parent.tabs.indexOf(this);
            },
            isSelected() {
                return this.index === this.parent.curActive;
            },
        },
        watch: {
            title() {
                this.parent.setLine();
            }
        },
        methods: {
            findParent(name) {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.name === name) {
                        this.parent = parent;
                        break;
                    }
                    parent = parent.$parent; // 多层嵌套
                }
            },
        },
        created() {
            this.findParent('tabs');
        },
        mounted() {
            const { tabs } = this.parent;
            const index = this.parent.$slots.default.indexOf(this.$vnode);
            tabs.splice(index === -1 ? tabs.length : index, 0, this);
        },
        beforeDestroy() {
            this.parent.tabs.splice(this.index, 1);
        },
    };
</script>

<style>
    .tab__pane {
    }
</style>
