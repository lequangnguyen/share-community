<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">canal</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <router-link class="nav-link" active-class="active" :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href>Sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href>Sign up</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
</style>
