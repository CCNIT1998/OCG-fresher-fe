<template>
  <div class="container">
    <div class="">
      <router-link to="/">
        <button type="button" class="btn btn-outline-primary cart-home">
          Home
        </button>
      </router-link>
      <ul class="products">
        <div class="row">
          <div class="col text-left" style="width: 60px; height: 60px">Image</div>
          <div class="col ">Name</div>
          <div class="col ">Quantity</div>
          <div class="col ">Price</div>
          <div class="col"></div>
        </div>

        <div class="row product-detail">
          <div class="col text-left" style="width: 60px; height: 60px">
            <img src="https://via.placeholder.com/60x60" alt="">
          </div>
          <div class="col n">Product 1</div>
          <div class="col n">2</div>
          <div class="col n">150</div>
          <div class="col delete-product n">
            <i class="bi bi-x text-right"></i>
          </div>
        </div>

        <div class="row product-detail">
          <div class="col text-left" style="width: 60px; height: 60px">
            <img src="https://via.placeholder.com/60x60" alt="">
          </div>
          <div class="col">Product 2</div>
          <div class="col">1</div>
          <div class="col">250</div>
          <div class="col delete-product">
            <i class="bi bi-x text-right"></i>
          </div>
        </div>

        <li class="row" v-for="product in $store?.state.cart" :key="product.ID">
          <div class="col left">
            <div class="thumbnail">
              <a href="#"
                ><img
                  :src="`http://127.0.0.1:3000/${product.Image}`"
                  style="width: 60px; height: 60px"
              /></a>
            </div>
            <div class="detail">
              <div class="name">
                <a href="">{{ product.Name }}</a>
              </div>
              <div class="price">{{ formatter(product.PriceCurrent) }}</div>
            </div>
          </div>
          <div class="col right">
            <div class="quantity">
              <input
                type="number"
                class="quantity"
                v-model="product.quantity"
                placeholder="1"
              />
            </div>
            <div class="remove">
              <i @click="removeItem(index)" class="close far fa-trash-alt"></i>
            </div>
          </div>
        </li>
      </ul>

    </div>

    <div class="row">
      <div class="col-10">
        <div class="row">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2"><i class="bi bi-arrow-right-circle"></i></span>
          </div>

          <div class="row">
            <button type="button" class="btn btn-outline-primary checkout">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="row">
          <div class="col-6">subTotal:</div>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col-6">Discount:</div>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col-6">Tax:</div>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col-6">Total:</div>
          <div class="col-6"></div>
        </div>
      </div>
    </div>

    <ProductSale />
  </div>
</template>
<script>
import ProductSale from "@/pages/product/productSale.vue";
export default {
  name: "Cart",
  components:{
    ProductSale,
  },
};
</script>

<style scoped>
#basic-addon2{
  cursor: pointer;
}
.products{
  border: 1px solid #e5e7e8;
}

.product-detail{
  border-top: 1px solid #e5e7e8;
  line-height: 60px;
  margin-bottom: 5px;
}



.delete-product{
  cursor: pointer;
  position: relative;
}

.delete-product i{
  position: absolute;
  right: 30px;
  font-size: 30px;
}
.cart-home{
  margin: 10px 0px;
}
.checkout {
  width: auto;
  margin-left: 12px;
}
</style>