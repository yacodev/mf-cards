<template>
  <div>
    <h1 class="text-center font-bold text-3xl">DB MF</h1>

    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div
          class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <div v-for="character in characters.items" :key="character.id">
            
              <div
                class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
              >
                <img
                  :src="character.image"
                  :alt="character.name"
                  height="100"
                  width="100"
                  class="w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                Role: {{ character.description }}
              </h3>
              <p class="mt-1 text-lg font-medium text-gray-900">
                {{ character.name }}
              </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { onMounted, ref } from "vue";

const characters = ref([]);
  const getCharacters = async ()=>{
    
    const response = await fetch(
    "https://dragonball-api.com/api/characters"
  );
  const data = await response.json();

  console.log(data)

  characters.value = data;
  }

  onMounted(() => {
    getCharacters();
});

</script>