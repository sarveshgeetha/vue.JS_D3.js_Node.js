<template>
  <div class="centered-container" v-if="!loading">  
    <md-card class="md-elevation-3">
      <md-card-header>
        <div class="md-title">Shipment Analytics Chart</div>
      </md-card-header>
      <md-card-content>
        <svg
            :height='height'
            :width='width'
          >
            <g transform="translate(60,50)">
              <circle
                v-for="c in output"
                @mouseover="hover(c.textId)"
                @mouseout="mouseout(c.textId)"
                :key="c.id"
                :r="c.r"
                :cx="c.x"
                :class="c.class"
                :cy="c.y"
                :fill="c.fill"
              >
              </circle>
              <text v-for="c in output"
                style="display:none;" 
                :id="c.textId"
                :key="c.textId"
                :dx="c.x"
                :dy="c.y">
                  {{c.label}}</text>
            </g>
          </svg>
          <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
              <span>{{errMsg}}</span>
              <md-button class="md-primary" @click="showSnackbar = false">close</md-button>
          </md-snackbar>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary">Log Out</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script src="./shipping.module.js"></script>
<style scoped src="./shipping.module.css"></style>
