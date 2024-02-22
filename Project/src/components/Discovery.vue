<template>
    <body>
      <section class="header">
        <section class="navigation">
          <a href="#" class="logo">
            <img src="../assets/img/AdobeStock_355211758_Preview-removebg-preview.png" alt="Logo">
          </a>
          <div class="nav-links">
            <ul>
              <li><router-link to="/">HOME</router-link></li>
              <li class="dropdown">
                <a href="#" class="dropbtn">DISCOVERY</a>
                <div class="dropdown-content">
                  <router-link to="/aliens">ALIENS</router-link>
                  <router-link to="/new-worlds">NEW WORLDS</router-link>
                  <router-link to="/moons">MOONS</router-link>
                </div>
              </li>
              <!-- Other navigation items -->
            </ul>
          </div>
        </section>
      </section>
    </body>
  </template>
  
  <script>
  export default {
    name: 'DiscoveryPage', // Rename the component
  }
  </script>
  
  <style scoped>
  </style>
  