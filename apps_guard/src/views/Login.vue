<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref(null)
const url = 'http://192.168.101.132:8080/guardian/login'

const submit = async (e) => {
  e.preventDefault()
  error.value = null
  try {
    const response = await axios.post(url, {
      username: username.value,
      password: password.value,
    })

    // Извлекаем access_token
    const { access_token } = response.data

    // Сохраняем токен в localStorage
    localStorage.setItem('token', access_token)

    // Перенаправление
    setTimeout(() => {
  router.push('/dashbord/about-system')
}, 100)

  } catch (err) {
    error.value = 'Неверный логин или пароль. Повторите попытку.'
    console.error(err)
  }
}

</script>

<!-- <template>
    <div class="min-h-screen flex items-center justify-center bg- white-800">
      <div class="w-full max-w-sm bg-white rounded-xl shadow-xl pb-10 gap-8 flex flex-col items-center">
        <div class="relative">
            <img src="/public/img/fon.png" alt="">
            <h1 class="text-4xl font-bold text-center text-white mb-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif">СТРАЖ-М</h1>
        </div>
        
        <form @submit.prevent="submit" class="flex flex-col gap-8 w-10/12 mx-auto">
  <div v-if="error" class="text-red-500 text-sm text-center">{{ error }}</div>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Логин:</label>
    <input v-model="username"
      id="name"
      name="name"
      type="text"
      maxlength="5"
      required
      placeholder="Введите Логин"
      class="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
  <div>
    <label for="password" class="block text-sm font-medium text-gray-700">Пароль:</label>
    <input v-model="password"
      id="password"
      name="password"
      type="password"
      required
      placeholder="Введите пароль"
      class="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
  <button
    type="submit"
    class="w-2/3 mx-auto opacity-80 mt-2 bg-[#3B75BA] hover:bg-[#3B75BA] hover:opacity-100 transition all duration-300 text-white font-semibold py-2 px-4 rounded-lg"
  >
    Войти
  </button>
</form>

      </div>
    </div>
  </template> -->
  <template>
    <div class="min-h-screen flex items-center justify-center bg-white-800">
      <div class="w-full max-w-sm bg-white rounded-xl shadow-xl pb-10 gap-8 flex flex-col items-center animate-fadeIn">
        <div class="relative">
          <img src="/img/fon.png" alt="">
          <h1
            class="text-4xl font-bold text-center text-white mb-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif animate-slideIn"
          >
            СТРАЖ-М
          </h1>
          <h1
            class="text-xl font-bold text-center text-white mb-6 absolute top-28 left-80 -translate-x-1/2 -translate-y-1/2 font-serif animate-slideIn"
          >
            ЭЛВИС
          </h1>
        </div>
        
  
        <form @submit.prevent="submit" class="flex flex-col gap-8 w-10/12 mx-auto">
          <div v-if="error" class="text-red-500 text-sm text-center">{{ error }}</div>
  
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Логин:</label>
            <input
              v-model="username"
              id="name"
              name="name"
              type="text"
              maxlength="5"
              required
              placeholder="Введите Логин"
              class="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Пароль:</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              required
              placeholder="Введите пароль"
              class="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <button
            type="submit"
            class="w-2/3 mx-auto opacity-80 mt-2 bg-[#3B75BA] hover:bg-[#3B75BA] hover:opacity-100 hover:scale-105 transition-all duration-300 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translate(-50%, -0%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
  
  .animate-slideIn {
    animation: slideIn 1s ease-out;
  }
  </style>
  
  