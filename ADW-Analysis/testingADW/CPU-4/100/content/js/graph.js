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
        data: {"result": {"minY": 9653.0, "minX": 0.0, "maxY": 13845.0, "series": [{"data": [[0.0, 9653.0], [0.1, 9653.0], [0.2, 9653.0], [0.3, 9653.0], [0.4, 9653.0], [0.5, 9653.0], [0.6, 9653.0], [0.7, 9653.0], [0.8, 9653.0], [0.9, 9653.0], [1.0, 9846.0], [1.1, 9846.0], [1.2, 9846.0], [1.3, 9846.0], [1.4, 9846.0], [1.5, 9846.0], [1.6, 9846.0], [1.7, 9846.0], [1.8, 9846.0], [1.9, 9846.0], [2.0, 9859.0], [2.1, 9859.0], [2.2, 9859.0], [2.3, 9859.0], [2.4, 9859.0], [2.5, 9859.0], [2.6, 9859.0], [2.7, 9859.0], [2.8, 9859.0], [2.9, 9859.0], [3.0, 9927.0], [3.1, 9927.0], [3.2, 9927.0], [3.3, 9927.0], [3.4, 9927.0], [3.5, 9927.0], [3.6, 9927.0], [3.7, 9927.0], [3.8, 9927.0], [3.9, 9927.0], [4.0, 9950.0], [4.1, 9950.0], [4.2, 9950.0], [4.3, 9950.0], [4.4, 9950.0], [4.5, 9950.0], [4.6, 9950.0], [4.7, 9950.0], [4.8, 9950.0], [4.9, 9950.0], [5.0, 10023.0], [5.1, 10023.0], [5.2, 10023.0], [5.3, 10023.0], [5.4, 10023.0], [5.5, 10023.0], [5.6, 10023.0], [5.7, 10023.0], [5.8, 10023.0], [5.9, 10023.0], [6.0, 10043.0], [6.1, 10043.0], [6.2, 10043.0], [6.3, 10043.0], [6.4, 10043.0], [6.5, 10043.0], [6.6, 10043.0], [6.7, 10043.0], [6.8, 10043.0], [6.9, 10043.0], [7.0, 10048.0], [7.1, 10048.0], [7.2, 10048.0], [7.3, 10048.0], [7.4, 10048.0], [7.5, 10048.0], [7.6, 10048.0], [7.7, 10048.0], [7.8, 10048.0], [7.9, 10048.0], [8.0, 10132.0], [8.1, 10132.0], [8.2, 10132.0], [8.3, 10132.0], [8.4, 10132.0], [8.5, 10132.0], [8.6, 10132.0], [8.7, 10132.0], [8.8, 10132.0], [8.9, 10132.0], [9.0, 10140.0], [9.1, 10140.0], [9.2, 10140.0], [9.3, 10140.0], [9.4, 10140.0], [9.5, 10140.0], [9.6, 10140.0], [9.7, 10140.0], [9.8, 10140.0], [9.9, 10140.0], [10.0, 10151.0], [10.1, 10151.0], [10.2, 10151.0], [10.3, 10151.0], [10.4, 10151.0], [10.5, 10151.0], [10.6, 10151.0], [10.7, 10151.0], [10.8, 10151.0], [10.9, 10151.0], [11.0, 10250.0], [11.1, 10250.0], [11.2, 10250.0], [11.3, 10250.0], [11.4, 10250.0], [11.5, 10250.0], [11.6, 10250.0], [11.7, 10250.0], [11.8, 10250.0], [11.9, 10250.0], [12.0, 10360.0], [12.1, 10360.0], [12.2, 10360.0], [12.3, 10360.0], [12.4, 10360.0], [12.5, 10360.0], [12.6, 10360.0], [12.7, 10360.0], [12.8, 10360.0], [12.9, 10360.0], [13.0, 10362.0], [13.1, 10362.0], [13.2, 10362.0], [13.3, 10362.0], [13.4, 10362.0], [13.5, 10362.0], [13.6, 10362.0], [13.7, 10362.0], [13.8, 10362.0], [13.9, 10362.0], [14.0, 10364.0], [14.1, 10364.0], [14.2, 10364.0], [14.3, 10364.0], [14.4, 10364.0], [14.5, 10364.0], [14.6, 10364.0], [14.7, 10364.0], [14.8, 10364.0], [14.9, 10364.0], [15.0, 10371.0], [15.1, 10371.0], [15.2, 10371.0], [15.3, 10371.0], [15.4, 10371.0], [15.5, 10371.0], [15.6, 10371.0], [15.7, 10371.0], [15.8, 10371.0], [15.9, 10371.0], [16.0, 10381.0], [16.1, 10381.0], [16.2, 10381.0], [16.3, 10381.0], [16.4, 10381.0], [16.5, 10381.0], [16.6, 10381.0], [16.7, 10381.0], [16.8, 10381.0], [16.9, 10381.0], [17.0, 10431.0], [17.1, 10431.0], [17.2, 10431.0], [17.3, 10431.0], [17.4, 10431.0], [17.5, 10431.0], [17.6, 10431.0], [17.7, 10431.0], [17.8, 10431.0], [17.9, 10431.0], [18.0, 10567.0], [18.1, 10567.0], [18.2, 10567.0], [18.3, 10567.0], [18.4, 10567.0], [18.5, 10567.0], [18.6, 10567.0], [18.7, 10567.0], [18.8, 10567.0], [18.9, 10567.0], [19.0, 10654.0], [19.1, 10654.0], [19.2, 10654.0], [19.3, 10654.0], [19.4, 10654.0], [19.5, 10654.0], [19.6, 10654.0], [19.7, 10654.0], [19.8, 10654.0], [19.9, 10654.0], [20.0, 10669.0], [20.1, 10669.0], [20.2, 10669.0], [20.3, 10669.0], [20.4, 10669.0], [20.5, 10669.0], [20.6, 10669.0], [20.7, 10669.0], [20.8, 10669.0], [20.9, 10669.0], [21.0, 10751.0], [21.1, 10751.0], [21.2, 10751.0], [21.3, 10751.0], [21.4, 10751.0], [21.5, 10751.0], [21.6, 10751.0], [21.7, 10751.0], [21.8, 10751.0], [21.9, 10751.0], [22.0, 10759.0], [22.1, 10759.0], [22.2, 10759.0], [22.3, 10759.0], [22.4, 10759.0], [22.5, 10759.0], [22.6, 10759.0], [22.7, 10759.0], [22.8, 10759.0], [22.9, 10759.0], [23.0, 10767.0], [23.1, 10767.0], [23.2, 10767.0], [23.3, 10767.0], [23.4, 10767.0], [23.5, 10767.0], [23.6, 10767.0], [23.7, 10767.0], [23.8, 10767.0], [23.9, 10767.0], [24.0, 10867.0], [24.1, 10867.0], [24.2, 10867.0], [24.3, 10867.0], [24.4, 10867.0], [24.5, 10867.0], [24.6, 10867.0], [24.7, 10867.0], [24.8, 10867.0], [24.9, 10867.0], [25.0, 10874.0], [25.1, 10874.0], [25.2, 10874.0], [25.3, 10874.0], [25.4, 10874.0], [25.5, 10874.0], [25.6, 10874.0], [25.7, 10874.0], [25.8, 10874.0], [25.9, 10874.0], [26.0, 10879.0], [26.1, 10879.0], [26.2, 10879.0], [26.3, 10879.0], [26.4, 10879.0], [26.5, 10879.0], [26.6, 10879.0], [26.7, 10879.0], [26.8, 10879.0], [26.9, 10879.0], [27.0, 10971.0], [27.1, 10971.0], [27.2, 10971.0], [27.3, 10971.0], [27.4, 10971.0], [27.5, 10971.0], [27.6, 10971.0], [27.7, 10971.0], [27.8, 10971.0], [27.9, 10971.0], [28.0, 10973.0], [28.1, 10973.0], [28.2, 10973.0], [28.3, 10973.0], [28.4, 10973.0], [28.5, 10973.0], [28.6, 10973.0], [28.7, 10973.0], [28.8, 10973.0], [28.9, 10973.0], [29.0, 10993.0], [29.1, 10993.0], [29.2, 10993.0], [29.3, 10993.0], [29.4, 10993.0], [29.5, 10993.0], [29.6, 10993.0], [29.7, 10993.0], [29.8, 10993.0], [29.9, 10993.0], [30.0, 11069.0], [30.1, 11069.0], [30.2, 11069.0], [30.3, 11069.0], [30.4, 11069.0], [30.5, 11069.0], [30.6, 11069.0], [30.7, 11069.0], [30.8, 11069.0], [30.9, 11069.0], [31.0, 11177.0], [31.1, 11177.0], [31.2, 11177.0], [31.3, 11177.0], [31.4, 11177.0], [31.5, 11177.0], [31.6, 11177.0], [31.7, 11177.0], [31.8, 11177.0], [31.9, 11177.0], [32.0, 11267.0], [32.1, 11267.0], [32.2, 11267.0], [32.3, 11267.0], [32.4, 11267.0], [32.5, 11267.0], [32.6, 11267.0], [32.7, 11267.0], [32.8, 11267.0], [32.9, 11267.0], [33.0, 11269.0], [33.1, 11269.0], [33.2, 11269.0], [33.3, 11269.0], [33.4, 11269.0], [33.5, 11269.0], [33.6, 11269.0], [33.7, 11269.0], [33.8, 11269.0], [33.9, 11269.0], [34.0, 11276.0], [34.1, 11276.0], [34.2, 11276.0], [34.3, 11276.0], [34.4, 11276.0], [34.5, 11276.0], [34.6, 11276.0], [34.7, 11276.0], [34.8, 11276.0], [34.9, 11276.0], [35.0, 11288.0], [35.1, 11288.0], [35.2, 11288.0], [35.3, 11288.0], [35.4, 11288.0], [35.5, 11288.0], [35.6, 11288.0], [35.7, 11288.0], [35.8, 11288.0], [35.9, 11288.0], [36.0, 11296.0], [36.1, 11296.0], [36.2, 11296.0], [36.3, 11296.0], [36.4, 11296.0], [36.5, 11296.0], [36.6, 11296.0], [36.7, 11296.0], [36.8, 11296.0], [36.9, 11296.0], [37.0, 11370.0], [37.1, 11370.0], [37.2, 11370.0], [37.3, 11370.0], [37.4, 11370.0], [37.5, 11370.0], [37.6, 11370.0], [37.7, 11370.0], [37.8, 11370.0], [37.9, 11370.0], [38.0, 11372.0], [38.1, 11372.0], [38.2, 11372.0], [38.3, 11372.0], [38.4, 11372.0], [38.5, 11372.0], [38.6, 11372.0], [38.7, 11372.0], [38.8, 11372.0], [38.9, 11372.0], [39.0, 11382.0], [39.1, 11382.0], [39.2, 11382.0], [39.3, 11382.0], [39.4, 11382.0], [39.5, 11382.0], [39.6, 11382.0], [39.7, 11382.0], [39.8, 11382.0], [39.9, 11382.0], [40.0, 11388.0], [40.1, 11388.0], [40.2, 11388.0], [40.3, 11388.0], [40.4, 11388.0], [40.5, 11388.0], [40.6, 11388.0], [40.7, 11388.0], [40.8, 11388.0], [40.9, 11388.0], [41.0, 11480.0], [41.1, 11480.0], [41.2, 11480.0], [41.3, 11480.0], [41.4, 11480.0], [41.5, 11480.0], [41.6, 11480.0], [41.7, 11480.0], [41.8, 11480.0], [41.9, 11480.0], [42.0, 11510.0], [42.1, 11510.0], [42.2, 11510.0], [42.3, 11510.0], [42.4, 11510.0], [42.5, 11510.0], [42.6, 11510.0], [42.7, 11510.0], [42.8, 11510.0], [42.9, 11510.0], [43.0, 11574.0], [43.1, 11574.0], [43.2, 11574.0], [43.3, 11574.0], [43.4, 11574.0], [43.5, 11574.0], [43.6, 11574.0], [43.7, 11574.0], [43.8, 11574.0], [43.9, 11574.0], [44.0, 11590.0], [44.1, 11590.0], [44.2, 11590.0], [44.3, 11590.0], [44.4, 11590.0], [44.5, 11590.0], [44.6, 11590.0], [44.7, 11590.0], [44.8, 11590.0], [44.9, 11590.0], [45.0, 11610.0], [45.1, 11610.0], [45.2, 11610.0], [45.3, 11610.0], [45.4, 11610.0], [45.5, 11610.0], [45.6, 11610.0], [45.7, 11610.0], [45.8, 11610.0], [45.9, 11610.0], [46.0, 11708.0], [46.1, 11708.0], [46.2, 11708.0], [46.3, 11708.0], [46.4, 11708.0], [46.5, 11708.0], [46.6, 11708.0], [46.7, 11708.0], [46.8, 11708.0], [46.9, 11708.0], [47.0, 11787.0], [47.1, 11787.0], [47.2, 11787.0], [47.3, 11787.0], [47.4, 11787.0], [47.5, 11787.0], [47.6, 11787.0], [47.7, 11787.0], [47.8, 11787.0], [47.9, 11787.0], [48.0, 11798.0], [48.1, 11798.0], [48.2, 11798.0], [48.3, 11798.0], [48.4, 11798.0], [48.5, 11798.0], [48.6, 11798.0], [48.7, 11798.0], [48.8, 11798.0], [48.9, 11798.0], [49.0, 11806.0], [49.1, 11806.0], [49.2, 11806.0], [49.3, 11806.0], [49.4, 11806.0], [49.5, 11806.0], [49.6, 11806.0], [49.7, 11806.0], [49.8, 11806.0], [49.9, 11806.0], [50.0, 11811.0], [50.1, 11811.0], [50.2, 11811.0], [50.3, 11811.0], [50.4, 11811.0], [50.5, 11811.0], [50.6, 11811.0], [50.7, 11811.0], [50.8, 11811.0], [50.9, 11811.0], [51.0, 11837.0], [51.1, 11837.0], [51.2, 11837.0], [51.3, 11837.0], [51.4, 11837.0], [51.5, 11837.0], [51.6, 11837.0], [51.7, 11837.0], [51.8, 11837.0], [51.9, 11837.0], [52.0, 11910.0], [52.1, 11910.0], [52.2, 11910.0], [52.3, 11910.0], [52.4, 11910.0], [52.5, 11910.0], [52.6, 11910.0], [52.7, 11910.0], [52.8, 11910.0], [52.9, 11910.0], [53.0, 11994.0], [53.1, 11994.0], [53.2, 11994.0], [53.3, 11994.0], [53.4, 11994.0], [53.5, 11994.0], [53.6, 11994.0], [53.7, 11994.0], [53.8, 11994.0], [53.9, 11994.0], [54.0, 11999.0], [54.1, 11999.0], [54.2, 11999.0], [54.3, 11999.0], [54.4, 11999.0], [54.5, 11999.0], [54.6, 11999.0], [54.7, 11999.0], [54.8, 11999.0], [54.9, 11999.0], [55.0, 12009.0], [55.1, 12009.0], [55.2, 12009.0], [55.3, 12009.0], [55.4, 12009.0], [55.5, 12009.0], [55.6, 12009.0], [55.7, 12009.0], [55.8, 12009.0], [55.9, 12009.0], [56.0, 12203.0], [56.1, 12203.0], [56.2, 12203.0], [56.3, 12203.0], [56.4, 12203.0], [56.5, 12203.0], [56.6, 12203.0], [56.7, 12203.0], [56.8, 12203.0], [56.9, 12203.0], [57.0, 12294.0], [57.1, 12294.0], [57.2, 12294.0], [57.3, 12294.0], [57.4, 12294.0], [57.5, 12294.0], [57.6, 12294.0], [57.7, 12294.0], [57.8, 12294.0], [57.9, 12294.0], [58.0, 12405.0], [58.1, 12405.0], [58.2, 12405.0], [58.3, 12405.0], [58.4, 12405.0], [58.5, 12405.0], [58.6, 12405.0], [58.7, 12405.0], [58.8, 12405.0], [58.9, 12405.0], [59.0, 12511.0], [59.1, 12511.0], [59.2, 12511.0], [59.3, 12511.0], [59.4, 12511.0], [59.5, 12511.0], [59.6, 12511.0], [59.7, 12511.0], [59.8, 12511.0], [59.9, 12511.0], [60.0, 12559.0], [60.1, 12559.0], [60.2, 12559.0], [60.3, 12559.0], [60.4, 12559.0], [60.5, 12559.0], [60.6, 12559.0], [60.7, 12559.0], [60.8, 12559.0], [60.9, 12559.0], [61.0, 12615.0], [61.1, 12615.0], [61.2, 12615.0], [61.3, 12615.0], [61.4, 12615.0], [61.5, 12615.0], [61.6, 12615.0], [61.7, 12615.0], [61.8, 12615.0], [61.9, 12615.0], [62.0, 12633.0], [62.1, 12633.0], [62.2, 12633.0], [62.3, 12633.0], [62.4, 12633.0], [62.5, 12633.0], [62.6, 12633.0], [62.7, 12633.0], [62.8, 12633.0], [62.9, 12633.0], [63.0, 12634.0], [63.1, 12634.0], [63.2, 12634.0], [63.3, 12634.0], [63.4, 12634.0], [63.5, 12634.0], [63.6, 12634.0], [63.7, 12634.0], [63.8, 12634.0], [63.9, 12634.0], [64.0, 12637.0], [64.1, 12637.0], [64.2, 12637.0], [64.3, 12637.0], [64.4, 12637.0], [64.5, 12637.0], [64.6, 12637.0], [64.7, 12637.0], [64.8, 12637.0], [64.9, 12637.0], [65.0, 12638.0], [65.1, 12638.0], [65.2, 12638.0], [65.3, 12638.0], [65.4, 12638.0], [65.5, 12638.0], [65.6, 12638.0], [65.7, 12638.0], [65.8, 12638.0], [65.9, 12638.0], [66.0, 12641.0], [66.1, 12641.0], [66.2, 12641.0], [66.3, 12641.0], [66.4, 12641.0], [66.5, 12641.0], [66.6, 12641.0], [66.7, 12641.0], [66.8, 12641.0], [66.9, 12641.0], [67.0, 12728.0], [67.1, 12728.0], [67.2, 12728.0], [67.3, 12728.0], [67.4, 12728.0], [67.5, 12728.0], [67.6, 12728.0], [67.7, 12728.0], [67.8, 12728.0], [67.9, 12728.0], [68.0, 12732.0], [68.1, 12732.0], [68.2, 12732.0], [68.3, 12732.0], [68.4, 12732.0], [68.5, 12732.0], [68.6, 12732.0], [68.7, 12732.0], [68.8, 12732.0], [68.9, 12732.0], [69.0, 12757.0], [69.1, 12757.0], [69.2, 12757.0], [69.3, 12757.0], [69.4, 12757.0], [69.5, 12757.0], [69.6, 12757.0], [69.7, 12757.0], [69.8, 12757.0], [69.9, 12757.0], [70.0, 12763.0], [70.1, 12763.0], [70.2, 12763.0], [70.3, 12763.0], [70.4, 12763.0], [70.5, 12763.0], [70.6, 12763.0], [70.7, 12763.0], [70.8, 12763.0], [70.9, 12763.0], [71.0, 12767.0], [71.1, 12767.0], [71.2, 12767.0], [71.3, 12767.0], [71.4, 12767.0], [71.5, 12767.0], [71.6, 12767.0], [71.7, 12767.0], [71.8, 12767.0], [71.9, 12767.0], [72.0, 12820.0], [72.1, 12820.0], [72.2, 12820.0], [72.3, 12820.0], [72.4, 12820.0], [72.5, 12820.0], [72.6, 12820.0], [72.7, 12820.0], [72.8, 12820.0], [72.9, 12820.0], [73.0, 12820.0], [73.1, 12820.0], [73.2, 12820.0], [73.3, 12820.0], [73.4, 12820.0], [73.5, 12820.0], [73.6, 12820.0], [73.7, 12820.0], [73.8, 12820.0], [73.9, 12820.0], [74.0, 12921.0], [74.1, 12921.0], [74.2, 12921.0], [74.3, 12921.0], [74.4, 12921.0], [74.5, 12921.0], [74.6, 12921.0], [74.7, 12921.0], [74.8, 12921.0], [74.9, 12921.0], [75.0, 12943.0], [75.1, 12943.0], [75.2, 12943.0], [75.3, 12943.0], [75.4, 12943.0], [75.5, 12943.0], [75.6, 12943.0], [75.7, 12943.0], [75.8, 12943.0], [75.9, 12943.0], [76.0, 13021.0], [76.1, 13021.0], [76.2, 13021.0], [76.3, 13021.0], [76.4, 13021.0], [76.5, 13021.0], [76.6, 13021.0], [76.7, 13021.0], [76.8, 13021.0], [76.9, 13021.0], [77.0, 13125.0], [77.1, 13125.0], [77.2, 13125.0], [77.3, 13125.0], [77.4, 13125.0], [77.5, 13125.0], [77.6, 13125.0], [77.7, 13125.0], [77.8, 13125.0], [77.9, 13125.0], [78.0, 13152.0], [78.1, 13152.0], [78.2, 13152.0], [78.3, 13152.0], [78.4, 13152.0], [78.5, 13152.0], [78.6, 13152.0], [78.7, 13152.0], [78.8, 13152.0], [78.9, 13152.0], [79.0, 13155.0], [79.1, 13155.0], [79.2, 13155.0], [79.3, 13155.0], [79.4, 13155.0], [79.5, 13155.0], [79.6, 13155.0], [79.7, 13155.0], [79.8, 13155.0], [79.9, 13155.0], [80.0, 13155.0], [80.1, 13155.0], [80.2, 13155.0], [80.3, 13155.0], [80.4, 13155.0], [80.5, 13155.0], [80.6, 13155.0], [80.7, 13155.0], [80.8, 13155.0], [80.9, 13155.0], [81.0, 13167.0], [81.1, 13167.0], [81.2, 13167.0], [81.3, 13167.0], [81.4, 13167.0], [81.5, 13167.0], [81.6, 13167.0], [81.7, 13167.0], [81.8, 13167.0], [81.9, 13167.0], [82.0, 13171.0], [82.1, 13171.0], [82.2, 13171.0], [82.3, 13171.0], [82.4, 13171.0], [82.5, 13171.0], [82.6, 13171.0], [82.7, 13171.0], [82.8, 13171.0], [82.9, 13171.0], [83.0, 13182.0], [83.1, 13182.0], [83.2, 13182.0], [83.3, 13182.0], [83.4, 13182.0], [83.5, 13182.0], [83.6, 13182.0], [83.7, 13182.0], [83.8, 13182.0], [83.9, 13182.0], [84.0, 13229.0], [84.1, 13229.0], [84.2, 13229.0], [84.3, 13229.0], [84.4, 13229.0], [84.5, 13229.0], [84.6, 13229.0], [84.7, 13229.0], [84.8, 13229.0], [84.9, 13229.0], [85.0, 13235.0], [85.1, 13235.0], [85.2, 13235.0], [85.3, 13235.0], [85.4, 13235.0], [85.5, 13235.0], [85.6, 13235.0], [85.7, 13235.0], [85.8, 13235.0], [85.9, 13235.0], [86.0, 13324.0], [86.1, 13324.0], [86.2, 13324.0], [86.3, 13324.0], [86.4, 13324.0], [86.5, 13324.0], [86.6, 13324.0], [86.7, 13324.0], [86.8, 13324.0], [86.9, 13324.0], [87.0, 13332.0], [87.1, 13332.0], [87.2, 13332.0], [87.3, 13332.0], [87.4, 13332.0], [87.5, 13332.0], [87.6, 13332.0], [87.7, 13332.0], [87.8, 13332.0], [87.9, 13332.0], [88.0, 13337.0], [88.1, 13337.0], [88.2, 13337.0], [88.3, 13337.0], [88.4, 13337.0], [88.5, 13337.0], [88.6, 13337.0], [88.7, 13337.0], [88.8, 13337.0], [88.9, 13337.0], [89.0, 13425.0], [89.1, 13425.0], [89.2, 13425.0], [89.3, 13425.0], [89.4, 13425.0], [89.5, 13425.0], [89.6, 13425.0], [89.7, 13425.0], [89.8, 13425.0], [89.9, 13425.0], [90.0, 13435.0], [90.1, 13435.0], [90.2, 13435.0], [90.3, 13435.0], [90.4, 13435.0], [90.5, 13435.0], [90.6, 13435.0], [90.7, 13435.0], [90.8, 13435.0], [90.9, 13435.0], [91.0, 13526.0], [91.1, 13526.0], [91.2, 13526.0], [91.3, 13526.0], [91.4, 13526.0], [91.5, 13526.0], [91.6, 13526.0], [91.7, 13526.0], [91.8, 13526.0], [91.9, 13526.0], [92.0, 13529.0], [92.1, 13529.0], [92.2, 13529.0], [92.3, 13529.0], [92.4, 13529.0], [92.5, 13529.0], [92.6, 13529.0], [92.7, 13529.0], [92.8, 13529.0], [92.9, 13529.0], [93.0, 13545.0], [93.1, 13545.0], [93.2, 13545.0], [93.3, 13545.0], [93.4, 13545.0], [93.5, 13545.0], [93.6, 13545.0], [93.7, 13545.0], [93.8, 13545.0], [93.9, 13545.0], [94.0, 13546.0], [94.1, 13546.0], [94.2, 13546.0], [94.3, 13546.0], [94.4, 13546.0], [94.5, 13546.0], [94.6, 13546.0], [94.7, 13546.0], [94.8, 13546.0], [94.9, 13546.0], [95.0, 13556.0], [95.1, 13556.0], [95.2, 13556.0], [95.3, 13556.0], [95.4, 13556.0], [95.5, 13556.0], [95.6, 13556.0], [95.7, 13556.0], [95.8, 13556.0], [95.9, 13556.0], [96.0, 13557.0], [96.1, 13557.0], [96.2, 13557.0], [96.3, 13557.0], [96.4, 13557.0], [96.5, 13557.0], [96.6, 13557.0], [96.7, 13557.0], [96.8, 13557.0], [96.9, 13557.0], [97.0, 13657.0], [97.1, 13657.0], [97.2, 13657.0], [97.3, 13657.0], [97.4, 13657.0], [97.5, 13657.0], [97.6, 13657.0], [97.7, 13657.0], [97.8, 13657.0], [97.9, 13657.0], [98.0, 13754.0], [98.1, 13754.0], [98.2, 13754.0], [98.3, 13754.0], [98.4, 13754.0], [98.5, 13754.0], [98.6, 13754.0], [98.7, 13754.0], [98.8, 13754.0], [98.9, 13754.0], [99.0, 13845.0], [99.1, 13845.0], [99.2, 13845.0], [99.3, 13845.0], [99.4, 13845.0], [99.5, 13845.0], [99.6, 13845.0], [99.7, 13845.0], [99.8, 13845.0], [99.9, 13845.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 9600.0, "maxY": 7.0, "series": [{"data": [[9600.0, 1.0], [9800.0, 2.0], [9900.0, 2.0], [10000.0, 3.0], [10100.0, 3.0], [10200.0, 1.0], [10300.0, 5.0], [10400.0, 1.0], [10500.0, 1.0], [10600.0, 2.0], [10700.0, 3.0], [10800.0, 3.0], [10900.0, 3.0], [11000.0, 1.0], [11100.0, 1.0], [11200.0, 5.0], [11300.0, 4.0], [11400.0, 1.0], [11500.0, 3.0], [11600.0, 1.0], [11700.0, 3.0], [11800.0, 3.0], [11900.0, 3.0], [12000.0, 1.0], [12200.0, 2.0], [12400.0, 1.0], [12500.0, 2.0], [12600.0, 6.0], [12700.0, 5.0], [12800.0, 2.0], [12900.0, 2.0], [13000.0, 1.0], [13100.0, 7.0], [13200.0, 2.0], [13300.0, 3.0], [13400.0, 2.0], [13500.0, 6.0], [13600.0, 1.0], [13700.0, 1.0], [13800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.58, "minX": 1.62248796E12, "maxY": 50.58, "series": [{"data": [[1.62248796E12, 50.58]], "isOverall": false, "label": "oracleADW", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248796E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9653.0, "minX": 1.0, "maxY": 13845.0, "series": [{"data": [[2.0, 13754.0], [3.0, 13657.0], [4.0, 13556.0], [5.0, 13557.0], [6.0, 13546.0], [8.0, 13535.5], [9.0, 13529.0], [10.0, 13435.0], [11.0, 13425.0], [12.0, 13337.0], [13.0, 13332.0], [14.0, 13324.0], [16.0, 13232.0], [17.0, 13171.0], [18.0, 13182.0], [19.0, 13167.0], [20.0, 13155.0], [22.0, 13153.5], [23.0, 13125.0], [24.0, 13021.0], [25.0, 12943.0], [26.0, 12921.0], [27.0, 12820.0], [28.0, 12820.0], [30.0, 12765.0], [31.0, 12732.0], [33.0, 12728.0], [32.0, 12757.0], [35.0, 12636.0], [37.0, 12637.0], [39.0, 12615.0], [38.0, 12637.0], [41.0, 12511.0], [40.0, 12559.0], [43.0, 12294.0], [42.0, 12405.0], [45.0, 12009.0], [44.0, 12203.0], [47.0, 11999.0], [46.0, 11994.0], [49.0, 11837.0], [48.0, 11910.0], [51.0, 11798.0], [50.0, 11811.0], [53.0, 11787.0], [52.0, 11806.0], [55.0, 11610.0], [54.0, 11708.0], [57.0, 11574.0], [56.0, 11590.0], [59.0, 11480.0], [58.0, 11510.0], [61.0, 11382.0], [60.0, 11388.0], [63.0, 11370.0], [62.0, 11372.0], [67.0, 11276.0], [66.0, 11269.0], [65.0, 11288.0], [64.0, 11296.0], [71.0, 10993.0], [70.0, 11069.0], [69.0, 11177.0], [68.0, 11267.0], [74.0, 10874.0], [73.0, 10973.0], [72.0, 10971.0], [79.0, 10755.0], [77.0, 10767.0], [76.0, 10873.0], [83.0, 10431.0], [82.0, 10567.0], [81.0, 10654.0], [80.0, 10669.0], [87.0, 10364.0], [86.0, 10360.0], [85.0, 10371.0], [84.0, 10381.0], [91.0, 10132.0], [90.0, 10151.0], [89.0, 10250.0], [88.0, 10362.0], [95.0, 10023.0], [94.0, 10043.0], [93.0, 10048.0], [92.0, 10140.0], [99.0, 9846.0], [98.0, 9859.0], [97.0, 9927.0], [96.0, 9950.0], [100.0, 9653.0], [1.0, 13845.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.58, 11865.729999999996]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 380.0, "minX": 1.62248796E12, "maxY": 25098.333333333332, "series": [{"data": [[1.62248796E12, 25098.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62248796E12, 380.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248796E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11865.729999999996, "minX": 1.62248796E12, "maxY": 11865.729999999996, "series": [{"data": [[1.62248796E12, 11865.729999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248796E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 11584.760000000002, "minX": 1.62248796E12, "maxY": 11584.760000000002, "series": [{"data": [[1.62248796E12, 11584.760000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248796E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3715.23, "minX": 1.62248796E12, "maxY": 3715.23, "series": [{"data": [[1.62248796E12, 3715.23]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248796E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9653.0, "minX": 1.62248796E12, "maxY": 13845.0, "series": [{"data": [[1.62248796E12, 13845.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62248796E12, 13434.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62248796E12, 13844.09]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62248796E12, 13555.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62248796E12, 9653.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62248796E12, 11808.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248796E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 10023.0, "minX": 11.0, "maxY": 13527.5, "series": [{"data": [[16.0, 13527.5], [21.0, 10751.0], [11.0, 10023.0], [24.0, 11582.0], [28.0, 12760.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9748.0, "minX": 11.0, "maxY": 13248.0, "series": [{"data": [[16.0, 13248.0], [21.0, 10468.0], [11.0, 9748.0], [24.0, 11305.5], [28.0, 12477.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248796E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248796E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248796E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248796E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248796E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248796E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248796E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248796E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248796E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248796E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248796E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248796E12, "title": "Total Transactions Per Second"}},
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

