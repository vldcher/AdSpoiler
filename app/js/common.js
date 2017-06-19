$(function() {

	const chart = c3.generate({
		data: {
			columns: [
			['data1', 300, 350, 300, 0, 0, 0],
			['data2', 130, 100, 140, 200, 150, 50]
			],
			types: {
				data1: 'area',
				data2: 'area-spline'
			},
			colors: {
				data1: '#2c97de',
				data2: '#cb3e4b'

			},
			color: function (color, d) {
				// d will be 'id' when called for legends
				return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
			}

		},
		zoom: {
			enabled: true
		}
	});
	//Tips
	
	$('.info-tip').tipsy({fallback: "Информационный пост" });

	//Google chart

	// // Load Charts and the corechart and barchart packages.
	// google.charts.load('current', {'packages':['corechart']});

	// // Draw the pie chart and bar chart when Charts is loaded.
	// google.charts.setOnLoadCallback(drawChart);

	// function drawChart() {

		// 	var data = new google.visualization.DataTable();
		// 	data.addColumn('string', 'Topping');
		// 	data.addColumn('number', 'Slices');
		// 	data.addRows([
		// 		['Mushrooms', 3],
		// 		['Onions', 1],
		// 		['Olives', 1],
		// 		['Zucchini', 1],
		// 		['Pepperoni', 2]
		// 		]);

		// 	var piechart_options = {title:'',
		// 	width:80,
		// 	height:80,
		// 	legend: 'none'};
		// 	var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
		// 	piechart.draw(data, piechart_options);

		// 	var barchart_options = {title:'Barchart: How Much Pizza I Ate Last Night',
		// 	width:400,
		// 	height:300,
		// 	legend: 'none'};
		// 	var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
		// 	barchart.draw(data, barchart_options);
		// }

		Highcharts.chart('container', {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie'
			},
			title: {
				text: ''
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			},
			series: [{
				name: '',
				colorByPoint: true,
				data: [{
					// name: 'Microsoft Internet Explorer',
					y: 56.33
				}, {
					// name: 'Chrome',
					y: 24.03,
					// sliced: true,
					// selected: true
				}, {
					// name: 'Firefox',
					// y: 10.38
				}, {
					// name: 'Safari',
					// y: 4.77
				}, {
					// name: 'Opera',
					// y: 0.91
				}, {
					// name: 'Proprietary or Undetectable',
					// y: 0.2
				}]
			}]
		});





		//end

	});
