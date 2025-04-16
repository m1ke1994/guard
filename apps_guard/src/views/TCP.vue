<script setup>
 
  </script>
<template>
    <div class="w-full flex flex-col">
      <div class="about-system-header">
        <h1 class="p-4 text-center text-2xl font-bold max-lg:text-lg max-lg:p-2 ">Настройка стека TCP/IP</h1>
        <hr class="mb-16 max-lg:mb-12 ">
      </div>
      <div class="about-system-title  mx-auto flex flex-col  ">
        <hr class="mb-2 hr_one">
            <div class="flex border-b border-black border-opacity-20 pb-4 ">
                <p class="w-1/3 text-2xl max-lg:text-xs">Тип адреса</p>
                <select class="text-center text-2xl bg-transparent max-lg:text-xs " name="" id="">
                    <option value="1">DHCP</option>
                    <option value="2">Статический адрес</option>
                    <option value="3">Zeroconf</option>
                </select> 
            </div>

            <div class="flex border-b border-black border-opacity-20 py-4 items-center">
                <p class="w-1/3 text-2xl opacity-50 max-lg:text-xs">Статический IP адрес</p>
                <form class="w-1/3 flex text-lg items-end">
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                </form>
            </div>

            <div class="flex border-b border-black border-opacity-20 py-4 items-center">
                <p class="w-1/3 text-2xl opacity-50 max-lg:text-xs">Сетевая маска</p>
                <form class="w-1/3 flex text-lg items-end">
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                </form>
            </div>

            <div class="flex border-b border-black border-opacity-20 py-4 items-center">
                <p class="w-1/3 text-2xl opacity-50 max-lg:text-xs">Сетевой шлюз</p>
                <form class="w-1/3 flex text-lg items-end">
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                </form>
            </div>

            <div class="flex border-b border-black border-opacity-20 py-4 items-center">
                <p class="w-1/3 text-2xl opacity-50 max-lg:text-xs">IP адрес DNS1</p>
                <form class="w-1/3 flex text-lg items-end">
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                </form>
            </div>

            <div class="flex border-b border-black border-opacity-20 py-4 items-center">
                <p class="w-1/3 text-2xl opacity-50 max-lg:text-xs">IP адрес DNS2</p>
                <form class="w-1/3 flex text-lg items-end">
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                    <span class="px-1 self-end">.</span>
                    <input type="text" maxlength="3" inputmode="numeric" pattern="[0-9]*"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-12 text-center px-1 py-1 border border-gray-300 rounded" />
                </form>
            </div>

            <div class="flex border-b border-black border-opacity-20 py-4 items-center">
                <p class="w-1/3 text-2xl max-lg:text-xs">Сетевые протоколы</p>
                <div class="w-2/3 flex gap-4 text-lg">
                    <label class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 ">
                    <span class="max-lg:text-xs">HTTP</span>
                    </label>
                    <label class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4">
                    <span class="max-lg:text-xs">HTTPS</span>
                    </label>
                    <label class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4">
                    <span class="max-lg:text-xs">RTSP</span>
                    </label>
                </div>
            </div>
            <div class="flex sm:flex-row text-center justify-center py-10 gap-6 sm:gap-12 border-b border-black border-opacity-20 max-lg:py-3">
        <button class="text-blue-400 text-2xl md:text-xl sm:text-lg hover:text-blue-700 transition-all duration-300 max-lg:text-sm">Сохранить</button>
        <button class="text-red-400 text-2xl md:text-xl sm:text-lg hover:text-red-700 transition-all duration-300 max-lg:text-sm">Отменить</button>
      </div>




      </div>


     

    </div>
</template>
  
  
  
  <style scoped>
  
  @media (max-width: 1024px) {
  input[type="text"] {
    width: 2rem !important; /* это примерно w-8 */
  }
}

 .about-system-title{
  width: 95%;
 }
 .hr_one {
  border: 1px solid black;
  opacity: 50%;
  width: 105%;
  margin-left: -2.7%; 
}
  hr{
    border: 1px solid #2A588C;
    
   
   
  }
  </style>
  