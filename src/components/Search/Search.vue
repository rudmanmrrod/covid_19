<template>
  <b-container fluid>
    <h1>Search</h1><hr>
    <b-row class="my-1">
      <b-col sm="6" xs="12">
        <label>Search by list</label>
        <b-form-select v-model="search_list" :options="country_list"></b-form-select>
      </b-col>
      <b-col sm="6" xs="12">
        <label>or Search by name</label>
        <b-form-input type="text" v-model="search"></b-form-input>
      </b-col>
    </b-row><br>
    <b-row>
      <b-col sm="12">
        <b-button variant="primary" @click="searchForCountry">Search</b-button> 
        | <b-button variant="secondary" @click="clear">Clear</b-button>
      </b-col>
    </b-row><br>
    <b-col sm="12" v-if="info.country">
      <b-card :title="info.country">
        <b-list-group>
          <b-list-group-item>Cases: {{ info.cases }}</b-list-group-item>
          <b-list-group-item>Today Cases: {{ info.todayCases }}</b-list-group-item>
          <b-list-group-item>Deaths: {{ info.deaths }} </b-list-group-item>
          <b-list-group-item>Today Deaths: {{ info.todayDeaths }} </b-list-group-item>
          <b-list-group-item>Recovered: {{ info.recovered }}</b-list-group-item>
          <b-list-group-item>Active: {{ info.active }}</b-list-group-item>
          <b-list-group-item>Critical: {{ info.critical }}</b-list-group-item>
        </b-list-group>
      </b-card>
    </b-col>
    <b-row>
      <b-col sm="12">
        <b-alert v-model="showError" variant="danger" dismissible>
          {{ error }}
        </b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>
<script src="./Search.js"></script>