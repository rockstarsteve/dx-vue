<template>

  <pdf :src="pdfUlr"></pdf>

</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    name: "showPdf",
    components: {
      pdf
    },
    data(){
      return{
        pdfUlr: './static/pdf/道德经.pdf'
      }
    }
  }
</script>

<style scoped>

</style>
