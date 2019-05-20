
<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['0', '2', '4', '6', '8', '10', '12'],
      datasets: [
        {
          label: 'Spend',
          backgroundColor: '#d1f4ea',
          data: [30, 50, 40, 50, 60, 45, 80]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
</script>
