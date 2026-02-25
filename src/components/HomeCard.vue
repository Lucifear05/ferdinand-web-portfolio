<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  id: number | undefined
  img: string[]
  title: string
  body: string
  stacks: string[]
  category: string
  link?: string
}>()

const cardModal = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <div
    class="card bg-base-100 shadow-sm md:max-h-96 hover:shadow-md hover:-translate-y-1.5 transition-all"
  >
    <figure>
      <img
        :src="`/img/projects/${props.img[0]}`"
        :alt="props.title"
        class="h-full w-full object-cover"
      />
      <div class="badge absolute opacity-75 top-2 badge-sm badge-soft text-gray-700 left-2">
        {{ props.category }}
      </div>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <p class="text-justify line-clamp-3 text-gray-700">
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
      <div class="flex mt-2 justify-left gap-x-3">
        <button class="btn btn-sm btn-neutral" @click="cardModal?.showModal()">Detail</button>
      </div>
    </div>
  </div>

  <!-- modal dengan carousel dinamis -->
  <dialog ref="cardModal" class="modal">
    <div class="modal-box md:w-3xl max-w-4xl">
      <h3 class="text-lg font-bold mb-4">{{ props.title }}</h3>

      <!-- carousel dinamis berdasarkan jumlah gambar -->
      <div v-if="props.img.length > 0" class="carousel w-full rounded-lg overflow-hidden">
        <div
          v-for="(image, index) in props.img"
          :key="index"
          :id="`slide-${props.id}-${index}`"
          class="carousel-item relative w-full"
        >
          <img
            :src="`/img/projects/${image}`"
            :alt="`${props.title} - image ${index + 1}`"
            class="w-full h-64 md:h-96 object-contain bg-base-200"
          />

          <!-- navigasi carousel -->
          <div
            class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
          >
            <a
              :href="`#slide-${props.id}-${index === 0 ? props.img.length - 1 : index - 1}`"
              class="btn btn-circle btn-sm bg-base-100/80 hover:bg-base-100"
            >
              ❮
            </a>
            <a
              :href="`#slide-${props.id}-${index === props.img.length - 1 ? 0 : index + 1}`"
              class="btn btn-circle btn-sm bg-base-100/80 hover:bg-base-100"
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <!-- fallback jika tidak ada gambar -->
      <div v-else class="w-full h-48 bg-base-200 rounded-lg flex items-center justify-center">
        <span class="text-base-content/60">No image available</span>
      </div>

      <!-- deskripsi dan tech stack -->
      <div class="mt-4">
        <p class="text-justify text-sm sm:text-base">{{ props.body }}</p>

        <div class="flex flex-wrap gap-2 mt-3">
          <div
            class="badge badge-soft badge-primary text-sm sm:text-base"
            v-for="(stack, i) in props.stacks"
            :key="i"
          >
            {{ stack }}
          </div>
        </div>
      </div>

      <!-- link dan tombol close -->
      <div class="flex justify-between items-center mt-4">
        <a v-if="props.link" :href="props.link" class="btn btn-sm btn-soft gap-2" target="_blank">
          <img
            width="18"
            height="18"
            src="https://img.icons8.com/ios-glyphs/30/github.png"
            alt="github"
          />
          View on GitHub
        </a>
        <div></div>
        <!-- spacer -->
        <form method="dialog">
          <button class="btn btn-neutral btn-sm">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
