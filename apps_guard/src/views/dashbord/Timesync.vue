<script>


</script>
<template>
  <div class="w-full flex flex-col">
    <div class="about-system-header">
      <h1 class="p-4 text-center text-2xl font-bold md:text-lg sm:text-base max-lg:text-lg max-lg:p-2">Настройка синхронизации времени</h1>
      <hr class="mb-16 md:mb-12 sm:mb-8">
    </div>

    <div class="about-system-title flex flex-col mx-auto">
      <hr class="mb-2 hr_one">

      <!-- Синхронизация -->
      <div class="flex items-center border-b border-black border-opacity-20 py-4 max-lg:py-2">
        <p class="text-2xl w-full sm:w-1/2 md:text-xl sm:text-lg max-lg:text-xs">Синхронизация</p>
        <div class="w-full sm:w-1/2 flex justify-end sm:justify-start">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300"></div>
            <div class="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>

      <!-- Дежурный сервер -->
      <div class="flex items-center border-b border-black border-opacity-20 py-4 max-lg:py-2">
  <p class="text-2xl w-full sm:w-1/2 md:text-xl sm:text-lg max-lg:text-xs">Дежурный сервер</p>
  <div class="w-full sm:w-1/2 flex justify-end sm:justify-start">
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer">
      <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300"></div>
      <div class="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
    </label>
  </div>
</div>


      <!-- Вручную (подправленный блок) -->
      <div class="flex flex-col sm:flex-row items-center border-b border-black border-opacity-20 py-4 max-lg:py-2 max-sm:flex-row">
        <p class="text-2xl w-full sm:w-1/2 md:text-xl sm:text-lg max-lg:text-xs">Вручную</p>
        <div class="w-full sm:w-1/2 flex items-center mt-2 sm:mt-0 gap-4 max-sm:flex-row-reverse">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300"></div>
            <div class="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
          </label>
          <input
            id="date"
            type="date"
            v-model="selectedDate"
            class="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
          />
        </div>
      </div>

      <!-- Часовой пояс -->
      <div class="flex flex-col sm:flex-row items-center border-b border-black border-opacity-20 py-4 max-lg:py-1">
  <p class="text-2xl w-full sm:w-1/2 md:text-xl sm:text-lg max-lg:text-xs">Часовой пояс</p>

  <div class="w-full sm:w-1/2 mt-2 sm:mt-0 px-2">
    <div class="relative w-full overflow-hidden">
    
      <select
  class="form-select w-11/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base truncate"
  id="timezone"
>
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
  </div>
</div>


      <!-- Первичный NTP сервер -->
      <div class="flex flex-col sm:flex-row items-center border-b border-black border-opacity-20 py-4 max-lg:py-1">
        <p class="text-2xl w-full sm:w-1/2 md:text-xl sm:text-lg max-lg:text-xs">Первичный NTP сервер</p>
        <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
          <div class="flex rounded-md shadow-sm w-11/12">
            <input
              type="text"
              id="firstNTPinput"
              placeholder="IP адрес или доменное имя, порт"
              class="flex-1 block w-full rounded-l-md border border-gray-300 px-3 py-2 focus:outline-none text-base"/>
            <button class="bg-[#edeff0] px-3 rounded-r-md">
              <img class="hover:scale-110 transition-all duration-300" src="/img/logout.svg" alt="" width="24px">
            </button>
          </div>
        </div>
      </div>

      <!-- Вторичный NTP сервер -->
      <div class="flex flex-col sm:flex-row items-center border-b border-black border-opacity-20 py-4 max-lg:py-1">
        <p class="text-2xl w-full sm:w-1/2 md:text-xl sm:text-lg max-lg:text-xs">Вторичный NTP сервер</p>
        <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
          <div class="flex rounded-md shadow-sm w-11/12">
            <input
              type="text"
              id="secondNTPinput"
              placeholder="IP адрес или доменное имя, порт"
              class="flex-1 block w-full rounded-l-md border border-gray-300 px-3 py-2 focus:outline-none text-base"/>
            <button class="bg-[#edeff0] px-3 rounded-r-md">
              <img class="hover:scale-110 transition-all duration-300" src="/img/logout.svg" alt="" width="24px">
            </button>
          </div>
        </div>
      </div>

      <!-- Кнопки -->
      <div class="flex sm:flex-row text-center justify-center py-10 gap-6 sm:gap-12 border-b border-black border-opacity-20 max-lg:py-3">
        <button class="text-blue-400 text-2xl md:text-xl sm:text-lg hover:text-blue-700 transition-all duration-300 max-lg:text-sm">Сохранить</button>
        <button class="text-red-400 text-2xl md:text-xl sm:text-lg hover:text-red-700 transition-all duration-300 max-lg:text-sm">Отменить</button>
      </div>
    </div>
  </div>
</template>


<style scoped>


.about-system-title {
  width: 95%;
}

.hr_one {
  border: 1px solid black;
  opacity: 50%;
  width: 105%;
  margin-left: -2.7%; 
}

hr {
  border: 1px solid #2A588C;
}

@media (max-width: 400px) {
  .form-select, input[type="date"], input[type="text"] {
    font-size: 0.875rem;
    padding: 0.5rem;
  }

  button {
    font-size: 1rem;
  }
}
</style>
