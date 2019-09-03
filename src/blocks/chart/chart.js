var ctx = $("myChart").get(0).getContext('2d');
var orange_gradient = ctx.createLinearGradient(0, 0, 0, 100);
orange_gradient.addColorStop(0, '#FFE39C');
orange_gradient.addColorStop(1, ' #FFBA9C');
var blue_gradient = ctx.createLinearGradient(0, 0, 0, 400);
blue_gradient.addColorStop(0, '#BC9CFF');
blue_gradient.addColorStop(1, ' #8BA4F9');
var green_gradient = ctx.createLinearGradient(0, 0, 0, 500);
green_gradient.addColorStop(0, '#6FCF97');
green_gradient.addColorStop(1, '  #66D2EA');
var gray_gradient = ctx.createLinearGradient(0, 0, 0, 500);
gray_gradient.addColorStop(0, ' #919191');
gray_gradient.addColorStop(1, '#3D4975');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Великолепно",
"Хорошо",
"Удовлетворительно",
"Разочарован"],
    datasets: [{
      backgroundColor: [
        blue_gradient,
        green_gradient,
        orange_gradient,
        gray_gradient
      ],
      data: [25, 25, 50, 0]
    }]
  },
   options: {
            cutoutPercentage: 80,
            responsive: true,
            legend: {
                position: 'right',
                labels: {
                    usePointStyle:true,
                    fontColor: "black",
                    boxWidth: 20,
                    padding: 20,
                }
            }
        }
});