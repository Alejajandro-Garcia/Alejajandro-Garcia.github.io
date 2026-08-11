<script setup lang="ts">
import { MODES } from "../modes";
</script>

<template>
  <div class="about">
    <div class="about__inner">
      <div class="about__nav">
        <button @click="$emit('selectMode', MODES.HOME)">[home]</button>
        <button @click="$emit('selectMode', MODES.ABOUT)">[about]</button>
        <button @click="$emit('selectMode', MODES.EXPERIENCE)">
          [experience]
        </button>
        <button @click="$emit('selectMode', MODES.RESUME)">[resume]</button>
      </div>
      <div class="about__body">
        The fog was as thick as pea soup. This was a problem. Gary was driving
        but couldn't see a thing in front of him. He knew he should stop, but
        the road was narrow so if he did, it would be right in the center of the
        road. He was sure that another car would end up rear-ending him, so he
        continued forward despite the lack of visibility. This was an unwise
        move. It was the best compliment that he'd ever received although the
        person who gave it likely never knew. It had been an off-hand
        observation on his ability to hold a conversation and actually add
        pertinent information to it on practically any topic. Although he hadn't
        consciously strived to be able to do so, he'd started to voraciously
        read the news when he couldn't keep up on topics his friends discussed
        because their conversations went above his head. The fact that someone
        had noticed enough to compliment him that he could talk intelligently
        about many topics meant that he had succeeded in his quest to be better
        informed. Do you really listen when you are talking with someone? I have
        a friend who listens in an unforgiving way. She actually takes every
        word you say as being something important and when you have a friend
        that listens like that, words take on a whole new meaning.
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding: 0 16px;
}
.about__inner {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 20vw;
  height: var(--media-h);
  overflow-y: auto;
}
.about__nav {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
}
.about__body {
  border-style: ridge;
  padding: 10px 16px;
  font-size: 0.6em;
  line-height: 1.3em;
  text-shadow: none;
}
</style>
