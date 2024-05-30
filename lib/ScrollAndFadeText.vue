<template>
  <div class="scroll-and-fade-text-div">
    <span ref="mySpanRef" class="scroll-and-fade-text-span">
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: {
    text: {
      required: true,
      type: String,
    },
    scrollSpeedPxPerS: {
      required: false,
      type: Number,
      default: 50,
      validator(value: number) {
        return value > 0;
      },
    },
    visibleWaitTimeMs: {
      required: false,
      type: Number,
      default: 1000,
      validator(value: number) {
        return value > 0;
      },
    },
    invisibleWaitTimeMs: {
      required: false,
      type: Number,
      default: 500,
      validator(value: number) {
        return value > 0;
      },
    },
    fadeTimeMs: {
      required: false,
      type: Number,
      default: 500,
      validator(value: number) {
        return value > 0;
      },
    },
  },
  setup() {
    const mySpanRef = ref<HTMLSpanElement | null>(null);
    return {
      mySpanRef,
    };
  },
  mounted() {
    this.animateScroll();
  },
  methods: {
    animateScroll() {
      const myDiv = this.$el;

      if (myDiv && this.mySpanRef) {
        const scrollDistancePx = this.mySpanRef.offsetWidth - myDiv.offsetWidth;
        const isOverflowing = scrollDistancePx - 1 > 0;

        if (isOverflowing) {
          const scrollDurationMs =
            (scrollDistancePx / this.scrollSpeedPxPerS) * 1000;
          const totalTimeMs =
            2 * this.visibleWaitTimeMs +
            scrollDurationMs +
            2 * this.fadeTimeMs +
            this.invisibleWaitTimeMs;

          const animation = this.mySpanRef.animate(
            [
              { transform: "translateX(0)", opacity: 1 },
              {
                transform: "translateX(0)",
                opacity: 1,
                offset: this.visibleWaitTimeMs / totalTimeMs,
              },
              {
                transform: `translateX(-${scrollDistancePx}px)`,
                opacity: 1,
                offset:
                  (this.visibleWaitTimeMs + scrollDurationMs) / totalTimeMs,
              },
              {
                transform: `translateX(-${scrollDistancePx}px)`,
                opacity: 1,
                offset:
                  (2 * this.visibleWaitTimeMs + scrollDurationMs) / totalTimeMs,
              },
              {
                transform: `translateX(-${scrollDistancePx}px)`,
                opacity: 0,
                offset:
                  (2 * this.visibleWaitTimeMs +
                    scrollDurationMs +
                    this.fadeTimeMs) /
                  totalTimeMs,
              },
              {
                transform: "translateX(0)",
                opacity: 0,
                offset:
                  (2 * this.visibleWaitTimeMs +
                    scrollDurationMs +
                    this.fadeTimeMs +
                    this.invisibleWaitTimeMs) /
                  totalTimeMs,
              },
            ],
            {
              duration: totalTimeMs,
              fill: "forwards",
              iterations: 1,
            }
          );
          animation.onfinish = this.animateScroll;
        } else {
          // not overflowing, don't animate
          this.mySpanRef.style.animation = "none";
        }
      }
    },
  },
};
</script>

<style scoped>
.scroll-and-fade-text-div {
  display: flex;
  align-items: center;

  overflow: hidden;
  position: relative;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  min-height: 1lh;
}
.scroll-and-fade-text-span {
  display: inline-block;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  position: absolute;
}
</style>
