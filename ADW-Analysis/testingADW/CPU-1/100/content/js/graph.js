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
        data: {"result": {"minY": 27916.0, "minX": 0.0, "maxY": 43013.0, "series": [{"data": [[0.0, 27916.0], [0.1, 27916.0], [0.2, 27916.0], [0.3, 27916.0], [0.4, 27916.0], [0.5, 27916.0], [0.6, 27916.0], [0.7, 27916.0], [0.8, 27916.0], [0.9, 27916.0], [1.0, 28414.0], [1.1, 28414.0], [1.2, 28414.0], [1.3, 28414.0], [1.4, 28414.0], [1.5, 28414.0], [1.6, 28414.0], [1.7, 28414.0], [1.8, 28414.0], [1.9, 28414.0], [2.0, 28506.0], [2.1, 28506.0], [2.2, 28506.0], [2.3, 28506.0], [2.4, 28506.0], [2.5, 28506.0], [2.6, 28506.0], [2.7, 28506.0], [2.8, 28506.0], [2.9, 28506.0], [3.0, 28715.0], [3.1, 28715.0], [3.2, 28715.0], [3.3, 28715.0], [3.4, 28715.0], [3.5, 28715.0], [3.6, 28715.0], [3.7, 28715.0], [3.8, 28715.0], [3.9, 28715.0], [4.0, 28935.0], [4.1, 28935.0], [4.2, 28935.0], [4.3, 28935.0], [4.4, 28935.0], [4.5, 28935.0], [4.6, 28935.0], [4.7, 28935.0], [4.8, 28935.0], [4.9, 28935.0], [5.0, 29039.0], [5.1, 29039.0], [5.2, 29039.0], [5.3, 29039.0], [5.4, 29039.0], [5.5, 29039.0], [5.6, 29039.0], [5.7, 29039.0], [5.8, 29039.0], [5.9, 29039.0], [6.0, 29259.0], [6.1, 29259.0], [6.2, 29259.0], [6.3, 29259.0], [6.4, 29259.0], [6.5, 29259.0], [6.6, 29259.0], [6.7, 29259.0], [6.8, 29259.0], [6.9, 29259.0], [7.0, 29469.0], [7.1, 29469.0], [7.2, 29469.0], [7.3, 29469.0], [7.4, 29469.0], [7.5, 29469.0], [7.6, 29469.0], [7.7, 29469.0], [7.8, 29469.0], [7.9, 29469.0], [8.0, 29638.0], [8.1, 29638.0], [8.2, 29638.0], [8.3, 29638.0], [8.4, 29638.0], [8.5, 29638.0], [8.6, 29638.0], [8.7, 29638.0], [8.8, 29638.0], [8.9, 29638.0], [9.0, 29769.0], [9.1, 29769.0], [9.2, 29769.0], [9.3, 29769.0], [9.4, 29769.0], [9.5, 29769.0], [9.6, 29769.0], [9.7, 29769.0], [9.8, 29769.0], [9.9, 29769.0], [10.0, 29958.0], [10.1, 29958.0], [10.2, 29958.0], [10.3, 29958.0], [10.4, 29958.0], [10.5, 29958.0], [10.6, 29958.0], [10.7, 29958.0], [10.8, 29958.0], [10.9, 29958.0], [11.0, 30175.0], [11.1, 30175.0], [11.2, 30175.0], [11.3, 30175.0], [11.4, 30175.0], [11.5, 30175.0], [11.6, 30175.0], [11.7, 30175.0], [11.8, 30175.0], [11.9, 30175.0], [12.0, 30289.0], [12.1, 30289.0], [12.2, 30289.0], [12.3, 30289.0], [12.4, 30289.0], [12.5, 30289.0], [12.6, 30289.0], [12.7, 30289.0], [12.8, 30289.0], [12.9, 30289.0], [13.0, 30479.0], [13.1, 30479.0], [13.2, 30479.0], [13.3, 30479.0], [13.4, 30479.0], [13.5, 30479.0], [13.6, 30479.0], [13.7, 30479.0], [13.8, 30479.0], [13.9, 30479.0], [14.0, 30607.0], [14.1, 30607.0], [14.2, 30607.0], [14.3, 30607.0], [14.4, 30607.0], [14.5, 30607.0], [14.6, 30607.0], [14.7, 30607.0], [14.8, 30607.0], [14.9, 30607.0], [15.0, 30704.0], [15.1, 30704.0], [15.2, 30704.0], [15.3, 30704.0], [15.4, 30704.0], [15.5, 30704.0], [15.6, 30704.0], [15.7, 30704.0], [15.8, 30704.0], [15.9, 30704.0], [16.0, 30998.0], [16.1, 30998.0], [16.2, 30998.0], [16.3, 30998.0], [16.4, 30998.0], [16.5, 30998.0], [16.6, 30998.0], [16.7, 30998.0], [16.8, 30998.0], [16.9, 30998.0], [17.0, 31115.0], [17.1, 31115.0], [17.2, 31115.0], [17.3, 31115.0], [17.4, 31115.0], [17.5, 31115.0], [17.6, 31115.0], [17.7, 31115.0], [17.8, 31115.0], [17.9, 31115.0], [18.0, 31305.0], [18.1, 31305.0], [18.2, 31305.0], [18.3, 31305.0], [18.4, 31305.0], [18.5, 31305.0], [18.6, 31305.0], [18.7, 31305.0], [18.8, 31305.0], [18.9, 31305.0], [19.0, 31516.0], [19.1, 31516.0], [19.2, 31516.0], [19.3, 31516.0], [19.4, 31516.0], [19.5, 31516.0], [19.6, 31516.0], [19.7, 31516.0], [19.8, 31516.0], [19.9, 31516.0], [20.0, 32043.0], [20.1, 32043.0], [20.2, 32043.0], [20.3, 32043.0], [20.4, 32043.0], [20.5, 32043.0], [20.6, 32043.0], [20.7, 32043.0], [20.8, 32043.0], [20.9, 32043.0], [21.0, 32045.0], [21.1, 32045.0], [21.2, 32045.0], [21.3, 32045.0], [21.4, 32045.0], [21.5, 32045.0], [21.6, 32045.0], [21.7, 32045.0], [21.8, 32045.0], [21.9, 32045.0], [22.0, 32236.0], [22.1, 32236.0], [22.2, 32236.0], [22.3, 32236.0], [22.4, 32236.0], [22.5, 32236.0], [22.6, 32236.0], [22.7, 32236.0], [22.8, 32236.0], [22.9, 32236.0], [23.0, 32351.0], [23.1, 32351.0], [23.2, 32351.0], [23.3, 32351.0], [23.4, 32351.0], [23.5, 32351.0], [23.6, 32351.0], [23.7, 32351.0], [23.8, 32351.0], [23.9, 32351.0], [24.0, 32393.0], [24.1, 32393.0], [24.2, 32393.0], [24.3, 32393.0], [24.4, 32393.0], [24.5, 32393.0], [24.6, 32393.0], [24.7, 32393.0], [24.8, 32393.0], [24.9, 32393.0], [25.0, 32732.0], [25.1, 32732.0], [25.2, 32732.0], [25.3, 32732.0], [25.4, 32732.0], [25.5, 32732.0], [25.6, 32732.0], [25.7, 32732.0], [25.8, 32732.0], [25.9, 32732.0], [26.0, 32738.0], [26.1, 32738.0], [26.2, 32738.0], [26.3, 32738.0], [26.4, 32738.0], [26.5, 32738.0], [26.6, 32738.0], [26.7, 32738.0], [26.8, 32738.0], [26.9, 32738.0], [27.0, 32843.0], [27.1, 32843.0], [27.2, 32843.0], [27.3, 32843.0], [27.4, 32843.0], [27.5, 32843.0], [27.6, 32843.0], [27.7, 32843.0], [27.8, 32843.0], [27.9, 32843.0], [28.0, 33077.0], [28.1, 33077.0], [28.2, 33077.0], [28.3, 33077.0], [28.4, 33077.0], [28.5, 33077.0], [28.6, 33077.0], [28.7, 33077.0], [28.8, 33077.0], [28.9, 33077.0], [29.0, 33079.0], [29.1, 33079.0], [29.2, 33079.0], [29.3, 33079.0], [29.4, 33079.0], [29.5, 33079.0], [29.6, 33079.0], [29.7, 33079.0], [29.8, 33079.0], [29.9, 33079.0], [30.0, 33263.0], [30.1, 33263.0], [30.2, 33263.0], [30.3, 33263.0], [30.4, 33263.0], [30.5, 33263.0], [30.6, 33263.0], [30.7, 33263.0], [30.8, 33263.0], [30.9, 33263.0], [31.0, 33378.0], [31.1, 33378.0], [31.2, 33378.0], [31.3, 33378.0], [31.4, 33378.0], [31.5, 33378.0], [31.6, 33378.0], [31.7, 33378.0], [31.8, 33378.0], [31.9, 33378.0], [32.0, 33572.0], [32.1, 33572.0], [32.2, 33572.0], [32.3, 33572.0], [32.4, 33572.0], [32.5, 33572.0], [32.6, 33572.0], [32.7, 33572.0], [32.8, 33572.0], [32.9, 33572.0], [33.0, 33764.0], [33.1, 33764.0], [33.2, 33764.0], [33.3, 33764.0], [33.4, 33764.0], [33.5, 33764.0], [33.6, 33764.0], [33.7, 33764.0], [33.8, 33764.0], [33.9, 33764.0], [34.0, 33868.0], [34.1, 33868.0], [34.2, 33868.0], [34.3, 33868.0], [34.4, 33868.0], [34.5, 33868.0], [34.6, 33868.0], [34.7, 33868.0], [34.8, 33868.0], [34.9, 33868.0], [35.0, 34081.0], [35.1, 34081.0], [35.2, 34081.0], [35.3, 34081.0], [35.4, 34081.0], [35.5, 34081.0], [35.6, 34081.0], [35.7, 34081.0], [35.8, 34081.0], [35.9, 34081.0], [36.0, 34269.0], [36.1, 34269.0], [36.2, 34269.0], [36.3, 34269.0], [36.4, 34269.0], [36.5, 34269.0], [36.6, 34269.0], [36.7, 34269.0], [36.8, 34269.0], [36.9, 34269.0], [37.0, 34499.0], [37.1, 34499.0], [37.2, 34499.0], [37.3, 34499.0], [37.4, 34499.0], [37.5, 34499.0], [37.6, 34499.0], [37.7, 34499.0], [37.8, 34499.0], [37.9, 34499.0], [38.0, 34893.0], [38.1, 34893.0], [38.2, 34893.0], [38.3, 34893.0], [38.4, 34893.0], [38.5, 34893.0], [38.6, 34893.0], [38.7, 34893.0], [38.8, 34893.0], [38.9, 34893.0], [39.0, 34899.0], [39.1, 34899.0], [39.2, 34899.0], [39.3, 34899.0], [39.4, 34899.0], [39.5, 34899.0], [39.6, 34899.0], [39.7, 34899.0], [39.8, 34899.0], [39.9, 34899.0], [40.0, 35310.0], [40.1, 35310.0], [40.2, 35310.0], [40.3, 35310.0], [40.4, 35310.0], [40.5, 35310.0], [40.6, 35310.0], [40.7, 35310.0], [40.8, 35310.0], [40.9, 35310.0], [41.0, 35633.0], [41.1, 35633.0], [41.2, 35633.0], [41.3, 35633.0], [41.4, 35633.0], [41.5, 35633.0], [41.6, 35633.0], [41.7, 35633.0], [41.8, 35633.0], [41.9, 35633.0], [42.0, 35823.0], [42.1, 35823.0], [42.2, 35823.0], [42.3, 35823.0], [42.4, 35823.0], [42.5, 35823.0], [42.6, 35823.0], [42.7, 35823.0], [42.8, 35823.0], [42.9, 35823.0], [43.0, 36081.0], [43.1, 36081.0], [43.2, 36081.0], [43.3, 36081.0], [43.4, 36081.0], [43.5, 36081.0], [43.6, 36081.0], [43.7, 36081.0], [43.8, 36081.0], [43.9, 36081.0], [44.0, 36135.0], [44.1, 36135.0], [44.2, 36135.0], [44.3, 36135.0], [44.4, 36135.0], [44.5, 36135.0], [44.6, 36135.0], [44.7, 36135.0], [44.8, 36135.0], [44.9, 36135.0], [45.0, 36375.0], [45.1, 36375.0], [45.2, 36375.0], [45.3, 36375.0], [45.4, 36375.0], [45.5, 36375.0], [45.6, 36375.0], [45.7, 36375.0], [45.8, 36375.0], [45.9, 36375.0], [46.0, 36495.0], [46.1, 36495.0], [46.2, 36495.0], [46.3, 36495.0], [46.4, 36495.0], [46.5, 36495.0], [46.6, 36495.0], [46.7, 36495.0], [46.8, 36495.0], [46.9, 36495.0], [47.0, 36557.0], [47.1, 36557.0], [47.2, 36557.0], [47.3, 36557.0], [47.4, 36557.0], [47.5, 36557.0], [47.6, 36557.0], [47.7, 36557.0], [47.8, 36557.0], [47.9, 36557.0], [48.0, 36650.0], [48.1, 36650.0], [48.2, 36650.0], [48.3, 36650.0], [48.4, 36650.0], [48.5, 36650.0], [48.6, 36650.0], [48.7, 36650.0], [48.8, 36650.0], [48.9, 36650.0], [49.0, 36748.0], [49.1, 36748.0], [49.2, 36748.0], [49.3, 36748.0], [49.4, 36748.0], [49.5, 36748.0], [49.6, 36748.0], [49.7, 36748.0], [49.8, 36748.0], [49.9, 36748.0], [50.0, 36971.0], [50.1, 36971.0], [50.2, 36971.0], [50.3, 36971.0], [50.4, 36971.0], [50.5, 36971.0], [50.6, 36971.0], [50.7, 36971.0], [50.8, 36971.0], [50.9, 36971.0], [51.0, 37173.0], [51.1, 37173.0], [51.2, 37173.0], [51.3, 37173.0], [51.4, 37173.0], [51.5, 37173.0], [51.6, 37173.0], [51.7, 37173.0], [51.8, 37173.0], [51.9, 37173.0], [52.0, 37181.0], [52.1, 37181.0], [52.2, 37181.0], [52.3, 37181.0], [52.4, 37181.0], [52.5, 37181.0], [52.6, 37181.0], [52.7, 37181.0], [52.8, 37181.0], [52.9, 37181.0], [53.0, 37491.0], [53.1, 37491.0], [53.2, 37491.0], [53.3, 37491.0], [53.4, 37491.0], [53.5, 37491.0], [53.6, 37491.0], [53.7, 37491.0], [53.8, 37491.0], [53.9, 37491.0], [54.0, 37584.0], [54.1, 37584.0], [54.2, 37584.0], [54.3, 37584.0], [54.4, 37584.0], [54.5, 37584.0], [54.6, 37584.0], [54.7, 37584.0], [54.8, 37584.0], [54.9, 37584.0], [55.0, 37715.0], [55.1, 37715.0], [55.2, 37715.0], [55.3, 37715.0], [55.4, 37715.0], [55.5, 37715.0], [55.6, 37715.0], [55.7, 37715.0], [55.8, 37715.0], [55.9, 37715.0], [56.0, 37807.0], [56.1, 37807.0], [56.2, 37807.0], [56.3, 37807.0], [56.4, 37807.0], [56.5, 37807.0], [56.6, 37807.0], [56.7, 37807.0], [56.8, 37807.0], [56.9, 37807.0], [57.0, 37908.0], [57.1, 37908.0], [57.2, 37908.0], [57.3, 37908.0], [57.4, 37908.0], [57.5, 37908.0], [57.6, 37908.0], [57.7, 37908.0], [57.8, 37908.0], [57.9, 37908.0], [58.0, 38141.0], [58.1, 38141.0], [58.2, 38141.0], [58.3, 38141.0], [58.4, 38141.0], [58.5, 38141.0], [58.6, 38141.0], [58.7, 38141.0], [58.8, 38141.0], [58.9, 38141.0], [59.0, 38228.0], [59.1, 38228.0], [59.2, 38228.0], [59.3, 38228.0], [59.4, 38228.0], [59.5, 38228.0], [59.6, 38228.0], [59.7, 38228.0], [59.8, 38228.0], [59.9, 38228.0], [60.0, 38422.0], [60.1, 38422.0], [60.2, 38422.0], [60.3, 38422.0], [60.4, 38422.0], [60.5, 38422.0], [60.6, 38422.0], [60.7, 38422.0], [60.8, 38422.0], [60.9, 38422.0], [61.0, 38503.0], [61.1, 38503.0], [61.2, 38503.0], [61.3, 38503.0], [61.4, 38503.0], [61.5, 38503.0], [61.6, 38503.0], [61.7, 38503.0], [61.8, 38503.0], [61.9, 38503.0], [62.0, 38614.0], [62.1, 38614.0], [62.2, 38614.0], [62.3, 38614.0], [62.4, 38614.0], [62.5, 38614.0], [62.6, 38614.0], [62.7, 38614.0], [62.8, 38614.0], [62.9, 38614.0], [63.0, 38729.0], [63.1, 38729.0], [63.2, 38729.0], [63.3, 38729.0], [63.4, 38729.0], [63.5, 38729.0], [63.6, 38729.0], [63.7, 38729.0], [63.8, 38729.0], [63.9, 38729.0], [64.0, 38963.0], [64.1, 38963.0], [64.2, 38963.0], [64.3, 38963.0], [64.4, 38963.0], [64.5, 38963.0], [64.6, 38963.0], [64.7, 38963.0], [64.8, 38963.0], [64.9, 38963.0], [65.0, 38965.0], [65.1, 38965.0], [65.2, 38965.0], [65.3, 38965.0], [65.4, 38965.0], [65.5, 38965.0], [65.6, 38965.0], [65.7, 38965.0], [65.8, 38965.0], [65.9, 38965.0], [66.0, 39042.0], [66.1, 39042.0], [66.2, 39042.0], [66.3, 39042.0], [66.4, 39042.0], [66.5, 39042.0], [66.6, 39042.0], [66.7, 39042.0], [66.8, 39042.0], [66.9, 39042.0], [67.0, 39258.0], [67.1, 39258.0], [67.2, 39258.0], [67.3, 39258.0], [67.4, 39258.0], [67.5, 39258.0], [67.6, 39258.0], [67.7, 39258.0], [67.8, 39258.0], [67.9, 39258.0], [68.0, 39342.0], [68.1, 39342.0], [68.2, 39342.0], [68.3, 39342.0], [68.4, 39342.0], [68.5, 39342.0], [68.6, 39342.0], [68.7, 39342.0], [68.8, 39342.0], [68.9, 39342.0], [69.0, 39438.0], [69.1, 39438.0], [69.2, 39438.0], [69.3, 39438.0], [69.4, 39438.0], [69.5, 39438.0], [69.6, 39438.0], [69.7, 39438.0], [69.8, 39438.0], [69.9, 39438.0], [70.0, 39544.0], [70.1, 39544.0], [70.2, 39544.0], [70.3, 39544.0], [70.4, 39544.0], [70.5, 39544.0], [70.6, 39544.0], [70.7, 39544.0], [70.8, 39544.0], [70.9, 39544.0], [71.0, 39743.0], [71.1, 39743.0], [71.2, 39743.0], [71.3, 39743.0], [71.4, 39743.0], [71.5, 39743.0], [71.6, 39743.0], [71.7, 39743.0], [71.8, 39743.0], [71.9, 39743.0], [72.0, 39766.0], [72.1, 39766.0], [72.2, 39766.0], [72.3, 39766.0], [72.4, 39766.0], [72.5, 39766.0], [72.6, 39766.0], [72.7, 39766.0], [72.8, 39766.0], [72.9, 39766.0], [73.0, 39980.0], [73.1, 39980.0], [73.2, 39980.0], [73.3, 39980.0], [73.4, 39980.0], [73.5, 39980.0], [73.6, 39980.0], [73.7, 39980.0], [73.8, 39980.0], [73.9, 39980.0], [74.0, 39998.0], [74.1, 39998.0], [74.2, 39998.0], [74.3, 39998.0], [74.4, 39998.0], [74.5, 39998.0], [74.6, 39998.0], [74.7, 39998.0], [74.8, 39998.0], [74.9, 39998.0], [75.0, 40177.0], [75.1, 40177.0], [75.2, 40177.0], [75.3, 40177.0], [75.4, 40177.0], [75.5, 40177.0], [75.6, 40177.0], [75.7, 40177.0], [75.8, 40177.0], [75.9, 40177.0], [76.0, 40286.0], [76.1, 40286.0], [76.2, 40286.0], [76.3, 40286.0], [76.4, 40286.0], [76.5, 40286.0], [76.6, 40286.0], [76.7, 40286.0], [76.8, 40286.0], [76.9, 40286.0], [77.0, 40372.0], [77.1, 40372.0], [77.2, 40372.0], [77.3, 40372.0], [77.4, 40372.0], [77.5, 40372.0], [77.6, 40372.0], [77.7, 40372.0], [77.8, 40372.0], [77.9, 40372.0], [78.0, 40479.0], [78.1, 40479.0], [78.2, 40479.0], [78.3, 40479.0], [78.4, 40479.0], [78.5, 40479.0], [78.6, 40479.0], [78.7, 40479.0], [78.8, 40479.0], [78.9, 40479.0], [79.0, 40536.0], [79.1, 40536.0], [79.2, 40536.0], [79.3, 40536.0], [79.4, 40536.0], [79.5, 40536.0], [79.6, 40536.0], [79.7, 40536.0], [79.8, 40536.0], [79.9, 40536.0], [80.0, 40801.0], [80.1, 40801.0], [80.2, 40801.0], [80.3, 40801.0], [80.4, 40801.0], [80.5, 40801.0], [80.6, 40801.0], [80.7, 40801.0], [80.8, 40801.0], [80.9, 40801.0], [81.0, 40896.0], [81.1, 40896.0], [81.2, 40896.0], [81.3, 40896.0], [81.4, 40896.0], [81.5, 40896.0], [81.6, 40896.0], [81.7, 40896.0], [81.8, 40896.0], [81.9, 40896.0], [82.0, 40915.0], [82.1, 40915.0], [82.2, 40915.0], [82.3, 40915.0], [82.4, 40915.0], [82.5, 40915.0], [82.6, 40915.0], [82.7, 40915.0], [82.8, 40915.0], [82.9, 40915.0], [83.0, 41008.0], [83.1, 41008.0], [83.2, 41008.0], [83.3, 41008.0], [83.4, 41008.0], [83.5, 41008.0], [83.6, 41008.0], [83.7, 41008.0], [83.8, 41008.0], [83.9, 41008.0], [84.0, 41109.0], [84.1, 41109.0], [84.2, 41109.0], [84.3, 41109.0], [84.4, 41109.0], [84.5, 41109.0], [84.6, 41109.0], [84.7, 41109.0], [84.8, 41109.0], [84.9, 41109.0], [85.0, 41194.0], [85.1, 41194.0], [85.2, 41194.0], [85.3, 41194.0], [85.4, 41194.0], [85.5, 41194.0], [85.6, 41194.0], [85.7, 41194.0], [85.8, 41194.0], [85.9, 41194.0], [86.0, 41305.0], [86.1, 41305.0], [86.2, 41305.0], [86.3, 41305.0], [86.4, 41305.0], [86.5, 41305.0], [86.6, 41305.0], [86.7, 41305.0], [86.8, 41305.0], [86.9, 41305.0], [87.0, 41617.0], [87.1, 41617.0], [87.2, 41617.0], [87.3, 41617.0], [87.4, 41617.0], [87.5, 41617.0], [87.6, 41617.0], [87.7, 41617.0], [87.8, 41617.0], [87.9, 41617.0], [88.0, 41724.0], [88.1, 41724.0], [88.2, 41724.0], [88.3, 41724.0], [88.4, 41724.0], [88.5, 41724.0], [88.6, 41724.0], [88.7, 41724.0], [88.8, 41724.0], [88.9, 41724.0], [89.0, 41741.0], [89.1, 41741.0], [89.2, 41741.0], [89.3, 41741.0], [89.4, 41741.0], [89.5, 41741.0], [89.6, 41741.0], [89.7, 41741.0], [89.8, 41741.0], [89.9, 41741.0], [90.0, 41932.0], [90.1, 41932.0], [90.2, 41932.0], [90.3, 41932.0], [90.4, 41932.0], [90.5, 41932.0], [90.6, 41932.0], [90.7, 41932.0], [90.8, 41932.0], [90.9, 41932.0], [91.0, 42021.0], [91.1, 42021.0], [91.2, 42021.0], [91.3, 42021.0], [91.4, 42021.0], [91.5, 42021.0], [91.6, 42021.0], [91.7, 42021.0], [91.8, 42021.0], [91.9, 42021.0], [92.0, 42237.0], [92.1, 42237.0], [92.2, 42237.0], [92.3, 42237.0], [92.4, 42237.0], [92.5, 42237.0], [92.6, 42237.0], [92.7, 42237.0], [92.8, 42237.0], [92.9, 42237.0], [93.0, 42341.0], [93.1, 42341.0], [93.2, 42341.0], [93.3, 42341.0], [93.4, 42341.0], [93.5, 42341.0], [93.6, 42341.0], [93.7, 42341.0], [93.8, 42341.0], [93.9, 42341.0], [94.0, 42553.0], [94.1, 42553.0], [94.2, 42553.0], [94.3, 42553.0], [94.4, 42553.0], [94.5, 42553.0], [94.6, 42553.0], [94.7, 42553.0], [94.8, 42553.0], [94.9, 42553.0], [95.0, 42654.0], [95.1, 42654.0], [95.2, 42654.0], [95.3, 42654.0], [95.4, 42654.0], [95.5, 42654.0], [95.6, 42654.0], [95.7, 42654.0], [95.8, 42654.0], [95.9, 42654.0], [96.0, 42662.0], [96.1, 42662.0], [96.2, 42662.0], [96.3, 42662.0], [96.4, 42662.0], [96.5, 42662.0], [96.6, 42662.0], [96.7, 42662.0], [96.8, 42662.0], [96.9, 42662.0], [97.0, 42767.0], [97.1, 42767.0], [97.2, 42767.0], [97.3, 42767.0], [97.4, 42767.0], [97.5, 42767.0], [97.6, 42767.0], [97.7, 42767.0], [97.8, 42767.0], [97.9, 42767.0], [98.0, 42854.0], [98.1, 42854.0], [98.2, 42854.0], [98.3, 42854.0], [98.4, 42854.0], [98.5, 42854.0], [98.6, 42854.0], [98.7, 42854.0], [98.8, 42854.0], [98.9, 42854.0], [99.0, 43013.0], [99.1, 43013.0], [99.2, 43013.0], [99.3, 43013.0], [99.4, 43013.0], [99.5, 43013.0], [99.6, 43013.0], [99.7, 43013.0], [99.8, 43013.0], [99.9, 43013.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 27900.0, "maxY": 2.0, "series": [{"data": [[27900.0, 1.0], [28400.0, 1.0], [28500.0, 1.0], [28700.0, 1.0], [28900.0, 1.0], [29000.0, 1.0], [29200.0, 1.0], [29400.0, 1.0], [29600.0, 1.0], [29700.0, 1.0], [29900.0, 1.0], [30100.0, 1.0], [30200.0, 1.0], [30400.0, 1.0], [30600.0, 1.0], [30700.0, 1.0], [30900.0, 1.0], [31100.0, 1.0], [31300.0, 1.0], [31500.0, 1.0], [32000.0, 2.0], [32200.0, 1.0], [32300.0, 2.0], [32700.0, 2.0], [33000.0, 2.0], [32800.0, 1.0], [33200.0, 1.0], [34400.0, 1.0], [34800.0, 2.0], [33300.0, 1.0], [33500.0, 1.0], [33700.0, 1.0], [33800.0, 1.0], [34000.0, 1.0], [34200.0, 1.0], [36400.0, 1.0], [35300.0, 1.0], [35600.0, 1.0], [35800.0, 1.0], [36000.0, 1.0], [36100.0, 1.0], [36300.0, 1.0], [36500.0, 1.0], [36600.0, 1.0], [36700.0, 1.0], [36900.0, 1.0], [37100.0, 2.0], [38400.0, 1.0], [38500.0, 1.0], [38600.0, 1.0], [38700.0, 1.0], [38900.0, 2.0], [37400.0, 1.0], [37500.0, 1.0], [37700.0, 1.0], [37800.0, 1.0], [37900.0, 1.0], [38100.0, 1.0], [38200.0, 1.0], [39200.0, 1.0], [39000.0, 1.0], [39300.0, 1.0], [39400.0, 1.0], [39500.0, 1.0], [39700.0, 2.0], [39900.0, 2.0], [40100.0, 1.0], [40900.0, 1.0], [40500.0, 1.0], [40800.0, 2.0], [40200.0, 1.0], [40300.0, 1.0], [40400.0, 1.0], [41100.0, 2.0], [41000.0, 1.0], [41300.0, 1.0], [42500.0, 1.0], [42600.0, 2.0], [42700.0, 1.0], [42800.0, 1.0], [43000.0, 1.0], [41600.0, 1.0], [41700.0, 2.0], [41900.0, 1.0], [42000.0, 1.0], [42200.0, 1.0], [42300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 43000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.5, "minX": 1.62248598E12, "maxY": 50.5, "series": [{"data": [[1.62248598E12, 50.5]], "isOverall": false, "label": "oracleADW", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248598E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 27916.0, "minX": 1.0, "maxY": 43013.0, "series": [{"data": [[2.0, 42854.0], [3.0, 42767.0], [4.0, 42662.0], [5.0, 42654.0], [6.0, 42553.0], [7.0, 42341.0], [8.0, 42237.0], [9.0, 42021.0], [10.0, 41932.0], [11.0, 41741.0], [12.0, 41724.0], [13.0, 41617.0], [14.0, 41305.0], [15.0, 41194.0], [16.0, 41109.0], [17.0, 41008.0], [18.0, 40915.0], [19.0, 40896.0], [20.0, 40801.0], [21.0, 40536.0], [22.0, 40479.0], [23.0, 40372.0], [24.0, 40286.0], [25.0, 40177.0], [26.0, 39998.0], [27.0, 39980.0], [28.0, 39766.0], [29.0, 39743.0], [30.0, 39544.0], [31.0, 39438.0], [33.0, 39258.0], [32.0, 39342.0], [35.0, 38963.0], [34.0, 39042.0], [37.0, 38729.0], [36.0, 38965.0], [39.0, 38503.0], [38.0, 38614.0], [41.0, 38228.0], [40.0, 38422.0], [43.0, 37908.0], [42.0, 38141.0], [45.0, 37715.0], [44.0, 37807.0], [47.0, 37491.0], [46.0, 37584.0], [49.0, 37173.0], [48.0, 37181.0], [51.0, 36748.0], [50.0, 36971.0], [53.0, 36557.0], [52.0, 36650.0], [55.0, 36375.0], [54.0, 36495.0], [57.0, 36081.0], [56.0, 36135.0], [59.0, 35633.0], [58.0, 35823.0], [61.0, 34899.0], [60.0, 35310.0], [63.0, 34499.0], [62.0, 34893.0], [67.0, 33764.0], [66.0, 33868.0], [65.0, 34081.0], [64.0, 34269.0], [71.0, 33079.0], [70.0, 33263.0], [69.0, 33378.0], [68.0, 33572.0], [75.0, 32738.0], [74.0, 32732.0], [73.0, 32843.0], [72.0, 33077.0], [79.0, 32045.0], [78.0, 32236.0], [77.0, 32351.0], [76.0, 32393.0], [83.0, 31115.0], [82.0, 31305.0], [81.0, 31516.0], [80.0, 32043.0], [87.0, 30479.0], [86.0, 30607.0], [85.0, 30704.0], [84.0, 30998.0], [91.0, 29769.0], [90.0, 29958.0], [89.0, 30175.0], [88.0, 30289.0], [95.0, 29039.0], [94.0, 29259.0], [93.0, 29469.0], [92.0, 29638.0], [99.0, 28414.0], [98.0, 28506.0], [97.0, 28715.0], [96.0, 28935.0], [100.0, 27916.0], [1.0, 43013.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.5, 36283.36000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 380.0, "minX": 1.62248598E12, "maxY": 25098.333333333332, "series": [{"data": [[1.62248598E12, 25098.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62248598E12, 380.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248598E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 36283.36000000001, "minX": 1.62248598E12, "maxY": 36283.36000000001, "series": [{"data": [[1.62248598E12, 36283.36000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248598E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 36002.13999999999, "minX": 1.62248598E12, "maxY": 36002.13999999999, "series": [{"data": [[1.62248598E12, 36002.13999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248598E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3692.789999999999, "minX": 1.62248598E12, "maxY": 3692.789999999999, "series": [{"data": [[1.62248598E12, 3692.789999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248598E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27916.0, "minX": 1.62248598E12, "maxY": 43013.0, "series": [{"data": [[1.62248598E12, 43013.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62248598E12, 41912.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62248598E12, 43011.409999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62248598E12, 42648.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62248598E12, 27916.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62248598E12, 36859.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248598E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 28414.0, "minX": 3.0, "maxY": 40177.0, "series": [{"data": [[8.0, 38671.5], [4.0, 35104.5], [9.0, 40177.0], [5.0, 32236.0], [3.0, 28414.0], [6.0, 36255.0], [7.0, 37173.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 28136.0, "minX": 3.0, "maxY": 39899.0, "series": [{"data": [[8.0, 38395.0], [4.0, 34826.5], [9.0, 39899.0], [5.0, 31956.0], [3.0, 28136.0], [6.0, 35972.0], [7.0, 36887.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248598E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248598E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248598E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248598E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248598E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248598E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248598E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248598E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248598E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248598E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248598E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248598E12, "title": "Total Transactions Per Second"}},
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

