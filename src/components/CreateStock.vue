<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Product in Stock</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>ID</label>
                                    <input type="text" class="form-control" v-model="product. product_id">
                                </div>
                            </div>
            
                             <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Quantiy</label>
                                    <input type="number"  min=0 class="form-control" v-model="product.quantity">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"create-order",
    data(){
        return {


            product:{
                product_id:this.$route.params.id,
                quantity:"",
               
            }
        }
    },
    methods:{
        async create(){
            try {

            await axios.post('http://127.0.0.1:8000/api/stock/create',this.product)

             this.$router.push({name:"stock"})
                
            } catch (error) {
                console.log(error)
                
            }

            
        }
    }
}
</script>