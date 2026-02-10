<script lang="ts" setup>
import AnimatedContent from '@/component/AnimatedContent/AnimatedContent.vue'
import DecryptedText from '@/component/DecryptedText/DecryptedText.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HomeCard from '@/components/HomeCard.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import SkillSection from '@/components/SkillSection.vue'
import type { IHomeCard } from '@/types'
import { fire, shoot } from '@/utils/confetti'
import { useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue'
import { cards } from './Card'

const { y } = useWindowScroll()
const hasFired = ref<boolean>(false)
watch(y, (val) => {
  if (val >= 550 && hasFired.value == false) {
    hasFired.value = true

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    fire(0.2, {
      spread: 60,
    })

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    })

    setTimeout(() => {
      shoot()
    }, 1000)
  }
})

const selectedProjects = ref<IHomeCard[]>(cards)
function filterProjects(event: Event) {
  const target = event.currentTarget as HTMLElement | null

  if (target?.textContent.trim() == 'All') {
    selectedProjects.value = cards
  } else {
    selectedProjects.value = cards.filter((value) => value.category == target?.textContent.trim())
  }

  console.log(selectedProjects.value)
}
</script>

<template>
  <div ref="el" />
  <main class="">
    <section style="background-image: url('img/bg2.png')" id="home">
      <NavigationBar />

      <!-- HERO -->
      <section class="min-h-screen flex items-center">
        <div class="max-w-6xl mx-auto px-6 w-full text-center md:text-left">
          <div class="badge badge-soft badge-success mb-5">• Available for work</div>
          <!-- Headline -->
          <h1
            class="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-gray-900 mb-6 text-balance"
          >
            <!-- bagian 1 -->
            <DecryptedText
              text="I turn ideas and problems into"
              :speed="100"
              :max-iterations="12"
              :sequential="true"
              reveal-direction="start"
              :use-original-chars-only="true"
              animate-on="view"
              class-name="text-gray-900"
              parent-class-name="inline"
              encrypted-class-name="text-gray-900"
            />
            <DecryptedText
              text="digital solutions"
              :speed="130"
              :max-iterations="12"
              :sequential="true"
              reveal-direction="start"
              :use-original-chars-only="true"
              animate-on="view"
              class-name="text-indigo-600 font-playfair italic"
              encrypted-class-name="text-indigo-600  font-playfair"
            />
          </h1>

          <!-- Subheadline -->
          <div class="my-8">
            <span class="text-lg text-gray-600 max-w-2xl font-light">
              Jakarta-based Fullstack Web Developer building practical digital solutions for
              <span class="text-rotate">
                <span class="font-normal">
                  <span class="bg-teal-200 text-teal-800 px-2">Startups</span>
                  <span class="bg-red-200 text-red-800 px-2">Businesses</span>
                  <span class="bg-blue-200 text-blue-800 px-2">Product teams</span>
                </span>
              </span>
            </span>
          </div>
          <!-- CTA -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#projects" class="btn btn-neutral"> View Projects </a>
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-outline w-full">Contact Me</div>
              <ul
                tabindex="-1"
                class="dropdown-content menu bg-base-100 rounded-box z-1 w-full md:w-44 p-2 shadow-sm"
              >
                <li>
                  <a href="https://www.instagram.com/_ferdinandk">
                    <img
                      width="21"
                      height="21"
                      src="https://img.icons8.com/fluency/48/instagram-new.png"
                      alt="instagram-new"
                    />
                    Instagram</a
                  >
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ferdiinand/"
                    ><img
                      width="21"
                      height="21"
                      src="https://img.icons8.com/color/48/linkedin.png"
                      alt="linkedin"
                    />
                    LinkedIn</a
                  >
                </li>
                <li>
                  <a href="mailto:ferdiinand05@gmail.com"
                    ><img
                      width="21"
                      height="21"
                      src="https://img.icons8.com/fluency/48/new-post.png"
                      alt="new-post"
                    />
                    Email</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>

    <AnimatedContent
      :distance="100"
      direction="vertical"
      :reverse="false"
      :duration="1.2"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.2"
      :delay="0"
    >
      <!-- PROJECTS -->

      <section id="projects" class="pb-20 bg-base-200 pt-20">
        <div class="max-w-6xl mx-auto px-6 w-full text-left">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 font-sans text-center md:text-left">
            Selected

            <span class="font-playfair italic text-indigo-600"> Solutions </span>
          </h2>

          <div class="flex flex-wrap gap-3 mb-10 justify-center md:justify-normal">
            <button
              type="button"
              @click="filterProjects($event)"
              class="badge badge-soft badge-neutral btn font-normal text-gray-700 hover:border-gray-400"
            >
              All
            </button>
            <button
              type="button"
              @click="filterProjects($event)"
              class="badge badge-soft badge-host btn font-normal text-gray-700 hover:border-gray-400"
            >
              Web Apps
            </button>
            <button
              type="button"
              @click="filterProjects($event)"
              class="badge badge-soft badge-host btn font-normal text-gray-700 hover:border-gray-400"
            >
              Landing Pages
            </button>
            <button
              type="button"
              @click="filterProjects($event)"
              class="badge badge-soft badge-host btn font-normal text-gray-700 hover:border-gray-400"
            >
              Dashboards
            </button>
          </div>

          <!-- cards -->
          <div
            v-if="selectedProjects.length >= 1"
            class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8 md:gap-y-4 place-items-center"
          >
            <!-- card -->
            <HomeCard
              v-for="(card, i) in selectedProjects"
              :key="i"
              :category="card.category ?? ''"
              :img="card.img"
              :title="card.title"
              :body="card.body"
              :stacks="card.stacks"
              :link="card.link"
            />
          </div>

          <div v-else class="italic text-gray-700 md:text-lg text-center md:text-left">
            No projects found in this category.
          </div>
        </div>
      </section>
    </AnimatedContent>

    <!-- skills -->
    <AnimatedContent
      :distance="100"
      direction="vertical"
      :reverse="false"
      :duration="1.2"
      ease="power3.out"
      :initial-opacity="0"
      :animate-opacity="true"
      :scale="1"
      :threshold="0.2"
      :delay="0"
    >
      <section class="py-20" id="skills">
        <SkillSection />
        <!-- cta -->
      </section>
    </AnimatedContent>
    <section>
      <FooterComponent />
    </section>
  </main>
</template>
