<template>
  <div class="view-achievements" content>
    <div max-width>
      Achievements
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

interface Feed {
  timestamp: number;
  text: string;
  user: string;
  thumbnail: string;
  title: string;
  recipeId?: string;
  exerciseId?: string;
}

@Component
export default class Achievements extends Vue {}
</script>

<style lang="scss" scoped>
.view-achievements {
  //
}
</style>
