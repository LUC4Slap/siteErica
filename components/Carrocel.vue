<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="(item, index) in images"
        :key="index"
        :text="item.text"
        :img-src="item.img"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          text: "Delicioso pão caseiro ",
          img: require("../assets/pao.jpeg"),
        },
        {
          text: "Deliciosa cuca caseiro ",
          img: require("../assets/cuca.jpeg"),
        },
        {
          text: "Deliciosa rosca caseiro ",
          img: require("../assets/rosca.jpeg"),
        },
      ],
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>