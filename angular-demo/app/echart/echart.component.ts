import { Component, OnInit } from '@angular/core';
import * as echarts from './echarts.min.js'

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.scss']
})
export class EchartComponent implements OnInit {

	constructor() { }
	
	data:any = [
		// [0,0],
		// [20, 20],
		// [30, 80],
		// [40, 30],
		// [50, 10],
		// [60, 90],
		// [100,100]
		[0,0],
		[10, 10],
		[20, 20],
		[30, 30],
		[40, 40],
		[50, 50],
		[60, 60],
		[70,70],
		[80,80],
		[90,90],
		[100,100]
	];

	ngOnInit() {
		this.draw(this.data)
	}

	draw(pointList): void {
		//var pointList=pointList;
		var chartDom = document.getElementById('main');
		var myChart = echarts.init(chartDom);
		var option;
		var symbolSize = 15;

		option = {
			// title: {
			// 	text: 'CPU Temperature',
			// 	left: 'center',
			// 	top: 'bottom'
			// },
			xAxis: {
				type: 'value',
				min: 0,
				max: 100,
				splitNumber: 10, // 分割段数
				axisLabel: {
					show: false, //要不要顯示X軸資料
					formatter: '{value}°C',
				},
				axisLine: {  // 坐标轴线
					onZero: false,
					lineStyle: {
						color: 'white',
					}
				},
			},
			yAxis: {
				type: 'value',
				min: 0,
				max: 100,
				splitNumber: 10, // 分割段数
				axisLabel: {
					show: false, //要不要顯示Y軸資料
					formatter: '{value}%',
				},
				axisLine: {
					onZero: false,
					lineStyle: {
						color: 'white',
					}
				}
			},
			series: [
				{
					id: 'series_id',
					data: pointList,
					type: 'line',
					symbol: 'circle',
					symbolSize:  symbolSize,//dot的大小,
					itemStyle: {
						color: 'rgb(255,0,0)',
					}
				}
			],
			tooltip: {
				triggerOn: 'none',
				formatter: function (params) {
					return (
						params.data[0].toFixed(0) + '°C' +
						'&nbsp&nbsp&nbsp&nbsp' +
						params.data[1].toFixed(0) + '%'
					);
				},
				backgroundColor:'black',
				borderColor: "gray",
				borderWidth: 3,
				textStyle: {
					color:'white'
				}
			},
			grid: {
				show: true,
                containLabel: false,
				top: 10,
				bottom: 10,
				left: 10,
				right: 10,
				// borderWidth: 5,
			},
		};

		setTimeout(() => {
			myChart.setOption({
				// graphic: echarts.util.map(data, function (item, dataIndex) {
				graphic: pointList.map(function (item, dataIndex) {
					return {
						type: 'circle',
						position: myChart.convertToPixel('grid', item),
						shape: {
							cx: 0,
							cy: 0,
							r: symbolSize / 2
						},
						invisible: true,
						draggable: true,
						ondrag: echarts.util.curry(onPointDragging, dataIndex),
						onmousemove: echarts.util.curry(showTooltip, dataIndex),
						onmouseout: echarts.util.curry(hideTooltip, dataIndex),
						// ondrag: function (dx, dy) {
						// 	onPointDragging(dataIndex, [this.x, this.y],item);
						// },
						// onmousemove: function () {
						// 	showTooltip(dataIndex);
						// },
						// onmouseout: function () {
						// 	hideTooltip(dataIndex);
						// },
						z: 100
					};
				})
			})
		});

		window.addEventListener('resize', updatePosition);
		myChart.on('dataZoom', updatePosition);
		function updatePosition() {
			myChart.setOption({
				graphic: pointList.map(function (item, dataIndex) {
					return {
						position: myChart.convertToPixel('grid', item)
					};
				})
			});
		}

		function showTooltip(dataIndex) {
			myChart.dispatchAction({
				type: 'showTip',
				seriesIndex: 0,
				dataIndex: dataIndex
			});
		}
		
		function hideTooltip(dataIndex) {
			myChart.dispatchAction({
				type: 'hideTip'
			});
		}

		function onPointDragging(dataIndex, event) {
			var relativeCoordinates = myChart.convertFromPixel('grid', this.position);
			relativeCoordinates=[Math.round(relativeCoordinates[0]),Math.round(relativeCoordinates[1])]
			if(dataIndex==0||dataIndex==10){
			updatePosition();
				return;
			}
			if(relativeCoordinates[1]>99||relativeCoordinates[1]<0){
			updatePosition(); 
				return;
			}
			var nowPoint=pointList[dataIndex];
			var previousPoint=pointList[dataIndex-1];
			if(relativeCoordinates[1]<previousPoint[1]){
				updatePosition();
				return;
			}
			if(nowPoint[1]>=previousPoint[1]){
			pointList[dataIndex]=[nowPoint[0],relativeCoordinates[1]];
			}
			//console.log('%c onPointDragging', 'background: blue; color: red',dataIndex, this.position)
			//console.log('%c pointList[dataIndex]', 'background: blue; color: red', pointList[dataIndex],event)
			for (let index = 0; index < pointList.length; index++) {
				//pointList[index];
				if(index>dataIndex){
					var nextPoint=pointList[index];
					if(nextPoint[1]<pointList[dataIndex][1]){
						pointList[index]=[nextPoint[0],pointList[dataIndex][1]];
					}
				}
			}

			updatePosition();
			console.log('%c pointList', 'background: blue; color: red', pointList,relativeCoordinates
			)

			myChart.setOption({
				series: [{
					id: 'series_id',
					data: pointList
				}]
			});
		}
		option && myChart.setOption(option);
	}
}
