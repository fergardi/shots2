<template lang="pug">
  v-map.world(:zoom="map.zoom", :center="map.center", :min-zoom="map.min", :max-zoom="map.max", ref="map")
    v-tilelayer(:url="map.url")
    v-group(v-for="layer, index1 in layers", v-if="layer.checked", :key="index1")
      v-marker(v-for="item, index2 in layer.items", :lat-lng="item.coordinates", :key="index2")
</template>

<script>
  import Vue2Leaflet from 'vue2-leaflet'

  export default {
    name: 'world',
    components: {
      'v-map': Vue2Leaflet.Map,
      'v-tilelayer': Vue2Leaflet.TileLayer,
      'v-marker': Vue2Leaflet.Marker,
      'v-group': Vue2Leaflet.LayerGroup
    },
    data () {
      return {
        map: {
          zoom: 5,
          center: [0, 0],
          min: 0,
          max: 20,
          url: 'http://d.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
        },
        layers: [
          {
            name: 'layer',
            checked: true,
            markers: [
              {
                coordinates: [0, 0]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style src="leaflet/dist/leaflet.css"></style>

<style lang="stylus" scoped>
  .world
    width 100%
    height 100%
</style>
