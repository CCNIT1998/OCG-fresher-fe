<template>
  <div class="card" style="width: 18rem;">
    <div class="card-product">
      <img src="https://cf.shopee.vn/file/f4e3e6dd332e562a176a23a92a3ec6d0" class="card-img-top" alt="loi" />
    </div>
    <div class="card-body text-start">
      <h6 class="card-title">Card title</h6>
      <p class="card-text">
     $255
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductWrap',
  props: ['src'],
};
</script>
<style scoped>
.card{
    background-color:transparent
}
.card-body{
    padding:1rem 0rem
}
.card-product::before {
    content: '';
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.2);
    transition: all .2s ease-in;
    z-index: 1;
}
.card-product:hover:before{
    visibility: visible;
    opacity: 1;
}
</style>
