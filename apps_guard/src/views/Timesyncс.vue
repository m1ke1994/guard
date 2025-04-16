<script setup>
 
  </script>
<template>
    <div class="w-full flex flex-col">
      <div class="about-system-header">
        <h1 class="p-4 text-center text-2xl font-bold  max-sm:p-2 max-lg:text-sm">Настройка синхронизации времени</h1>
        <hr class="mb-16 max-lg:mb-12 ">
      </div>
      <div class="about-system-title  mx-auto flex flex-col  ">
        <hr class="mb-2 hr_one">
        <div class="flex border-b border-black border-opacity-20 py-4 ">
            <p class="text-2xl w-1/2 max-lg:text-lg max-lg:px-2 max-sm:text-xs">Синхронизация</p>
            <label class=" w-1/2 relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300"></div>
                <div class="absolute left-0.4 top-0.4 bg-white w-6 h-6 rounded-full transition-all duration-300 peer-checked:translate-x-full"></div>
            </label>
        </div>
       <!--  Дежурный сервер -->
        <div class="flex border-b border-black border-opacity-20 py-4 ">
            <p class="text-2xl w-1/2 max-lg:text-lg max-lg:px-2 max-sm:text-xs">Дежурный сервер</p>
            <label class=" w-1/2 relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300"></div>
                <div class="absolute left-0.4 top-0.4 bg-white w-6 h-6 rounded-full transition-all duration-300 peer-checked:translate-x-full"></div>
            </label>
        </div>
        <!-- Вручную -->
        <div class="flex border-b border-black border-opacity-20 py-4 items-center">
            <p class="text-2xl w-1/2 max-lg:text-lg max-lg:px-2 max-sm:text-xs">Вручную</p>
            <div class="flex flex-col  gap-2 ">
                <label class=" w-1/2 relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer ">
                <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300"></div>
                <div class="absolute left-0.4 top-0.4 bg-white w-6 h-6 rounded-full transition-all duration-300 peer-checked:translate-x-full"></div>
            </label>
            <input id="date" type="date" v-model="selectedDate" class="px-3 py-2 border
             border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"/>
            </div>
        </div>
        <!-- Часовой пояс -->
        <div class="flex border-b border-black border-opacity-20 py-4 ">
            <p class="text-2xl w-1/2 max-lg:text-lg max-lg:px-2">Часовой пояс</p>
            
                                        <select class="form-select" id="timezone" aria-label="Пример выбора по умолчанию" >
                                            <option  value="0">(UTC) Эдинбург, Лондон</option>
                                            <option value="0">(UTC-01:00) Азорские острова</option>
                                            <option value="0">(UTC) Монровия, Рейкьявик</option>
                                            <option value="1">(UTC+01:00) Эдинбург, Лондон</option>
                                            <option value="1">(UTC) Дублин, Лиссабон</option>
                                            <option value="1">(UTC) Касабланка</option>
                                            <option value="1">(UTC+01:00) Западно-Центральная Африка</option>
                                            <option value="1">(UTC+01:00) Виндхук</option>
                                            <option value="2">(UTC+01:00) Амстердам, Берлин, Берн, Рим, Стокгольм, Вена</option>
                                            <option value="2">(UTC+01:00) Белград, Братислава, Будапешт, Любляна, Прага</option>
                                            <option value="2">(UTC+01:00) Брюссель, Копенгаген, Мадрид, Париж</option>
                                            <option value="2">(UTC+01:00) Сараево, Скопье, Варшава, Загреб</option>
                                            <option value="2">(UTC+02:00) Каир</option>
                                            <option value="2">(UTC+02:00) Хараре, Претория</option>
                                            <option value="2">(UTC+02:00) Триполи</option>
                                            <option value="2">(UTC+02:00) Калининград</option>
                                            <option value="3">(UTC+02:00) Афины, Бухарест</option>
                                            <option value="3">(UTC+02:00) Бейрут</option>
                                            <option value="3">(UTC+02:00) Дамаск</option>
                                            <option value="3">(UTC+02:00) Восточная Европа</option>
                                            <option value="3">(UTC+02:00) Хельсинки, Киев, Рига, София, Таллинн, Вильнюс</option>
                                            <option value="3">(UTC+03:00) Иерусалим, Стамбул</option>
                                            <option value="3">(UTC+03:00) Амман, Багдад</option>
                                            <option value="3">(UTC+03:00) Кувейт, Эр-Рияд, Найроби</option>
                                            <option value="3">(UTC+03:00) Москва, Санкт-Петербург, Волгоград, Минск</option>
                                            <option value="4">(UTC+04:00) Самара, Ульяновск, Саратов</option>
                                            <option value="4">(UTC+04:00) Ереван, Тбилиси, Порт-Луи</option>
                                            <option value="4.5">(UTC+04:30) Кабул</option>
                                            <option value="4.5">(UTC+03:30) Тегеран</option>
                                            <option value="4">(UTC+04:00) Абу-Даби, Маскат</option>
                                            <option value="5">(UTC+04:00) Баку</option>
                                            <option value="5">(UTC+05:00) Ашхабад, Ташкент, Исламабад, Карачи</option>
                                            <option value="5">(UTC+05:00) Екатеринбург</option>
                                            <option value="5.5">(UTC+05:30) Ченнай, Калькутта, Мумбаи, Нью-Дели</option>
                                            <option value="5.5">(UTC+05:30) Шри Джаяварденепура</option>
                                            <option value="5.75">(UTC+05:45) Катманду</option>
                                            <option value="6">(UTC+06:00) Нур-Султан (Астана), Дакка</option>
                                            <option value="6.5">(UTC+06:30) Янгон (Рангун)</option>
                                            <option value="7">(UTC+07:00) Бангкок, Ханой, Джакарта</option>
                                            <option value="7">(UTC+07:00) Новосибирск</option>
                                            <option value="8">(UTC+08:00) Пекин, Чунцин, Гонконг, Урумчи</option>
                                            <option value="8">(UTC+08:00) Красноярск</option>
                                            <option value="8">(UTC+08:00) Куала-Лумпур, Сингапур</option>
                                            <option value="8">(UTC+08:00) Перт, Тайбэй</option>
                                            <option value="8">(UTC+08:00) Улан-Батор</option>
                                            <option value="8">(UTC+08:00) Иркутск</option>
                                            <option value="9">(UTC+09:00) Осака, Саппоро, Токио</option>
                                            <option value="9">(UTC+09:00) Сеул</option>
                                            <option value="9">(UTC+09:00) Якутск</option>
                                            <option value="9.5">(UTC+09:30) Аделаида, Дарвин</option>
                                            <option value="10">(UTC+10:00) Брисбен, Хобарт</option>
                                            <option value="10">(UTC+10:00) Канберра, Мельбурн, Сидней</option>
                                            <option value="10">(UTC+10:00) Гуам, Порт-Морсби</option>
                                            <option value="11">(UTC+11:00) Остров Соломона, Новая Каледония</option>
                                            <option value="11">(UTC+11:00) Владивосток</option>
                                            <option value="12">(UTC+12:00) Окленд, Веллингтон</option>
                                            <option value="12">(UTC+12:00) Всемирное координированное время+12</option>
                                            <option value="12">(UTC+12:00) Фиджи</option>
                                            <option value="12">(UTC+12:00) Магадан</option>
                                            <option value="12">(UTC+12:00) Петропавловск-Камчатский </option>
                                            <option value="13">(UTC+13:00) Нукуалофа, Самоа</option>
                                            <option value="-1">(UTC-01:00) Остров Кабо-Верде.</option>
                                            <option value="-2">(UTC-02:00) Координированное универсальное время-02</option>
                                            <option value="-3">(UTC-03:00) Бразилиа, Буэнос-Айрес</option>
                                            <option value="-3">(UTC-03:00) Кайенна, Форталеза</option>
                                            <option value="-3">(UTC-03:00) Гренландия</option>
                                            <option value="-3">(UTC-03:00) Монтевидео, Сальвадор</option>
                                            <option value="-3">(UTC-04:00) Атлантическое время (Канада)</option>
                                            <option value="-3.5">(UTC-03:30) Ньюфаундленд</option>
                                            <option value="-4">(UTC-04:00) Куяба</option>
                                            <option value="-4">(UTC-04:00) Джорджтаун, Ла-Пас, Манаус, Сан-Хуан</option>
                                            <option value="-4">(UTC-04:00) Сантьяго, Асунсьон</option>
                                            <option value="-4">(UTC-05:00) Восточное время (США, Канада)</option>
                                            <option value="-4">(UTC-05:00) Индиана (восток)</option>
                                            <option value="-4.5">(UTC-04:30) Каракас</option>
                                            <option value="-5">(UTC-05:00) Богота, Лима, Кито</option>
                                            <option value="-5">(UTC-06:00) Центральное время (США, Канада)</option>
                                            <option value="-5">(UTC-06:00) Гвадалахара, Мехико, Монтеррей</option>
                                            <option value="-6">(UTC-07:00) Чиуауа, Ла-Пас, Мазатлан</option>
                                            <option value="-6">(UTC-06:00) Центральная Америка</option>
                                            <option value="-6">(UTC-06:00) Саскачеван</option>
                                            <option value="-7">(UTC-07:00) Аризона</option>
                                            <option value="-7">(UTC-08:00) Баха Калифорния</option>
                                            <option value="-9">(UTC-09:00) Аляска</option>
                                            <option value="-10">(UTC-10:00) Гавайи</option>
                                            <option value="-11">(UTC-11:00) Всемирное координированное время-11</option>
                                            <option value="-12">(UTC-12:00) Международная линия перемены дат Запад</option>
                                        </select>
                                
        </div>
     <!--    Первичный NTP сервер -->
        <div class="flex border-b border-black border-opacity-20 py-4 ">
            <p class="text-2xl w-1/2 max-lg:text-lg max-lg:px-2">Первичный NTP сервер</p>
            <div class="w-1/2 flex items-center border-b border-black border-opacity-20 pe-0">
              <div class="w-full max-w-xl pe-2">
                <div class="flex rounded-md shadow-sm">
                  <input
                  type="text"
                  id="firstNTPinput"
                  placeholder="IP адрес или доменное имя, порт"
                  aria-label="IP address"
                  class="flex-1 block w-full rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none "/>
                  <button class="bg-[#edeff0]"><img class="hover:scale-110 transition-all duration-300" src="/img/logout.svg" alt="" width="30px"></button>
                </div>
              </div>
            </div>
        </div>
           <!--    Вторичный NTP сервер -->
           <div class="flex border-b border-black border-opacity-20 py-4 ">
            <p class="text-2xl w-1/2 max-lg:text-lg max-lg:px-2">Вторичный NTP сервер</p>
            <div class="w-1/2 flex items-center border-b border-black border-opacity-20 pe-0">
              <div class="w-full max-w-xl pe-2">
                <div class="flex rounded-md shadow-sm">
                  <input
                  type="text"
                  id="firstNTPinput"
                  placeholder="IP адрес или доменное имя, порт"
                  aria-label="IP address"
                  class="flex-1 block w-full rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none "/>
                  <button class="bg-[#edeff0]"><img class="hover:scale-110 transition-all duration-300" src="/img/logout.svg" alt="" width="30px"></button>
                </div>
              </div>
            </div>
        </div>
        <div class="flex text-center justify-center py-10 gap-12 border-b border-black border-opacity-20" >
                <button class="text-blue-400 text-2xl hover:text-blue-700 transition-all duration-300 max-lg:text-sm">Сохранить</button>
                <button class="text-red-400 text-2xl hover:text-red-700 transition-all duration-300 max-lg:text-sm">Отменить</button>
           </div>




      </div>


     

    </div>
</template>
  
  
  
  <style scoped>

 .about-system-title{
  width: 95%;
 }
 .hr_one{
    
   
    border: 1px solid black;
    opacity: 50%;
    
 }
  hr{
    border: 1px solid #2A588C;
    
   
   
  }
  </style>
  