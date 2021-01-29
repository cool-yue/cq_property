<template>
<div class="table-plus">
    <div class="table-plus__toolbar">
        <slot :modal="modal1"></slot>
    </div>
    <div>
        <Table border :columns="tableColumns" :data="tableData">
            <template v-slot:action="{row, column, index}" v-if="canModify">
                <a class="asset-catagory__update" @click="handleModify(row)">编辑</a>
                <a class="asset-catagory__delete" @click="handleDelete(row)">删除</a>
            </template>
        </Table>
        <Page :total="dataTotal" style="float:right;margin-top:2rem;"></Page>
    </div>
    <Modal
        v-if="canModify"
        v-model="modal1"
        :title="modalTitle"
        :width="modalWidth"
        @on-ok="ok"
        @on-cancel="cancel"
    >
        <slot name="modal" :item="item"></slot>
    </Modal>
    <Modal
        v-if="canModify"
        v-model="modal2",
        title="删除"
        @on-cancel="cancel"
    >
       <div>{{deleteText}}</div>
       <template v-slot:footer>
           <Button @click="del(false)">取消</Button>
           <Button type="error" @click="del">删除</Button>
       </template>
    </Modal>
</div>
</template>

<script>
export default {
  name: "table-plus",
  data() {
      return {
          item: {}
      };
  },
  props: {
      canModify: {
          type: Boolean,
          default: true
      },
      tableColumns: {
          type: Array,
          default: () => {return [];},
          required: true
      },
      tableData: {
          type: Array,
          default: () => {return [];},
          required: true
      },
      dataTotal: {
          type: Number,
          default: 0
      },
      modalTitle: {
          type: String
      },
      modalWidth: {
          type: Number
      },
      deleteText: {
          type: String,
          default: "确认删除么?"
      }
  },
  methods: {
      del(isDelete = true) {
          if (isDelete) {
            this.$emit("deleteItem", this.item);
          }
          this.modal2 = false;
          this.item = {};
      },
      ok() {
          this.$emit("modifyItem", this.item);
           this.item = {};
      },
      cancel() {
          this.item = {};
      },
      handleModify(row) {
          this.item = row;
          this.modal1 = true;
      },
      handleDelete(row) {
          this.item = row;
          this.modal2 = true;
      }
  }
}
</script>

<style>
</style>