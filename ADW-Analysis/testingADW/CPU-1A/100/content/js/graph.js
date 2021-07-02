/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 11991.0, "minX": 0.0, "maxY": 16663.0, "series": [{"data": [[0.0, 11991.0], [0.1, 11991.0], [0.2, 11991.0], [0.3, 11991.0], [0.4, 11991.0], [0.5, 11991.0], [0.6, 11991.0], [0.7, 11991.0], [0.8, 11991.0], [0.9, 11991.0], [1.0, 12116.0], [1.1, 12116.0], [1.2, 12116.0], [1.3, 12116.0], [1.4, 12116.0], [1.5, 12116.0], [1.6, 12116.0], [1.7, 12116.0], [1.8, 12116.0], [1.9, 12116.0], [2.0, 12134.0], [2.1, 12134.0], [2.2, 12134.0], [2.3, 12134.0], [2.4, 12134.0], [2.5, 12134.0], [2.6, 12134.0], [2.7, 12134.0], [2.8, 12134.0], [2.9, 12134.0], [3.0, 12154.0], [3.1, 12154.0], [3.2, 12154.0], [3.3, 12154.0], [3.4, 12154.0], [3.5, 12154.0], [3.6, 12154.0], [3.7, 12154.0], [3.8, 12154.0], [3.9, 12154.0], [4.0, 12231.0], [4.1, 12231.0], [4.2, 12231.0], [4.3, 12231.0], [4.4, 12231.0], [4.5, 12231.0], [4.6, 12231.0], [4.7, 12231.0], [4.8, 12231.0], [4.9, 12231.0], [5.0, 12253.0], [5.1, 12253.0], [5.2, 12253.0], [5.3, 12253.0], [5.4, 12253.0], [5.5, 12253.0], [5.6, 12253.0], [5.7, 12253.0], [5.8, 12253.0], [5.9, 12253.0], [6.0, 12348.0], [6.1, 12348.0], [6.2, 12348.0], [6.3, 12348.0], [6.4, 12348.0], [6.5, 12348.0], [6.6, 12348.0], [6.7, 12348.0], [6.8, 12348.0], [6.9, 12348.0], [7.0, 12456.0], [7.1, 12456.0], [7.2, 12456.0], [7.3, 12456.0], [7.4, 12456.0], [7.5, 12456.0], [7.6, 12456.0], [7.7, 12456.0], [7.8, 12456.0], [7.9, 12456.0], [8.0, 12555.0], [8.1, 12555.0], [8.2, 12555.0], [8.3, 12555.0], [8.4, 12555.0], [8.5, 12555.0], [8.6, 12555.0], [8.7, 12555.0], [8.8, 12555.0], [8.9, 12555.0], [9.0, 12569.0], [9.1, 12569.0], [9.2, 12569.0], [9.3, 12569.0], [9.4, 12569.0], [9.5, 12569.0], [9.6, 12569.0], [9.7, 12569.0], [9.8, 12569.0], [9.9, 12569.0], [10.0, 12651.0], [10.1, 12651.0], [10.2, 12651.0], [10.3, 12651.0], [10.4, 12651.0], [10.5, 12651.0], [10.6, 12651.0], [10.7, 12651.0], [10.8, 12651.0], [10.9, 12651.0], [11.0, 12663.0], [11.1, 12663.0], [11.2, 12663.0], [11.3, 12663.0], [11.4, 12663.0], [11.5, 12663.0], [11.6, 12663.0], [11.7, 12663.0], [11.8, 12663.0], [11.9, 12663.0], [12.0, 12693.0], [12.1, 12693.0], [12.2, 12693.0], [12.3, 12693.0], [12.4, 12693.0], [12.5, 12693.0], [12.6, 12693.0], [12.7, 12693.0], [12.8, 12693.0], [12.9, 12693.0], [13.0, 12766.0], [13.1, 12766.0], [13.2, 12766.0], [13.3, 12766.0], [13.4, 12766.0], [13.5, 12766.0], [13.6, 12766.0], [13.7, 12766.0], [13.8, 12766.0], [13.9, 12766.0], [14.0, 12777.0], [14.1, 12777.0], [14.2, 12777.0], [14.3, 12777.0], [14.4, 12777.0], [14.5, 12777.0], [14.6, 12777.0], [14.7, 12777.0], [14.8, 12777.0], [14.9, 12777.0], [15.0, 12877.0], [15.1, 12877.0], [15.2, 12877.0], [15.3, 12877.0], [15.4, 12877.0], [15.5, 12877.0], [15.6, 12877.0], [15.7, 12877.0], [15.8, 12877.0], [15.9, 12877.0], [16.0, 12889.0], [16.1, 12889.0], [16.2, 12889.0], [16.3, 12889.0], [16.4, 12889.0], [16.5, 12889.0], [16.6, 12889.0], [16.7, 12889.0], [16.8, 12889.0], [16.9, 12889.0], [17.0, 12959.0], [17.1, 12959.0], [17.2, 12959.0], [17.3, 12959.0], [17.4, 12959.0], [17.5, 12959.0], [17.6, 12959.0], [17.7, 12959.0], [17.8, 12959.0], [17.9, 12959.0], [18.0, 13058.0], [18.1, 13058.0], [18.2, 13058.0], [18.3, 13058.0], [18.4, 13058.0], [18.5, 13058.0], [18.6, 13058.0], [18.7, 13058.0], [18.8, 13058.0], [18.9, 13058.0], [19.0, 13071.0], [19.1, 13071.0], [19.2, 13071.0], [19.3, 13071.0], [19.4, 13071.0], [19.5, 13071.0], [19.6, 13071.0], [19.7, 13071.0], [19.8, 13071.0], [19.9, 13071.0], [20.0, 13260.0], [20.1, 13260.0], [20.2, 13260.0], [20.3, 13260.0], [20.4, 13260.0], [20.5, 13260.0], [20.6, 13260.0], [20.7, 13260.0], [20.8, 13260.0], [20.9, 13260.0], [21.0, 13273.0], [21.1, 13273.0], [21.2, 13273.0], [21.3, 13273.0], [21.4, 13273.0], [21.5, 13273.0], [21.6, 13273.0], [21.7, 13273.0], [21.8, 13273.0], [21.9, 13273.0], [22.0, 13283.0], [22.1, 13283.0], [22.2, 13283.0], [22.3, 13283.0], [22.4, 13283.0], [22.5, 13283.0], [22.6, 13283.0], [22.7, 13283.0], [22.8, 13283.0], [22.9, 13283.0], [23.0, 13366.0], [23.1, 13366.0], [23.2, 13366.0], [23.3, 13366.0], [23.4, 13366.0], [23.5, 13366.0], [23.6, 13366.0], [23.7, 13366.0], [23.8, 13366.0], [23.9, 13366.0], [24.0, 13383.0], [24.1, 13383.0], [24.2, 13383.0], [24.3, 13383.0], [24.4, 13383.0], [24.5, 13383.0], [24.6, 13383.0], [24.7, 13383.0], [24.8, 13383.0], [24.9, 13383.0], [25.0, 13479.0], [25.1, 13479.0], [25.2, 13479.0], [25.3, 13479.0], [25.4, 13479.0], [25.5, 13479.0], [25.6, 13479.0], [25.7, 13479.0], [25.8, 13479.0], [25.9, 13479.0], [26.0, 13489.0], [26.1, 13489.0], [26.2, 13489.0], [26.3, 13489.0], [26.4, 13489.0], [26.5, 13489.0], [26.6, 13489.0], [26.7, 13489.0], [26.8, 13489.0], [26.9, 13489.0], [27.0, 13581.0], [27.1, 13581.0], [27.2, 13581.0], [27.3, 13581.0], [27.4, 13581.0], [27.5, 13581.0], [27.6, 13581.0], [27.7, 13581.0], [27.8, 13581.0], [27.9, 13581.0], [28.0, 13679.0], [28.1, 13679.0], [28.2, 13679.0], [28.3, 13679.0], [28.4, 13679.0], [28.5, 13679.0], [28.6, 13679.0], [28.7, 13679.0], [28.8, 13679.0], [28.9, 13679.0], [29.0, 13787.0], [29.1, 13787.0], [29.2, 13787.0], [29.3, 13787.0], [29.4, 13787.0], [29.5, 13787.0], [29.6, 13787.0], [29.7, 13787.0], [29.8, 13787.0], [29.9, 13787.0], [30.0, 13805.0], [30.1, 13805.0], [30.2, 13805.0], [30.3, 13805.0], [30.4, 13805.0], [30.5, 13805.0], [30.6, 13805.0], [30.7, 13805.0], [30.8, 13805.0], [30.9, 13805.0], [31.0, 13873.0], [31.1, 13873.0], [31.2, 13873.0], [31.3, 13873.0], [31.4, 13873.0], [31.5, 13873.0], [31.6, 13873.0], [31.7, 13873.0], [31.8, 13873.0], [31.9, 13873.0], [32.0, 13878.0], [32.1, 13878.0], [32.2, 13878.0], [32.3, 13878.0], [32.4, 13878.0], [32.5, 13878.0], [32.6, 13878.0], [32.7, 13878.0], [32.8, 13878.0], [32.9, 13878.0], [33.0, 13882.0], [33.1, 13882.0], [33.2, 13882.0], [33.3, 13882.0], [33.4, 13882.0], [33.5, 13882.0], [33.6, 13882.0], [33.7, 13882.0], [33.8, 13882.0], [33.9, 13882.0], [34.0, 13993.0], [34.1, 13993.0], [34.2, 13993.0], [34.3, 13993.0], [34.4, 13993.0], [34.5, 13993.0], [34.6, 13993.0], [34.7, 13993.0], [34.8, 13993.0], [34.9, 13993.0], [35.0, 14077.0], [35.1, 14077.0], [35.2, 14077.0], [35.3, 14077.0], [35.4, 14077.0], [35.5, 14077.0], [35.6, 14077.0], [35.7, 14077.0], [35.8, 14077.0], [35.9, 14077.0], [36.0, 14079.0], [36.1, 14079.0], [36.2, 14079.0], [36.3, 14079.0], [36.4, 14079.0], [36.5, 14079.0], [36.6, 14079.0], [36.7, 14079.0], [36.8, 14079.0], [36.9, 14079.0], [37.0, 14101.0], [37.1, 14101.0], [37.2, 14101.0], [37.3, 14101.0], [37.4, 14101.0], [37.5, 14101.0], [37.6, 14101.0], [37.7, 14101.0], [37.8, 14101.0], [37.9, 14101.0], [38.0, 14107.0], [38.1, 14107.0], [38.2, 14107.0], [38.3, 14107.0], [38.4, 14107.0], [38.5, 14107.0], [38.6, 14107.0], [38.7, 14107.0], [38.8, 14107.0], [38.9, 14107.0], [39.0, 14194.0], [39.1, 14194.0], [39.2, 14194.0], [39.3, 14194.0], [39.4, 14194.0], [39.5, 14194.0], [39.6, 14194.0], [39.7, 14194.0], [39.8, 14194.0], [39.9, 14194.0], [40.0, 14210.0], [40.1, 14210.0], [40.2, 14210.0], [40.3, 14210.0], [40.4, 14210.0], [40.5, 14210.0], [40.6, 14210.0], [40.7, 14210.0], [40.8, 14210.0], [40.9, 14210.0], [41.0, 14285.0], [41.1, 14285.0], [41.2, 14285.0], [41.3, 14285.0], [41.4, 14285.0], [41.5, 14285.0], [41.6, 14285.0], [41.7, 14285.0], [41.8, 14285.0], [41.9, 14285.0], [42.0, 14301.0], [42.1, 14301.0], [42.2, 14301.0], [42.3, 14301.0], [42.4, 14301.0], [42.5, 14301.0], [42.6, 14301.0], [42.7, 14301.0], [42.8, 14301.0], [42.9, 14301.0], [43.0, 14403.0], [43.1, 14403.0], [43.2, 14403.0], [43.3, 14403.0], [43.4, 14403.0], [43.5, 14403.0], [43.6, 14403.0], [43.7, 14403.0], [43.8, 14403.0], [43.9, 14403.0], [44.0, 14420.0], [44.1, 14420.0], [44.2, 14420.0], [44.3, 14420.0], [44.4, 14420.0], [44.5, 14420.0], [44.6, 14420.0], [44.7, 14420.0], [44.8, 14420.0], [44.9, 14420.0], [45.0, 14496.0], [45.1, 14496.0], [45.2, 14496.0], [45.3, 14496.0], [45.4, 14496.0], [45.5, 14496.0], [45.6, 14496.0], [45.7, 14496.0], [45.8, 14496.0], [45.9, 14496.0], [46.0, 14508.0], [46.1, 14508.0], [46.2, 14508.0], [46.3, 14508.0], [46.4, 14508.0], [46.5, 14508.0], [46.6, 14508.0], [46.7, 14508.0], [46.8, 14508.0], [46.9, 14508.0], [47.0, 14615.0], [47.1, 14615.0], [47.2, 14615.0], [47.3, 14615.0], [47.4, 14615.0], [47.5, 14615.0], [47.6, 14615.0], [47.7, 14615.0], [47.8, 14615.0], [47.9, 14615.0], [48.0, 14618.0], [48.1, 14618.0], [48.2, 14618.0], [48.3, 14618.0], [48.4, 14618.0], [48.5, 14618.0], [48.6, 14618.0], [48.7, 14618.0], [48.8, 14618.0], [48.9, 14618.0], [49.0, 14631.0], [49.1, 14631.0], [49.2, 14631.0], [49.3, 14631.0], [49.4, 14631.0], [49.5, 14631.0], [49.6, 14631.0], [49.7, 14631.0], [49.8, 14631.0], [49.9, 14631.0], [50.0, 14702.0], [50.1, 14702.0], [50.2, 14702.0], [50.3, 14702.0], [50.4, 14702.0], [50.5, 14702.0], [50.6, 14702.0], [50.7, 14702.0], [50.8, 14702.0], [50.9, 14702.0], [51.0, 14794.0], [51.1, 14794.0], [51.2, 14794.0], [51.3, 14794.0], [51.4, 14794.0], [51.5, 14794.0], [51.6, 14794.0], [51.7, 14794.0], [51.8, 14794.0], [51.9, 14794.0], [52.0, 14801.0], [52.1, 14801.0], [52.2, 14801.0], [52.3, 14801.0], [52.4, 14801.0], [52.5, 14801.0], [52.6, 14801.0], [52.7, 14801.0], [52.8, 14801.0], [52.9, 14801.0], [53.0, 14803.0], [53.1, 14803.0], [53.2, 14803.0], [53.3, 14803.0], [53.4, 14803.0], [53.5, 14803.0], [53.6, 14803.0], [53.7, 14803.0], [53.8, 14803.0], [53.9, 14803.0], [54.0, 14906.0], [54.1, 14906.0], [54.2, 14906.0], [54.3, 14906.0], [54.4, 14906.0], [54.5, 14906.0], [54.6, 14906.0], [54.7, 14906.0], [54.8, 14906.0], [54.9, 14906.0], [55.0, 14924.0], [55.1, 14924.0], [55.2, 14924.0], [55.3, 14924.0], [55.4, 14924.0], [55.5, 14924.0], [55.6, 14924.0], [55.7, 14924.0], [55.8, 14924.0], [55.9, 14924.0], [56.0, 15007.0], [56.1, 15007.0], [56.2, 15007.0], [56.3, 15007.0], [56.4, 15007.0], [56.5, 15007.0], [56.6, 15007.0], [56.7, 15007.0], [56.8, 15007.0], [56.9, 15007.0], [57.0, 15019.0], [57.1, 15019.0], [57.2, 15019.0], [57.3, 15019.0], [57.4, 15019.0], [57.5, 15019.0], [57.6, 15019.0], [57.7, 15019.0], [57.8, 15019.0], [57.9, 15019.0], [58.0, 15045.0], [58.1, 15045.0], [58.2, 15045.0], [58.3, 15045.0], [58.4, 15045.0], [58.5, 15045.0], [58.6, 15045.0], [58.7, 15045.0], [58.8, 15045.0], [58.9, 15045.0], [59.0, 15114.0], [59.1, 15114.0], [59.2, 15114.0], [59.3, 15114.0], [59.4, 15114.0], [59.5, 15114.0], [59.6, 15114.0], [59.7, 15114.0], [59.8, 15114.0], [59.9, 15114.0], [60.0, 15222.0], [60.1, 15222.0], [60.2, 15222.0], [60.3, 15222.0], [60.4, 15222.0], [60.5, 15222.0], [60.6, 15222.0], [60.7, 15222.0], [60.8, 15222.0], [60.9, 15222.0], [61.0, 15232.0], [61.1, 15232.0], [61.2, 15232.0], [61.3, 15232.0], [61.4, 15232.0], [61.5, 15232.0], [61.6, 15232.0], [61.7, 15232.0], [61.8, 15232.0], [61.9, 15232.0], [62.0, 15234.0], [62.1, 15234.0], [62.2, 15234.0], [62.3, 15234.0], [62.4, 15234.0], [62.5, 15234.0], [62.6, 15234.0], [62.7, 15234.0], [62.8, 15234.0], [62.9, 15234.0], [63.0, 15236.0], [63.1, 15236.0], [63.2, 15236.0], [63.3, 15236.0], [63.4, 15236.0], [63.5, 15236.0], [63.6, 15236.0], [63.7, 15236.0], [63.8, 15236.0], [63.9, 15236.0], [64.0, 15242.0], [64.1, 15242.0], [64.2, 15242.0], [64.3, 15242.0], [64.4, 15242.0], [64.5, 15242.0], [64.6, 15242.0], [64.7, 15242.0], [64.8, 15242.0], [64.9, 15242.0], [65.0, 15338.0], [65.1, 15338.0], [65.2, 15338.0], [65.3, 15338.0], [65.4, 15338.0], [65.5, 15338.0], [65.6, 15338.0], [65.7, 15338.0], [65.8, 15338.0], [65.9, 15338.0], [66.0, 15424.0], [66.1, 15424.0], [66.2, 15424.0], [66.3, 15424.0], [66.4, 15424.0], [66.5, 15424.0], [66.6, 15424.0], [66.7, 15424.0], [66.8, 15424.0], [66.9, 15424.0], [67.0, 15431.0], [67.1, 15431.0], [67.2, 15431.0], [67.3, 15431.0], [67.4, 15431.0], [67.5, 15431.0], [67.6, 15431.0], [67.7, 15431.0], [67.8, 15431.0], [67.9, 15431.0], [68.0, 15439.0], [68.1, 15439.0], [68.2, 15439.0], [68.3, 15439.0], [68.4, 15439.0], [68.5, 15439.0], [68.6, 15439.0], [68.7, 15439.0], [68.8, 15439.0], [68.9, 15439.0], [69.0, 15536.0], [69.1, 15536.0], [69.2, 15536.0], [69.3, 15536.0], [69.4, 15536.0], [69.5, 15536.0], [69.6, 15536.0], [69.7, 15536.0], [69.8, 15536.0], [69.9, 15536.0], [70.0, 15640.0], [70.1, 15640.0], [70.2, 15640.0], [70.3, 15640.0], [70.4, 15640.0], [70.5, 15640.0], [70.6, 15640.0], [70.7, 15640.0], [70.8, 15640.0], [70.9, 15640.0], [71.0, 15647.0], [71.1, 15647.0], [71.2, 15647.0], [71.3, 15647.0], [71.4, 15647.0], [71.5, 15647.0], [71.6, 15647.0], [71.7, 15647.0], [71.8, 15647.0], [71.9, 15647.0], [72.0, 15657.0], [72.1, 15657.0], [72.2, 15657.0], [72.3, 15657.0], [72.4, 15657.0], [72.5, 15657.0], [72.6, 15657.0], [72.7, 15657.0], [72.8, 15657.0], [72.9, 15657.0], [73.0, 15666.0], [73.1, 15666.0], [73.2, 15666.0], [73.3, 15666.0], [73.4, 15666.0], [73.5, 15666.0], [73.6, 15666.0], [73.7, 15666.0], [73.8, 15666.0], [73.9, 15666.0], [74.0, 15766.0], [74.1, 15766.0], [74.2, 15766.0], [74.3, 15766.0], [74.4, 15766.0], [74.5, 15766.0], [74.6, 15766.0], [74.7, 15766.0], [74.8, 15766.0], [74.9, 15766.0], [75.0, 15779.0], [75.1, 15779.0], [75.2, 15779.0], [75.3, 15779.0], [75.4, 15779.0], [75.5, 15779.0], [75.6, 15779.0], [75.7, 15779.0], [75.8, 15779.0], [75.9, 15779.0], [76.0, 15841.0], [76.1, 15841.0], [76.2, 15841.0], [76.3, 15841.0], [76.4, 15841.0], [76.5, 15841.0], [76.6, 15841.0], [76.7, 15841.0], [76.8, 15841.0], [76.9, 15841.0], [77.0, 15847.0], [77.1, 15847.0], [77.2, 15847.0], [77.3, 15847.0], [77.4, 15847.0], [77.5, 15847.0], [77.6, 15847.0], [77.7, 15847.0], [77.8, 15847.0], [77.9, 15847.0], [78.0, 15855.0], [78.1, 15855.0], [78.2, 15855.0], [78.3, 15855.0], [78.4, 15855.0], [78.5, 15855.0], [78.6, 15855.0], [78.7, 15855.0], [78.8, 15855.0], [78.9, 15855.0], [79.0, 15881.0], [79.1, 15881.0], [79.2, 15881.0], [79.3, 15881.0], [79.4, 15881.0], [79.5, 15881.0], [79.6, 15881.0], [79.7, 15881.0], [79.8, 15881.0], [79.9, 15881.0], [80.0, 15956.0], [80.1, 15956.0], [80.2, 15956.0], [80.3, 15956.0], [80.4, 15956.0], [80.5, 15956.0], [80.6, 15956.0], [80.7, 15956.0], [80.8, 15956.0], [80.9, 15956.0], [81.0, 15972.0], [81.1, 15972.0], [81.2, 15972.0], [81.3, 15972.0], [81.4, 15972.0], [81.5, 15972.0], [81.6, 15972.0], [81.7, 15972.0], [81.8, 15972.0], [81.9, 15972.0], [82.0, 16049.0], [82.1, 16049.0], [82.2, 16049.0], [82.3, 16049.0], [82.4, 16049.0], [82.5, 16049.0], [82.6, 16049.0], [82.7, 16049.0], [82.8, 16049.0], [82.9, 16049.0], [83.0, 16059.0], [83.1, 16059.0], [83.2, 16059.0], [83.3, 16059.0], [83.4, 16059.0], [83.5, 16059.0], [83.6, 16059.0], [83.7, 16059.0], [83.8, 16059.0], [83.9, 16059.0], [84.0, 16138.0], [84.1, 16138.0], [84.2, 16138.0], [84.3, 16138.0], [84.4, 16138.0], [84.5, 16138.0], [84.6, 16138.0], [84.7, 16138.0], [84.8, 16138.0], [84.9, 16138.0], [85.0, 16149.0], [85.1, 16149.0], [85.2, 16149.0], [85.3, 16149.0], [85.4, 16149.0], [85.5, 16149.0], [85.6, 16149.0], [85.7, 16149.0], [85.8, 16149.0], [85.9, 16149.0], [86.0, 16284.0], [86.1, 16284.0], [86.2, 16284.0], [86.3, 16284.0], [86.4, 16284.0], [86.5, 16284.0], [86.6, 16284.0], [86.7, 16284.0], [86.8, 16284.0], [86.9, 16284.0], [87.0, 16286.0], [87.1, 16286.0], [87.2, 16286.0], [87.3, 16286.0], [87.4, 16286.0], [87.5, 16286.0], [87.6, 16286.0], [87.7, 16286.0], [87.8, 16286.0], [87.9, 16286.0], [88.0, 16345.0], [88.1, 16345.0], [88.2, 16345.0], [88.3, 16345.0], [88.4, 16345.0], [88.5, 16345.0], [88.6, 16345.0], [88.7, 16345.0], [88.8, 16345.0], [88.9, 16345.0], [89.0, 16366.0], [89.1, 16366.0], [89.2, 16366.0], [89.3, 16366.0], [89.4, 16366.0], [89.5, 16366.0], [89.6, 16366.0], [89.7, 16366.0], [89.8, 16366.0], [89.9, 16366.0], [90.0, 16372.0], [90.1, 16372.0], [90.2, 16372.0], [90.3, 16372.0], [90.4, 16372.0], [90.5, 16372.0], [90.6, 16372.0], [90.7, 16372.0], [90.8, 16372.0], [90.9, 16372.0], [91.0, 16380.0], [91.1, 16380.0], [91.2, 16380.0], [91.3, 16380.0], [91.4, 16380.0], [91.5, 16380.0], [91.6, 16380.0], [91.7, 16380.0], [91.8, 16380.0], [91.9, 16380.0], [92.0, 16460.0], [92.1, 16460.0], [92.2, 16460.0], [92.3, 16460.0], [92.4, 16460.0], [92.5, 16460.0], [92.6, 16460.0], [92.7, 16460.0], [92.8, 16460.0], [92.9, 16460.0], [93.0, 16491.0], [93.1, 16491.0], [93.2, 16491.0], [93.3, 16491.0], [93.4, 16491.0], [93.5, 16491.0], [93.6, 16491.0], [93.7, 16491.0], [93.8, 16491.0], [93.9, 16491.0], [94.0, 16568.0], [94.1, 16568.0], [94.2, 16568.0], [94.3, 16568.0], [94.4, 16568.0], [94.5, 16568.0], [94.6, 16568.0], [94.7, 16568.0], [94.8, 16568.0], [94.9, 16568.0], [95.0, 16570.0], [95.1, 16570.0], [95.2, 16570.0], [95.3, 16570.0], [95.4, 16570.0], [95.5, 16570.0], [95.6, 16570.0], [95.7, 16570.0], [95.8, 16570.0], [95.9, 16570.0], [96.0, 16575.0], [96.1, 16575.0], [96.2, 16575.0], [96.3, 16575.0], [96.4, 16575.0], [96.5, 16575.0], [96.6, 16575.0], [96.7, 16575.0], [96.8, 16575.0], [96.9, 16575.0], [97.0, 16584.0], [97.1, 16584.0], [97.2, 16584.0], [97.3, 16584.0], [97.4, 16584.0], [97.5, 16584.0], [97.6, 16584.0], [97.7, 16584.0], [97.8, 16584.0], [97.9, 16584.0], [98.0, 16588.0], [98.1, 16588.0], [98.2, 16588.0], [98.3, 16588.0], [98.4, 16588.0], [98.5, 16588.0], [98.6, 16588.0], [98.7, 16588.0], [98.8, 16588.0], [98.9, 16588.0], [99.0, 16663.0], [99.1, 16663.0], [99.2, 16663.0], [99.3, 16663.0], [99.4, 16663.0], [99.5, 16663.0], [99.6, 16663.0], [99.7, 16663.0], [99.8, 16663.0], [99.9, 16663.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 11900.0, "maxY": 5.0, "series": [{"data": [[11900.0, 1.0], [12100.0, 3.0], [12200.0, 2.0], [12300.0, 1.0], [12400.0, 1.0], [12500.0, 2.0], [12600.0, 3.0], [12700.0, 2.0], [12800.0, 2.0], [12900.0, 1.0], [13000.0, 2.0], [13200.0, 3.0], [13300.0, 2.0], [13400.0, 2.0], [13500.0, 1.0], [13600.0, 1.0], [13700.0, 1.0], [13800.0, 4.0], [13900.0, 1.0], [14000.0, 2.0], [14100.0, 3.0], [14200.0, 2.0], [14300.0, 1.0], [14400.0, 3.0], [14500.0, 1.0], [14600.0, 3.0], [14700.0, 2.0], [14800.0, 2.0], [14900.0, 2.0], [15000.0, 3.0], [15100.0, 1.0], [15200.0, 5.0], [15300.0, 1.0], [15400.0, 3.0], [15500.0, 1.0], [15600.0, 4.0], [15700.0, 2.0], [15800.0, 4.0], [15900.0, 2.0], [16000.0, 2.0], [16100.0, 2.0], [16200.0, 2.0], [16300.0, 4.0], [16400.0, 2.0], [16500.0, 5.0], [16600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 50.539999999999985, "minX": 1.622487E12, "maxY": 50.539999999999985, "series": [{"data": [[1.622487E12, 50.539999999999985]], "isOverall": false, "label": "oracleADW", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.622487E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 11991.0, "minX": 1.0, "maxY": 16663.0, "series": [{"data": [[2.0, 16588.0], [3.0, 16570.0], [4.0, 16584.0], [5.0, 16575.0], [6.0, 16568.0], [7.0, 16491.0], [8.0, 16460.0], [9.0, 16380.0], [10.0, 16372.0], [11.0, 16345.0], [12.0, 16366.0], [13.0, 16286.0], [14.0, 16284.0], [15.0, 16149.0], [16.0, 16138.0], [18.0, 16054.0], [20.0, 15964.0], [21.0, 15881.0], [22.0, 15847.0], [23.0, 15855.0], [24.0, 15841.0], [25.0, 15779.0], [26.0, 15766.0], [27.0, 15657.0], [28.0, 15666.0], [29.0, 15647.0], [30.0, 15640.0], [31.0, 15536.0], [33.0, 15424.0], [32.0, 15439.0], [35.0, 15338.0], [34.0, 15431.0], [37.0, 15234.0], [36.0, 15242.0], [39.0, 15232.0], [38.0, 15236.0], [41.0, 15114.0], [40.0, 15222.0], [43.0, 15019.0], [42.0, 15045.0], [45.0, 14924.0], [44.0, 15007.0], [46.0, 14906.0], [49.0, 14794.0], [48.0, 14802.0], [50.0, 14702.0], [53.0, 14618.0], [52.0, 14623.0], [55.0, 14496.0], [54.0, 14508.0], [57.0, 14403.0], [56.0, 14420.0], [59.0, 14285.0], [58.0, 14301.0], [61.0, 14194.0], [60.0, 14210.0], [63.0, 14101.0], [62.0, 14107.0], [67.0, 13878.0], [66.0, 13993.0], [65.0, 14077.0], [64.0, 14079.0], [71.0, 13787.0], [70.0, 13805.0], [69.0, 13873.0], [68.0, 13882.0], [75.0, 13479.0], [74.0, 13489.0], [73.0, 13581.0], [72.0, 13679.0], [79.0, 13283.0], [78.0, 13273.0], [77.0, 13383.0], [76.0, 13366.0], [83.0, 12959.0], [82.0, 13058.0], [81.0, 13071.0], [80.0, 13260.0], [87.0, 12766.0], [86.0, 12777.0], [85.0, 12877.0], [84.0, 12889.0], [91.0, 12569.0], [90.0, 12651.0], [89.0, 12663.0], [88.0, 12693.0], [95.0, 12253.0], [94.0, 12348.0], [93.0, 12456.0], [92.0, 12555.0], [99.0, 12116.0], [98.0, 12134.0], [97.0, 12154.0], [96.0, 12231.0], [100.0, 11991.0], [1.0, 16663.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.539999999999985, 14571.500000000002]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 380.0, "minX": 1.622487E12, "maxY": 25098.333333333332, "series": [{"data": [[1.622487E12, 25098.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.622487E12, 380.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.622487E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 14571.500000000002, "minX": 1.622487E12, "maxY": 14571.500000000002, "series": [{"data": [[1.622487E12, 14571.500000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.622487E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 14289.54, "minX": 1.622487E12, "maxY": 14289.54, "series": [{"data": [[1.622487E12, 14289.54]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.622487E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 3711.94, "minX": 1.622487E12, "maxY": 3711.94, "series": [{"data": [[1.622487E12, 3711.94]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.622487E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 11991.0, "minX": 1.622487E12, "maxY": 16663.0, "series": [{"data": [[1.622487E12, 16663.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.622487E12, 16371.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.622487E12, 16662.25]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.622487E12, 16569.9]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.622487E12, 11991.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.622487E12, 14666.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.622487E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 11991.0, "minX": 1.0, "maxY": 16376.0, "series": [{"data": [[1.0, 11991.0], [17.0, 13008.5], [18.0, 16376.0], [21.0, 14496.0], [26.0, 15487.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 11723.0, "minX": 1.0, "maxY": 16092.0, "series": [{"data": [[1.0, 11723.0], [17.0, 12732.5], [18.0, 16092.0], [21.0, 14221.0], [26.0, 15206.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.622487E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.622487E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.622487E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.622487E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.622487E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.622487E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.622487E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.622487E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.622487E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.622487E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.622487E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.622487E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

