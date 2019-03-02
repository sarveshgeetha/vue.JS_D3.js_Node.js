import  axios  from 'axios';
import * as d3 from "d3";
export default {
    name: 'Shipping',
    data() {
      return {
        loading: false,
        shipData: [],
        height: 600,
        width: 600
      };
    },
    created() {
      this.colourScale = d3
        .scaleOrdinal()
        .range(["rgb(130, 220, 207)", "rgb(77, 194, 202)", "rgb(70, 172, 179)", "white"]);
    },
    methods: {
      hover(id){
          document.getElementById(id).style.display="block";
      },
      mouseout(id){
          document.getElementById(id).style.display="none";
      },
      shipChart() {
        const shipChart = d3.pack();
        shipChart.size([500, 500]);
        shipChart.padding(20);
        const output = shipChart(this.chartData).descendants();
        return output.map((d, i) => {
          console.log(d);
          let label = "";
            if(d.depth == 1 ){
              label = "source_id"
            }
            else if ( d.depth == 2) {
              label = "new_shipment_id"
            }
            else if ( d.depth == 3) {
              label = "shipment_id"
            }
            else if ( d.depth == 4) {
              label = d.data.cost
            }
          const fill = this.colourScale(d.depth);
          return {
            id: i + 1,
            textId: i * i * i + 1000,
            r: d.r,
            x: d.x,
            y: d.y,
            fill,
            class: d.parent ? d.children ? "node" : "node node--leaf" : "node node--root",
            label: label
          };
        });
      },
    },
    computed: {
      chartData() {
        const shipDataStruct = d3
          .nest()
          .key(d => d.source_id)
          .key(d => d.new_shipment_id)
          .key(d => d.shipment_id)
          .entries(this.shipData);
  
        const shippingDatas = { id: "Shipping", values: shipDataStruct };
        return d3
          .hierarchy(shippingDatas, d => d.values)
          .sum(d =>
             d.shipment_id
          );
      },
      output() {
        return this.shipChart();
      }
    },
    mounted() {
      this.loading = true;
      axios
          .get('http://localhost:4000/getshipments')
          .then(response => {
            this.loading = false;
            this.shipData = response.data;
          });
    }
  }