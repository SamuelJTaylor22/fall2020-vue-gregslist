<template>
  <main id="houses" class="container-fluid">
    <div class="row my-3">
      <div class="col" >
                <form @submit.prevent="createHouse" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="bedrooms">Bedrooms</label>
                        <input v-model="newHouse.bedrooms" type="text" name="bedrooms" id="bedrooms" class="form-control" placeholder="Bedrooms...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="bathrooms">Bathrooms</label>
                        <input v-model="newHouse.bathrooms" type="text" name="bathrooms" id="bathrooms" class="form-control" placeholder="Bathrooms...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="levels">Floors</label>
                        <input v-model="newHouse.levels" type="number" name="levels" id="levels" class="form-control" placeholder="Floors...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="year">Year</label>
                        <input v-model="newHouse.year" type="number" name="year" id="year" class="form-control" placeholder="Year..." min="1400"
                            max="2021">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="price">Price</label>
                        <input v-model="newHouse.price" type="number" name="price" id="price" class="form-control" placeholder="Price...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="description">Description</label>
                        <input v-model="newHouse.description" type="text" name="description" id="description" class="form-control"
                            placeholder="Description...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="img">Image Url</label>
                        <input v-model="newHouse.imgUrl" type="url" name="img" id="img" class="form-control" placeholder="Image Url...">
                    </div>
                    <button type="submit" class="btn btn-outline-success">Add House</button>
                </form>
            </div>
    </div>
    <div class="row" id="data">
      <house v-for="house in houses" :key="house._id" :houseData="house" />
    </div>
  </main>
</template>

<script>
import House from "../components/House.vue"
export default {
  name: "Houses",
  mounted() {
    this.$store.dispatch('getAllHouses')
  },
  data() {
    return {
      newHouse: {}
    }
  },
  computed: {
    houses() {
      return this.$store.state.houses
    }
  },
  methods: {
    createHouse() {
      this.$store.dispatch("createHouse", this.newHouse)
      // PROTIP the object retains reference so we cant just reset it we will need to reset the form instead
      for (let key in this.newHouse) {
        this.newHouse[key] = null
      }

    }
  },
  components: {
    House
  }
}
</script>

<style>
</style>