<template>
    <div class="hello">

        <hr/>
        复选框
        <div id='example-3'>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames }}</span>
        </div>
        <hr/>
        单选按钮
        <div id="example-4">
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <br>
            <span>Picked: {{ picked }}</span>
        </div>
        <hr/>
        选择框
        单选时：
        <div id="example-5">
            <select v-model="selected">
                <option value="null">请选择</option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>
        多选时 (绑定到一个数组)：
        <div id="example-6">
            <select v-model="selected2" multiple style="width: 50px;">
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <br>
            <span>Selected2: {{ selected2 }}</span>
        </div>

    </div>
</template>

<script>
    /**
     * 表单输入绑定
     */
    export default {
        name: 'HelloYuFa2',
        data: function() {
            return {
                num: 1,
                checkedNames: [],
                picked: '',
                selected: '',
                selected2: []
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
