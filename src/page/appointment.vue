<template>
    <div class="app-box">
        <head-top></head-top>
        <el-card class="box-card">
            <el-form ref="form" style="width: 30%;" :model="form" label-width="80px">
                <el-form-item label="用户名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="报名区间">
                    <el-select v-model="form.region" placeholder="请选择报名区间">
                        <el-option label="上午" value="shanghai"></el-option>
                        <el-option label="下午" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="form.region" placeholder="请选择状态">
                        <el-option label="待审核" value="shanghai"></el-option>
                        <el-option label="已通过" value="beijing"></el-option>
                        <el-option label="已拒绝" value="beijing"></el-option>
                    </el-select>
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
                    align="center"
                    label="姓名">
                </el-table-column>
                <el-table-column
                    prop="age"
                    align="center"
                    label="年龄">
                </el-table-column>
                <el-table-column
                    prop="time"
                    align="center"
                    label="入城时间">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态"
                    align="center"
                    width="200">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.status === 0">待审核</el-tag>
                        <el-tag type="success" v-if="scope.row.status === 1">已通过</el-tag>
                        <el-tag type="danger" v-if="scope.row.status === 2">已拒绝</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="create_time"
                    label="创建时间"
                    align="center"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="reason"
                    label="拒绝原因"
                    width="400">
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center"
                    width="200">
                    <template slot-scope="scope">
                        <el-button
                            v-if="scope.row.status === 0"
                            size="mini"
                            @click="pass(scope.$index, scope.row)">通过
                        </el-button>
                        <el-button
                            v-if="scope.row.status === 0"
                            size="mini"
                            type="danger"
                            @click="refuse(scope.$index, scope.row)">拒绝
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
                age: '18',
                time:'上午',
                status:0,
                create_time:'2023-4-27 08:00:00',
                reason:''
            }, {
                id: 2,
                name: '王小虎',
                age: '18',
                time:'上午',
                status:1,
                create_time:'2023-4-27 08:00:00',
                reason:''
            }, {
                id: 3,
                name: '王小虎',
                age: '18',
                time:'上午',
                status:1,
                create_time:'2023-4-27 08:00:00',
                reason:''
            }, {
                id: 4,
                name: '王小虎',
                age: '18',
                time:'上午',
                status:1,
                create_time:'2023-4-27 08:00:00',
                reason:''
            }, {
                id: 5,
                name: '王小虎',
                age: '18',
                time:'上午',
                status:1,
                create_time:'2023-4-27 08:00:00',
                reason:''
            }, {
                id: 6,
                name: '王小虎',
                age: '18',
                time:'上午',
                status:2,
                create_time:'2023-4-27 08:00:00',
                reason:'不符合规则'
            }, {
                id: 7,
                name: '王小虎',
                age: '18',
                time:'上午',
                status:2,
                create_time:'2023-4-27 08:00:00',
                reason:'邮箱错误'
            }, {
                id: 8,
                name: '王小虎',
                age: '18',
                time:'上午',
                status:0,
                create_time:'2023-4-27 08:00:00',
                reason:''
            }, {
                id: 9,
                name: '王小虎',
                age: '18',
                time:'上午',
                status:0,
                create_time:'2023-4-27 08:00:00',
                reason:''
            }, {
                id: 10,
                name: '王小虎',
                age: '18',
                time:'上午',
                status:0,
                create_time:'2023-4-27 08:00:00',
                reason:''
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
        pass () {},
        refuse () {}
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
</style>
