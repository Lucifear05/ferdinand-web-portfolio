<script setup lang="ts">
const props = defineProps<{
  img: string
  title: string
  body: string
  stacks: [string, string, ...string[]]
  category: string
  link?: string
}>()
</script>

<template>
  <div
    class="card bg-base-100 shadow-sm md:max-h-96 hover:shadow-md hover:-translate-y-1.5 transition-all"
  >
    <figure>
      <img
        :src="`/img/projects/${props.img}`"
        :alt="props.title"
        class="h-full w-full object-cover"
      />
      <div class="badge absolute opacity-75 top-2 badge-sm badge-soft text-gray-700 left-2">
        {{ props.category }}
      </div>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <p class="text-justify">
        {{ props.body }}
      </p>
      <div class="card-actions justify-end">
        <div
          class="badge badge-soft badge-primary badge-sm"
          v-for="(stack, i) in props.stacks"
          :key="i"
        >
          {{ stack }}
        </div>
      </div>
      <div class="text-right mt-2">
        <a :href="props.link" class="btn btn-sm btn-soft" target="_blank">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-glyphs/30/github.png"
            alt="github"
          />
          Github
        </a>
      </div>
    </div>
  </div>
</template>
