<template>
  <div>
    <h1>Stats</h1><hr>
    <b-card title="COVID-19 Stats">
      <b-list-group>
        <b-list-group-item>Cases: {{ info.cases }}</b-list-group-item>
        <b-list-group-item>Deaths: {{ info.deaths }} </b-list-group-item>
        <b-list-group-item>Recovered: {{ info.recovered }}</b-list-group-item>
        <b-list-group-item>Updated at: {{ info.updated_at }}</b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>
<script src="./Stats"></script>