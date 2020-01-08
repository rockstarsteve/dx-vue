<template>
    <div class="app-container">
        <div style="margin-bottom: 30px">
            <el-table
                    :data="tableData"
                    border
                    style="width: 900%">
                <el-table-column
                        prop="code"
                        label="编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="count"
                        label="个数">
                </el-table-column>
                <el-table-column
                        prop="salPrice"
                        label="售价">
                </el-table-column>
                <el-table-column
                        prop="actualPrice"
                        label="实售价">
                </el-table-column>
                <el-table-column
                        prop="orderPrice"
                        label="开单价">
                </el-table-column>
            </el-table>
            <el-button @click="kaidang">开单</el-button>
        </div>

        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button
                        type="primary"
                        icon="el-icon-plus"
                        size="mini"
                        @click="handleAdd"
                >新增
                </el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button
                        type="success"
                        icon="el-icon-edit"
                        size="mini"
                        :disabled="single"
                        @click="handleUpdate"
                >修改
                </el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button
                        type="danger"
                        icon="el-icon-delete"
                        size="mini"
                        :disabled="multiple"
                        @click="handleDelete"
                >删除
                </el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button
                        type="warning"
                        icon="el-icon-download"
                        size="mini"
                        @click="handleExport"
                >导出
                </el-button>
            </el-col>
            <el-col :span="1.5">
                <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
                    <el-form-item label="编码" prop="code">
                        <el-input
                                v-model="queryParams.code"
                                placeholder="请输入编码"
                                clearable
                                size="small"
                                @keyup.enter.native="handleQuery"
                        />
                    </el-form-item>
                    <el-form-item label="名称" prop="name">
                        <el-input
                                v-model="queryParams.name"
                                placeholder="请输入名称"
                                clearable
                                size="small"
                                @keyup.enter.native="handleQuery"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
                        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

        <el-table v-loading="loading" :data="goodsList" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" align="center"/>
            <el-table-column label="编码" align="center" prop="code"/>
            <el-table-column label="名称" align="center" prop="name"/>
            <el-table-column label="规格" align="center" prop="specifications"/>
            <el-table-column label="分类码" align="center" prop="classCode"/>
            <el-table-column label="数量" align="center" prop="count"/>
            <el-table-column label="单位" align="center" prop="unit"/>
            <el-table-column label="销售价" align="center" prop="salPrice"/>
            <el-table-column label="仓位" align="center" prop="warehouse"/>
            <el-table-column label="备注" align="center" prop="remark"/>
            <el-table-column label="操作" align="center" class-name="small-padding fixed-width" width="180">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="text"
                            icon="el-icon-edit"
                            @click="handleUpdate(scope.row)"
                    >修改
                    </el-button>
                    <el-button
                            size="mini"
                            type="text"
                            icon="el-icon-delete"
                            @click="handleDelete(scope.row)"
                    >删除
                    </el-button>
                    <el-button
                            size="mini"
                            type="text"
                            icon="el-icon-edit"
                            @click="handleWareHouse(scope.row)"
                    >出库
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <pagination
                v-show="total>0"
                :total="total"
                :page.sync="queryParams.pageNum"
                :limit.sync="queryParams.pageSize"
                @pagination="getList"
        />

        <!-- 添加或修改库存货物对话框 -->
        <el-dialog :title="title" :visible.sync="open" width="500px">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="编码" prop="code">
                    <el-input v-model="form.code" placeholder="请输入编码"/>
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input v-model="form.name" placeholder="请输入名称"/>
                </el-form-item>
                <el-form-item label="规格" prop="specifications">
                    <el-input v-model="form.specifications" placeholder="请输入规格"/>
                </el-form-item>
                <el-form-item label="分类码" prop="classCode">
                    <el-input v-model="form.classCode" placeholder="请输入分类码"/>
                </el-form-item>
                <el-form-item label="数量" prop="count">
                    <el-input v-model="form.count" placeholder="请输入数量"/>
                </el-form-item>
                <el-form-item label="单位" prop="unit">
                    <el-input v-model="form.unit" placeholder="请输入单位"/>
                </el-form-item>
                <el-form-item label="销售价" prop="salPrice">
                    <el-input v-model="form.salPrice" placeholder="请输入销售价"/>
                </el-form-item>
                <el-form-item label="仓位" prop="warehouse">
                    <el-input v-model="form.warehouse" placeholder="请输入仓位"/>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm">确 定</el-button>
                <el-button @click="cancel">取 消</el-button>
            </div>
        </el-dialog>


        <!--出库货物-->
        <el-dialog :title="title" :visible.sync="open2" width="500px">
            <el-form ref="chuhuo" :model="chuhuoform" :rules="rules" label-width="80px">
                <el-form-item label="编码" prop="id" hidden>
                    <el-input v-model="chuhuoform.id" placeholder="id"/>
                </el-form-item>
                <el-form-item label="编码" prop="code">
                    <el-input v-model="chuhuoform.code" placeholder="请输入编码"/>
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input v-model="chuhuoform.name" placeholder="请输入名称"/>
                </el-form-item>
                <el-form-item label="数量" prop="count">
                    <el-input-number v-model="chuhuoform.count" controls-position="right" :min="1"></el-input-number>
                    <!--          <el-input v-model="chuhuoform.count" placeholder="请输入数量" />-->
                </el-form-item>
                <el-form-item label="销售价" prop="salPrice">
                    <el-input v-model="chuhuoform.salPrice" placeholder="请输入销售价"/>
                </el-form-item>
                <el-form-item label="实售价" prop="actualPrice">
                    <el-input v-model="chuhuoform.actualPrice" placeholder="请输入实售价"/>
                </el-form-item>
                <el-form-item label="开单价" prop="orderPrice">
                    <el-input v-model="chuhuoform.orderPrice" placeholder="请输入开单价"/>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm2">确 定</el-button>
                <el-button @click="cancel2">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    // import { listGoods, getGoods, delGoods, addGoods, updateGoods, exportGoods, getOrder} from '@/api/erp/goods'
    // eslint-disable-next-line no-unused-vars
    import axios from 'axios'

    export default {
      data () {
        return {

          // table里面的数据
          tableData: [],
          // 遮罩层
          loading: true,
          // 选中数组
          ids: [],
          // 非单个禁用
          single: true,
          // 非多个禁用
          multiple: true,
          // 总条数
          total: 0,
          // 库存货物表格数据
          goodsList: [],
          // 弹出层标题
          title: '',
          // 是否显示弹出层
          open: false,
          // 是否显示弹出层2
          open2: false,
          // 查询参数
          queryParams: {
            pageNum: 1,
            pageSize: 10,
            code: undefined,
            name: undefined,
            specifications: undefined,
            classCode: undefined,
            count: undefined,
            unit: undefined,
            salPrice: undefined,
            warehouse: undefined
          },
          // 表单参数
          form: {},
          // 出货参数
          chuhuoform: {},
          // 表单校验
          rules: {
            code: [
              {required: true, message: '编码不能为空', trigger: 'blur'}
            ],
            name: [
              {required: true, message: '名称不能为空', trigger: 'blur'}
            ],
            count: [
              {required: true, message: '数量不能为空', trigger: 'blur'}
            ],
            salPrice: [
              {required: true, message: '销售价不能为空', trigger: 'blur'}
            ],
            warehouse: [
              {required: true, message: '仓位不能为空', trigger: 'blur'}
            ],
            remark: [
              {required: true, message: '备注不能为空', trigger: 'blur'}
            ]
          }
        }
      },
      created () {
        this.getList()
      },
      methods: {
        /** 查询库存货物列表 */
        getList () {
          this.loading = true
          this.$get('/erp/goods/list', this.queryParams).then(response => {
            // listGoods(this.queryParams).then(response => {
            response = response.data
            this.goodsList = response.rows
            this.total = response.total
            this.loading = false
          })
        },
        // 取消按钮
        cancel () {
          this.open = false
          this.reset()
        },
        // 取消按钮
        cancel2 () {
          this.open2 = false
          this.reset2()
        },
        // 表单重置
        reset () {
          this.form = {
            id: undefined,
            code: undefined,
            name: undefined,
            specifications: undefined,
            classCode: undefined,
            count: undefined,
            unit: undefined,
            salPrice: undefined,
            warehouse: undefined,
            remark: undefined
          }
          this.resetForm('form')
        },
        // 表单chuhuo重置
        reset2 () {
          this.chuhuoform = {
            id: undefined,
            code: undefined,
            name: undefined,
            count: 1,
            total: undefined,
            salPrice: undefined,
            actualPrice: undefined,
            orderPrice: undefined
          }
          this.resetForm('chuhuo')
        },
        /** 搜索按钮操作 */
        handleQuery () {
          this.queryParams.pageNum = 1
          this.getList()
        },
        /** 重置按钮操作 */
        resetQuery () {
          this.resetForm('queryForm')
          this.handleQuery()
        },
        // 多选框选中数据
        handleSelectionChange (selection) {
          this.ids = selection.map(item => item.id)
          // eslint-disable-next-line eqeqeq
          this.single = selection.length != 1
          this.multiple = !selection.length
        },
        /** 新增按钮操作 */
        handleAdd () {
          this.reset()
          this.open = true
          this.title = '添加库存货物'
        },
        /** 修改按钮操作 */
        handleUpdate (row) {
          this.reset()
          const id = row.id || this.ids
          this.$get('/erp/goods/', id).then(response => {
            // getGoods(id).then(response => {
            response = response.data
            this.form = response.data
            this.open = true
            this.title = '修改库存货物'
          })
        },
        /** 提交按钮 */
        submitForm: function () {
          this.$refs['form'].validate(valid => {
            if (valid) {
              // eslint-disable-next-line eqeqeq
              if (this.form.id != undefined) {
                // updateGoods(this.form).then(response => {
                axios.put({url: '/erp/goods', data: this.form}).then(response => {
                  response = response.data
                  if (response.code === 200) {
                    this.msgSuccess('修改成功')
                    this.open = false
                    this.getList()
                  } else {
                    this.msgError(response.msg)
                  }
                })
              } else {
                // addGoods(this.form).then(response => {
                this.$post('/erp/goods', this.form).then(response => {
                  response = response.data
                  if (response.code === 200) {
                    this.msgSuccess('新增成功')
                    this.open = false
                    this.getList()
                  } else {
                    this.msgError(response.msg)
                  }
                })
              }
            }
          })
        },
        /** 出货确认按钮 */
        submitForm2: function () {
          console.log('准备出货！！')
          let id = this.chuhuoform.id
          for (let i = 0; i < this.tableData.length; i++) {
            // eslint-disable-next-line eqeqeq
            if (this.tableData[i].id == id) {
              if (this.tableData[i].count + this.chuhuoform.count > this.chuhuoform.total) {
                this.$message.error('没有足够的数量出库！')
              } else {
                this.tableData[i].count = this.tableData[i].count + this.chuhuoform.count
              }
              this.open2 = false
              return
            }
          }
          if (this.chuhuoform.count > this.chuhuoform.total) {
            this.$message.error('没有足够的数量出库！')
            return
          }
          // 这里诡异
          this.tableData.push({
            id: this.chuhuoform.id,
            code: this.chuhuoform.code,
            name: this.chuhuoform.name,
            count: this.chuhuoform.count,
            salPrice: this.chuhuoform.salPrice,
            actualPrice: this.chuhuoform.actualPrice,
            orderPrice: this.chuhuoform.orderPrice
          })
          this.reset2()
          this.open2 = false
        },
        /** 删除按钮操作 */
        handleDelete (row) {
          const ids = row.id || this.ids
          this.$confirm('是否确认删除库存货物编号为"' + ids + '"的数据项?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(function () {
            // return delGoods(ids)
            return axios.delete({url: '/erp/goods/', data: ids})
          }).then(() => {
            this.getList()
            this.msgSuccess('删除成功')
          }).catch(function () {
          })
        },
        /** 导出按钮操作 */
        handleExport () {
          const queryParams = this.queryParams
          this.$confirm('是否确认导出所有库存货物数据项?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(function () {
            // return exportGoods(queryParams)
            return this.$get('/erp/goods/export', queryParams)
          }).then(response => {
            response = response.data
            this.download(response.msg)
          }).catch(function () {
          })
        },
        // 处理库存
        handleWareHouse (row) {
          if (row.count < 1) {
            this.$message.error('数量为0，无法出库！')
            return
          }
          this.reset2()
          this.open2 = true
          this.chuhuoform.id = row.id
          this.chuhuoform.code = row.code
          this.chuhuoform.name = row.name
          this.chuhuoform.salPrice = row.salPrice
          this.chuhuoform.total = row.count
          this.title = '出库'
        },

        /**
             * 开单
             */
        kaidang () {
          if (this.tableData.length < 1) {
            this.$message.error('没有需要开单的数据！')
          }

          // getOrder(this.tableData).then(response => {
          this.$post('/erp/goods/', this.tableData).then(response => {
            response = response.data
            this.tableData = []
            if (response.code === 200) {
              this.msgSuccess('修改成功')
              this.open = false
              this.getList()
            } else {
              this.msgError(response.msg)
            }
          })
        }

      }
    }
</script>
