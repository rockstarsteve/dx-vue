<template>
  <div class="content">
    <pdf :src="pdfUlr" class="pdf"></pdf>
  </div>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    name: "showPdf",
    components: {
      pdf
    },
    data() {
      return {
        pdfUlr: './static/pdf/道德经.pdf'
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 900px;
    height: 900px;
    background-color: pink;
    display: flex;
    justify-content: center;
  }

  .pdf {
    width: 600px;
    height: 600px;
    overflow-y: scroll;
  }

</style>
