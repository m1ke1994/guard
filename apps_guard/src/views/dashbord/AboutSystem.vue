<script setup>
  // Здесь можно добавить JS или API-запрос
  </script>
<template>
    <div class="w-full flex flex-col">
      <div class="about-system-header">
        <h1 class="p-4 text-center text-2xl font-bold max-lg:text-lg max-lg:p-2">Сведения о системе</h1>
        <hr class="mb-16 max-lg:mb-12">
      </div>
      <div class="about-system-title  mx-auto flex flex-col ">
    <h1 class="text-left text-2xl font-bold border-b border-black border-opacity-20 pb-2 max-lg:text-lg">Основная информация</h1>
    
    <ul class="border-b border-black border-opacity-20 py-6 flex justify-between items-center">
        <li class="w-1/3 text-2xl max-lg:text-xs">Версия ПО</li>
        <li class="w-1/3 text-center text-2xl opacity-50 max-lg:text-xs">2.0.1</li>
        <button class="w-1/3 text-right text-2xl text-blue-400 hover:text-blue-700 transition-all duration-300 max-lg:text-xs">Обновить</button>
    </ul>
    
    <ul class="border-b border-black border-opacity-20 py-6 flex justify-between items-center">
        <li class="w-1/3 text-2xl max-lg:text-xs">Серийный номер</li>
        <li class="w-1/3 text-center text-2xl opacity-50 max-lg:text-xs">1111-2222-3333-4444</li>
        <div class="w-1/3 max-sm:hidden"></div> <!-- Пустой элемент для выравнивания -->
    </ul>
    
    <ul class="border-b border-black border-opacity-20 py-6 flex justify-between items-center mb-16 max-lg:mb-4">
        <li class="w-1/3 text-2xl  max-lg:text-xs">MAC</li>
        <li class="w-1/3 text-center text-2xl opacity-50 max-lg:text-xs">18-67-B0-51-5B-D2</li>
        <div class="w-1/3 max-sm:hidden"></div> <!-- Пустой элемент для выравнивания -->
    </ul>
    <button class=" border-b border-black border-opacity-20 pb-2 text-center text-2xl text-blue-400 hover:text-blue-700 transition-all duration-300 max-lg:text-xs ">Перезагрузить контроллер</button>
</div>


     

    </div>
</template>
  
  
  
  <style scoped>
 .about-system-title{
  width: 95%;
 }
 
  hr{
    border: 1px solid #2A588C;
  }
  </style>
  