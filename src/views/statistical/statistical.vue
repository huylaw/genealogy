<template>
    <div>
        <div class="py-4">
            <h2 class="pb-3 border-bottom border-primary">Thống kê</h2>
        </div>
        <div>
          <b-row>
            <b-col cols="12" md="6" class="pb-5">
              <h5>Tỉ lệ Nam / Nữ</h5>
              <Bar :options="chartOptions" :data="chartData1"/>
            </b-col>
            <!-- <b-col cols="12" md="6">
              <h5>Tỉ lệ Già / Trẻ</h5>
              <Bar :options="chartOptions" :data="chartData"/>
            </b-col> -->
            <b-col cols="12" md="6">
              <h5>Tỉ lệ Tỉnh thành làm việc</h5>
              <Bar :options="chartOptions" :data="chartData2"/>
            </b-col>
          </b-row>
        </div>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: {
    Bar,
  },
  data() {
    return {
      chartData1: {
        labels: ['Nam', 'Nũ'],
        datasets: [{
          backgroundColor: '#f87979',
          data: [30, 70]
        }]
      },
      chartData2: {
        labels: ['Hà Nội', 'Thanh Hóa', 'Tp.HCM'],
        datasets: [{
          backgroundColor: '#f87979',
          data: [30, 50, 20]
        }]
      },
      options: {
        reponsive: true,
      }
    }
  }
}
</script>
