<template>
  <div class="row add-product">
    <div class="col-sm-0 col-md-3 col-12 container-left">
      <Category />
    </div>

    <div class="col-sm-12 col-md-9 col-12">
      <p style="color: #0d6efd">Add new Product</p>
      <p>Product > Category</p>
      <form method="" class="product-form" @submit.prevent="onSubmit">
        <div class="">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name product"
            v-model="name"
          />
        </div>

        <div class="">
          <label for="exampleFormControlInput1" class="form-label"
            >Trade Mark</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder=""
            v-model="trade_mark"
          />
        </div>

        <div class="">
          <label for="exampleFormControlInput1" class="form-label">Price</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder=""
            v-model="price"
          />
        </div>

        <!-- images -->
        <div class="">
          <label for="formFileSm" class="form-label">Images</label>
          <input
            class="form-control form-control-sm"
            id="formFileSm"
            type="file"
            @change="onFileUpload"
          />
        </div>

        <label for="exampleDataList" class="form-label">Category</label>
        <input
          class="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type Category..."
        />
        <datalist id="datalistOptions">
          <option value="Loa"></option>
          <option value="Tai nghe"></option>
          <option value="Sạc"></option></datalist
        ><br />

        <div class="">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Description</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="description"
          ></textarea>
        </div>

        <button @click="onSubmit" type="button" class="btn btn-outline-success">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import Category from "@/admin/product/category.vue";
import axios from "axios";
export default {
  name: "ProductAdd",
  components: {
    Category,
  },
  data() {
    return {
      name: "",
      description: "",
      price: "",
      category_id: "",
      trade_mark: "",
      image: null,
    };
  },

  methods: {
    onFileUpload(event) {
      this.FILE = event.target.files[0];
      return this.FILE;
    },
    onSubmit() {
      // upload file
      axios.post("http://localhost:3000/products", {
          name: this.name,
          description: this.description,
          price: this.price,
          category_id: "1",
          trade_mark: this.trade_mark,
          // image: this.FILE
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
<style scoped>
.add-product {
  margin: 0 !important;
  position: absolute;
  height: 200%;
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