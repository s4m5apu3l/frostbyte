<template>
  <div class="h-screen w-full text-white bg-black"> 
    <Header />
    <div class="flex items-center justify-center h-full">
      <nav class="flex flex-col items-center gap-[20px]">
        <nuxt-link to="about"    class="hover:text-[#767676] transition-all duration-200 text-[48px]">О НАС</nuxt-link>
        <nuxt-link to="projects" class="hover:text-[#767676] transition-all duration-200 text-[48px]">НАШИ РАБОТЫ</nuxt-link>
        <nuxt-link to="contacts" class="hover:text-[#767676] transition-all duration-200 text-[48px]">КОНТАКТЫ</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>