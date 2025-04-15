
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const nav = ref([
  { title: 'Сведения о системе', img:"./img/icon1.svg", link:"/about-system", },
  { title: 'Настройка стека TCP/IP', img:"./img/tcpip.svg", link:"/tcpip", },
  { title: 'Настройка синхронизации времени', img:"./img/time.svg", link:"/timesync", },
  { title: 'Параметры доступа и аутификации', img:"./img/access.svg", link:"#", },
  { title: 'Режимы работы контроллера', img:"./img/modes.svg", link:"#", },
  { title: 'Управление пользователями контроллера', img:"./img/user logo.svg", link:"#", },
  { title: 'Аутенфикация пользователей', img:"./img/user-auth.svg", link:"#", },
  { title: 'Фильтрация по IP', img:"./img/ipfilter.svg", link:"#", },
  { title: 'События', img:"./img/events.svg", link:"#", },
]);


</script>

<template>
  <div class="relative w-full h-1/4 sm:hidden">
        <img src="/img/fon2.png" alt="fon_one" class="w-full h-auto object-cover">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/img/strazh-main2.png" alt="Strazh-main" class="h-auto w-80">
        </div>
      </div>
  <div class="h-full w-full flex flex-row ">
    <div class="w-1/5 h-full max-xl:w-2/6 max-lg:w-3/6 max-sm:w-20">
      <div class="relative w-full h-1/4 max-sm:hidden ">
        <img src="/img/fon.png" alt="fon_one" class="w-full h-full object-cover">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/img/strazh-main2.png" alt="Strazh-main" class="h-auto w-80">
        </div>
      </div>
      <ul class="bg-[#ebf1f7]">
        <li
          v-for="item in nav"
          :key="item.title"
          class="hover:bg-[#DFE6EE] transition-all duration-300 hover:translate-x-2"
        >
          <router-link
            :to="item.link"
            class="flex items-center justify-start gap-2 p-3 text-[#070707] no-underline"
          >
            <img :src="item.img" alt="icon">
            <p class="font-weight-bold text-md  max-sm:hidden  max-lg:text-sm  ">{{ item.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="w-full h-full bg-white"><router-view /></div>
  </div>
</template>

<style scoped>

</style>