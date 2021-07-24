<template>
  <div class="row add-product">
    <div class="col-sm-0 col-md-3 col-12 container-left">
      <Category />
    </div>

    <div class="col-sm-12 col-md-9 col-12">
      <p style="color: #0d6efd">Add new Collection</p>
      <p>Product > Collection</p>
      <div class="row product-striped">
        <div class="col-1">ID</div>
        <div class="col-3">Name</div>
         <div class="col-1"></div>
         <div class="col-2"></div>
      </div>
      <div
        v-for="item in collectionList"
        :key="item.id"
        class="row collection-content"
      >
        <div class="col-1">{{ item.id }}</div>
        <div class="col-3 product-name">{{ item.name }}</div>
        <div class="col-1"><i class="bi bi-pencil"></i></div>
        <div class="col-2"><i @click="deleteProductById(item.id)" class="bi bi-trash"></i></div>
        
      </div>
      

      <form method="" class="product-form">
        <div class="">
          <label for="exampleFormControlInput1" class="form-label"
            >Collection</label
          >
          <input type="email" class="form-control" id="collection" />
        </div>

        <button @click="onSubmit" type="button" class="btn btn-outline-success">
          Add
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Category from "@/admin/product/category.vue";
export default {
  name: "CategoryAdd",
  components: {
    Category,
  },
  data() {
    return {
      collectionList: [],
    };
  },

  async created() {
    try {
      let response = await axios.get("http://localhost:3000/collections");

      console.log(this.collectionList);
      console.log(response["data"]["data"]);
      this.collectionList = response["data"]["data"];
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    deleteProductById(id){
        confirm("Do you want to delete this product?")
        axios.delete("http://localhost:3000/collections/"+String(id));
        alert("successful delete")
        location.reload();
    },
    bindData(data) {
      this.collectionList = data;
    },
    onSubmit() {
      let collection = document.querySelector("#collection")["value"];
      axios
        .put("http://localhost:3000/collections", {
          name: collection,
          // image: this.FILE
        })
        .then((res) => {
          console.log(res);
        });

      alert("added to cart");
      location.reload();
    },
  },
};
</script>
<style scoped>
div {
  color: black;
}
div i{
    
    color: black;
}
i:hover{
    cursor: pointer;
}
.collection-content{
    font-weight: 300;
}
.edit i:hover{
    cursor: pointer;
}
.add-product {
  margin: 0 !important;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px !important;
  bottom: 0px;
  z-index: 100;
  background-color: white;
}

/* .product-form {

        background-color: white;
        height: 100vh;
        width: 100vw;
        margin: 0px;
        margin-top: 20px;
    } */
</style>