<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">

      <div class="title">
        <div class="md-title">Welcome To <br> Shipping Data Analytics</div>
      </div>

      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="user.email" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="user.password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout">
        <md-button class="md-raised md-primary" @click="auth">
          <span v-if="!loading"> Log in</span>
          <div class="loading-overlay" v-if="loading">
            <md-progress-spinner  class="md-accent" :md-diameter="30" md-mode="indeterminate" :md-stroke="3"></md-progress-spinner>
          </div>
        </md-button>
      </div>
    </md-content>
  </div>
</template>

<script src="./login.module.js"></script>
<style scoped src="./login.module.css"></style>