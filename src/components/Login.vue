<template>
  <section
    @click="$emit('close')"
    class="absolute top-0 bg-black bg-opacity-70 w-full h-full"
  ></section>
  <div class="m-auto z-50 inset-0 absolute top-0 left-30 h-1/2 w-2/6">
    <div class="flex flex-col justify-center rounded-lg bg-white w-auto h-auto p-4">
      <div class="border border-solid rounded-lg p-5 w-full ">
        <h1 class="text-2xl font-semibold  text-center">Login</h1>
        <form action="" class="p-2 my-2" @submit.prevent="">
          <div class="flex flex-col my-5">
            <label for="email">Emial or Username</label>
            <input class="shadow rounded-lg p-2 w-full" type="email" name="email" placeholder="Enter your email" />
          </div>
          <div class="flex flex-col">
            <label for="password">Password</label>
            <input class="shadow rounded-lg p-2 w-full" type="password" name="password" placeholder="Enter your password" />
          </div>
          <div class="flex flex-col">
           <button type="submit" class="rounded-lg p-2 w-full my-5 text-xl text-white shadow-md bg-green-400">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
