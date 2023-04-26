<template>
    <div class="app-box">
        <head-top></head-top>
        <el-card class="box-card">
            <el-form ref="form" style="width: 30%;" :model="form" label-width="80px">
                <el-form-item label="标题">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="作者">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">搜索</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
            <el-table
                :data="tableData"
                border
            >
                <el-table-column
                    prop="id"
                    label="id"
                    align="center"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="作者"
                    align="center"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="标题"
                    width="300">
                </el-table-column>
                <el-table-column
                    prop="browse_num"
                    label="浏览量"
                    align="center"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="create_time"
                    label="创建时间"
                    align="center"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="desc"
                    label="内容">
                    <template slot-scope="scope">
                        <div class="text-desc">{{ scope.row.desc }}</div>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center"
                    width="200">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="pass(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
            <div class="page-box">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    current-page.sync="1"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>
import headTop from '../components/headTop'

export default {
    data() {
        return {
            form: {},
            tableData: [{
                id: 1,
                name: '王小虎',
                title: 'love song',
                browse_num: 1000,
                create_time: '2023-4-27 08:00:00',
                desc: '### 我写了一首歌，是一首简单的不复杂也不难唱的哪一种歌，这不是那种只剩下钢琴的歌### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送### 测试一下数据能否传送'
            }, {
                id: 2,
                name: '王小虎',
                age: '18',
                time: '上午',
                status: 1,
                create_time: '2023-4-27 08:00:00',
                reason: ''
            }, {
                id: 3,
                name: '王小虎',
                age: '18',
                time: '上午',
                status: 1,
                create_time: '2023-4-27 08:00:00',
                reason: ''
            }, {
                id: 4,
                name: '王小虎',
                age: '18',
                time: '上午',
                status: 1,
                create_time: '2023-4-27 08:00:00',
                reason: ''
            }, {
                id: 5,
                name: '王小虎',
                age: '18',
                time: '上午',
                status: 1,
                create_time: '2023-4-27 08:00:00',
                reason: ''
            }, {
                id: 6,
                name: '王小虎',
                age: '18',
                time: '上午',
                status: 2,
                create_time: '2023-4-27 08:00:00',
                reason: '不符合规则'
            }, {
                id: 7,
                name: '王小虎',
                age: '18',
                time: '上午',
                status: 2,
                create_time: '2023-4-27 08:00:00',
                reason: '邮箱错误'
            }, {
                id: 8,
                name: '王小虎',
                age: '18',
                time: '上午',
                status: 0,
                create_time: '2023-4-27 08:00:00',
                reason: ''
            }, {
                id: 9,
                name: '王小虎',
                age: '18',
                time: '上午',
                status: 0,
                create_time: '2023-4-27 08:00:00',
                reason: ''
            }, {
                id: 10,
                name: '王小虎',
                age: '18',
                time: '上午',
                status: 0,
                create_time: '2023-4-27 08:00:00',
                reason: ''
            }]
        }
    },
    components: {
        headTop,
    },
    mounted() {
    },
    methods: {
        search() {
        },
        handleSizeChange() {
        },
        handleCurrentChange() {
        },
        pass() {
        },
        refuse() {
        }
    }
}
</script>

<style lang="less">
@import '../style/mixin';


.wan {
    .sc(16px, #333)
}

.app-box {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.box-card {
    flex: 1;
    margin: 10px;
}

.page-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.text-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
