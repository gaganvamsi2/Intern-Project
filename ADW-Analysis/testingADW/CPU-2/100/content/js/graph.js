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
        data: {"result": {"minY": 15563.0, "minX": 0.0, "maxY": 23091.0, "series": [{"data": [[0.0, 15563.0], [0.1, 15563.0], [0.2, 15563.0], [0.3, 15563.0], [0.4, 15563.0], [0.5, 15563.0], [0.6, 15563.0], [0.7, 15563.0], [0.8, 15563.0], [0.9, 15563.0], [1.0, 15569.0], [1.1, 15569.0], [1.2, 15569.0], [1.3, 15569.0], [1.4, 15569.0], [1.5, 15569.0], [1.6, 15569.0], [1.7, 15569.0], [1.8, 15569.0], [1.9, 15569.0], [2.0, 15776.0], [2.1, 15776.0], [2.2, 15776.0], [2.3, 15776.0], [2.4, 15776.0], [2.5, 15776.0], [2.6, 15776.0], [2.7, 15776.0], [2.8, 15776.0], [2.9, 15776.0], [3.0, 15776.0], [3.1, 15776.0], [3.2, 15776.0], [3.3, 15776.0], [3.4, 15776.0], [3.5, 15776.0], [3.6, 15776.0], [3.7, 15776.0], [3.8, 15776.0], [3.9, 15776.0], [4.0, 15797.0], [4.1, 15797.0], [4.2, 15797.0], [4.3, 15797.0], [4.4, 15797.0], [4.5, 15797.0], [4.6, 15797.0], [4.7, 15797.0], [4.8, 15797.0], [4.9, 15797.0], [5.0, 16066.0], [5.1, 16066.0], [5.2, 16066.0], [5.3, 16066.0], [5.4, 16066.0], [5.5, 16066.0], [5.6, 16066.0], [5.7, 16066.0], [5.8, 16066.0], [5.9, 16066.0], [6.0, 16168.0], [6.1, 16168.0], [6.2, 16168.0], [6.3, 16168.0], [6.4, 16168.0], [6.5, 16168.0], [6.6, 16168.0], [6.7, 16168.0], [6.8, 16168.0], [6.9, 16168.0], [7.0, 16292.0], [7.1, 16292.0], [7.2, 16292.0], [7.3, 16292.0], [7.4, 16292.0], [7.5, 16292.0], [7.6, 16292.0], [7.7, 16292.0], [7.8, 16292.0], [7.9, 16292.0], [8.0, 16293.0], [8.1, 16293.0], [8.2, 16293.0], [8.3, 16293.0], [8.4, 16293.0], [8.5, 16293.0], [8.6, 16293.0], [8.7, 16293.0], [8.8, 16293.0], [8.9, 16293.0], [9.0, 16467.0], [9.1, 16467.0], [9.2, 16467.0], [9.3, 16467.0], [9.4, 16467.0], [9.5, 16467.0], [9.6, 16467.0], [9.7, 16467.0], [9.8, 16467.0], [9.9, 16467.0], [10.0, 16593.0], [10.1, 16593.0], [10.2, 16593.0], [10.3, 16593.0], [10.4, 16593.0], [10.5, 16593.0], [10.6, 16593.0], [10.7, 16593.0], [10.8, 16593.0], [10.9, 16593.0], [11.0, 16606.0], [11.1, 16606.0], [11.2, 16606.0], [11.3, 16606.0], [11.4, 16606.0], [11.5, 16606.0], [11.6, 16606.0], [11.7, 16606.0], [11.8, 16606.0], [11.9, 16606.0], [12.0, 16699.0], [12.1, 16699.0], [12.2, 16699.0], [12.3, 16699.0], [12.4, 16699.0], [12.5, 16699.0], [12.6, 16699.0], [12.7, 16699.0], [12.8, 16699.0], [12.9, 16699.0], [13.0, 16795.0], [13.1, 16795.0], [13.2, 16795.0], [13.3, 16795.0], [13.4, 16795.0], [13.5, 16795.0], [13.6, 16795.0], [13.7, 16795.0], [13.8, 16795.0], [13.9, 16795.0], [14.0, 16868.0], [14.1, 16868.0], [14.2, 16868.0], [14.3, 16868.0], [14.4, 16868.0], [14.5, 16868.0], [14.6, 16868.0], [14.7, 16868.0], [14.8, 16868.0], [14.9, 16868.0], [15.0, 16884.0], [15.1, 16884.0], [15.2, 16884.0], [15.3, 16884.0], [15.4, 16884.0], [15.5, 16884.0], [15.6, 16884.0], [15.7, 16884.0], [15.8, 16884.0], [15.9, 16884.0], [16.0, 17011.0], [16.1, 17011.0], [16.2, 17011.0], [16.3, 17011.0], [16.4, 17011.0], [16.5, 17011.0], [16.6, 17011.0], [16.7, 17011.0], [16.8, 17011.0], [16.9, 17011.0], [17.0, 17117.0], [17.1, 17117.0], [17.2, 17117.0], [17.3, 17117.0], [17.4, 17117.0], [17.5, 17117.0], [17.6, 17117.0], [17.7, 17117.0], [17.8, 17117.0], [17.9, 17117.0], [18.0, 17302.0], [18.1, 17302.0], [18.2, 17302.0], [18.3, 17302.0], [18.4, 17302.0], [18.5, 17302.0], [18.6, 17302.0], [18.7, 17302.0], [18.8, 17302.0], [18.9, 17302.0], [19.0, 17312.0], [19.1, 17312.0], [19.2, 17312.0], [19.3, 17312.0], [19.4, 17312.0], [19.5, 17312.0], [19.6, 17312.0], [19.7, 17312.0], [19.8, 17312.0], [19.9, 17312.0], [20.0, 17314.0], [20.1, 17314.0], [20.2, 17314.0], [20.3, 17314.0], [20.4, 17314.0], [20.5, 17314.0], [20.6, 17314.0], [20.7, 17314.0], [20.8, 17314.0], [20.9, 17314.0], [21.0, 17513.0], [21.1, 17513.0], [21.2, 17513.0], [21.3, 17513.0], [21.4, 17513.0], [21.5, 17513.0], [21.6, 17513.0], [21.7, 17513.0], [21.8, 17513.0], [21.9, 17513.0], [22.0, 17522.0], [22.1, 17522.0], [22.2, 17522.0], [22.3, 17522.0], [22.4, 17522.0], [22.5, 17522.0], [22.6, 17522.0], [22.7, 17522.0], [22.8, 17522.0], [22.9, 17522.0], [23.0, 17730.0], [23.1, 17730.0], [23.2, 17730.0], [23.3, 17730.0], [23.4, 17730.0], [23.5, 17730.0], [23.6, 17730.0], [23.7, 17730.0], [23.8, 17730.0], [23.9, 17730.0], [24.0, 17915.0], [24.1, 17915.0], [24.2, 17915.0], [24.3, 17915.0], [24.4, 17915.0], [24.5, 17915.0], [24.6, 17915.0], [24.7, 17915.0], [24.8, 17915.0], [24.9, 17915.0], [25.0, 17950.0], [25.1, 17950.0], [25.2, 17950.0], [25.3, 17950.0], [25.4, 17950.0], [25.5, 17950.0], [25.6, 17950.0], [25.7, 17950.0], [25.8, 17950.0], [25.9, 17950.0], [26.0, 17958.0], [26.1, 17958.0], [26.2, 17958.0], [26.3, 17958.0], [26.4, 17958.0], [26.5, 17958.0], [26.6, 17958.0], [26.7, 17958.0], [26.8, 17958.0], [26.9, 17958.0], [27.0, 18057.0], [27.1, 18057.0], [27.2, 18057.0], [27.3, 18057.0], [27.4, 18057.0], [27.5, 18057.0], [27.6, 18057.0], [27.7, 18057.0], [27.8, 18057.0], [27.9, 18057.0], [28.0, 18133.0], [28.1, 18133.0], [28.2, 18133.0], [28.3, 18133.0], [28.4, 18133.0], [28.5, 18133.0], [28.6, 18133.0], [28.7, 18133.0], [28.8, 18133.0], [28.9, 18133.0], [29.0, 18145.0], [29.1, 18145.0], [29.2, 18145.0], [29.3, 18145.0], [29.4, 18145.0], [29.5, 18145.0], [29.6, 18145.0], [29.7, 18145.0], [29.8, 18145.0], [29.9, 18145.0], [30.0, 18236.0], [30.1, 18236.0], [30.2, 18236.0], [30.3, 18236.0], [30.4, 18236.0], [30.5, 18236.0], [30.6, 18236.0], [30.7, 18236.0], [30.8, 18236.0], [30.9, 18236.0], [31.0, 18340.0], [31.1, 18340.0], [31.2, 18340.0], [31.3, 18340.0], [31.4, 18340.0], [31.5, 18340.0], [31.6, 18340.0], [31.7, 18340.0], [31.8, 18340.0], [31.9, 18340.0], [32.0, 18361.0], [32.1, 18361.0], [32.2, 18361.0], [32.3, 18361.0], [32.4, 18361.0], [32.5, 18361.0], [32.6, 18361.0], [32.7, 18361.0], [32.8, 18361.0], [32.9, 18361.0], [33.0, 18416.0], [33.1, 18416.0], [33.2, 18416.0], [33.3, 18416.0], [33.4, 18416.0], [33.5, 18416.0], [33.6, 18416.0], [33.7, 18416.0], [33.8, 18416.0], [33.9, 18416.0], [34.0, 18550.0], [34.1, 18550.0], [34.2, 18550.0], [34.3, 18550.0], [34.4, 18550.0], [34.5, 18550.0], [34.6, 18550.0], [34.7, 18550.0], [34.8, 18550.0], [34.9, 18550.0], [35.0, 18629.0], [35.1, 18629.0], [35.2, 18629.0], [35.3, 18629.0], [35.4, 18629.0], [35.5, 18629.0], [35.6, 18629.0], [35.7, 18629.0], [35.8, 18629.0], [35.9, 18629.0], [36.0, 18745.0], [36.1, 18745.0], [36.2, 18745.0], [36.3, 18745.0], [36.4, 18745.0], [36.5, 18745.0], [36.6, 18745.0], [36.7, 18745.0], [36.8, 18745.0], [36.9, 18745.0], [37.0, 18865.0], [37.1, 18865.0], [37.2, 18865.0], [37.3, 18865.0], [37.4, 18865.0], [37.5, 18865.0], [37.6, 18865.0], [37.7, 18865.0], [37.8, 18865.0], [37.9, 18865.0], [38.0, 18870.0], [38.1, 18870.0], [38.2, 18870.0], [38.3, 18870.0], [38.4, 18870.0], [38.5, 18870.0], [38.6, 18870.0], [38.7, 18870.0], [38.8, 18870.0], [38.9, 18870.0], [39.0, 18960.0], [39.1, 18960.0], [39.2, 18960.0], [39.3, 18960.0], [39.4, 18960.0], [39.5, 18960.0], [39.6, 18960.0], [39.7, 18960.0], [39.8, 18960.0], [39.9, 18960.0], [40.0, 18980.0], [40.1, 18980.0], [40.2, 18980.0], [40.3, 18980.0], [40.4, 18980.0], [40.5, 18980.0], [40.6, 18980.0], [40.7, 18980.0], [40.8, 18980.0], [40.9, 18980.0], [41.0, 19068.0], [41.1, 19068.0], [41.2, 19068.0], [41.3, 19068.0], [41.4, 19068.0], [41.5, 19068.0], [41.6, 19068.0], [41.7, 19068.0], [41.8, 19068.0], [41.9, 19068.0], [42.0, 19149.0], [42.1, 19149.0], [42.2, 19149.0], [42.3, 19149.0], [42.4, 19149.0], [42.5, 19149.0], [42.6, 19149.0], [42.7, 19149.0], [42.8, 19149.0], [42.9, 19149.0], [43.0, 19330.0], [43.1, 19330.0], [43.2, 19330.0], [43.3, 19330.0], [43.4, 19330.0], [43.5, 19330.0], [43.6, 19330.0], [43.7, 19330.0], [43.8, 19330.0], [43.9, 19330.0], [44.0, 19363.0], [44.1, 19363.0], [44.2, 19363.0], [44.3, 19363.0], [44.4, 19363.0], [44.5, 19363.0], [44.6, 19363.0], [44.7, 19363.0], [44.8, 19363.0], [44.9, 19363.0], [45.0, 19567.0], [45.1, 19567.0], [45.2, 19567.0], [45.3, 19567.0], [45.4, 19567.0], [45.5, 19567.0], [45.6, 19567.0], [45.7, 19567.0], [45.8, 19567.0], [45.9, 19567.0], [46.0, 19583.0], [46.1, 19583.0], [46.2, 19583.0], [46.3, 19583.0], [46.4, 19583.0], [46.5, 19583.0], [46.6, 19583.0], [46.7, 19583.0], [46.8, 19583.0], [46.9, 19583.0], [47.0, 19779.0], [47.1, 19779.0], [47.2, 19779.0], [47.3, 19779.0], [47.4, 19779.0], [47.5, 19779.0], [47.6, 19779.0], [47.7, 19779.0], [47.8, 19779.0], [47.9, 19779.0], [48.0, 19860.0], [48.1, 19860.0], [48.2, 19860.0], [48.3, 19860.0], [48.4, 19860.0], [48.5, 19860.0], [48.6, 19860.0], [48.7, 19860.0], [48.8, 19860.0], [48.9, 19860.0], [49.0, 19998.0], [49.1, 19998.0], [49.2, 19998.0], [49.3, 19998.0], [49.4, 19998.0], [49.5, 19998.0], [49.6, 19998.0], [49.7, 19998.0], [49.8, 19998.0], [49.9, 19998.0], [50.0, 20003.0], [50.1, 20003.0], [50.2, 20003.0], [50.3, 20003.0], [50.4, 20003.0], [50.5, 20003.0], [50.6, 20003.0], [50.7, 20003.0], [50.8, 20003.0], [50.9, 20003.0], [51.0, 20087.0], [51.1, 20087.0], [51.2, 20087.0], [51.3, 20087.0], [51.4, 20087.0], [51.5, 20087.0], [51.6, 20087.0], [51.7, 20087.0], [51.8, 20087.0], [51.9, 20087.0], [52.0, 20091.0], [52.1, 20091.0], [52.2, 20091.0], [52.3, 20091.0], [52.4, 20091.0], [52.5, 20091.0], [52.6, 20091.0], [52.7, 20091.0], [52.8, 20091.0], [52.9, 20091.0], [53.0, 20236.0], [53.1, 20236.0], [53.2, 20236.0], [53.3, 20236.0], [53.4, 20236.0], [53.5, 20236.0], [53.6, 20236.0], [53.7, 20236.0], [53.8, 20236.0], [53.9, 20236.0], [54.0, 20349.0], [54.1, 20349.0], [54.2, 20349.0], [54.3, 20349.0], [54.4, 20349.0], [54.5, 20349.0], [54.6, 20349.0], [54.7, 20349.0], [54.8, 20349.0], [54.9, 20349.0], [55.0, 20383.0], [55.1, 20383.0], [55.2, 20383.0], [55.3, 20383.0], [55.4, 20383.0], [55.5, 20383.0], [55.6, 20383.0], [55.7, 20383.0], [55.8, 20383.0], [55.9, 20383.0], [56.0, 20395.0], [56.1, 20395.0], [56.2, 20395.0], [56.3, 20395.0], [56.4, 20395.0], [56.5, 20395.0], [56.6, 20395.0], [56.7, 20395.0], [56.8, 20395.0], [56.9, 20395.0], [57.0, 20483.0], [57.1, 20483.0], [57.2, 20483.0], [57.3, 20483.0], [57.4, 20483.0], [57.5, 20483.0], [57.6, 20483.0], [57.7, 20483.0], [57.8, 20483.0], [57.9, 20483.0], [58.0, 20616.0], [58.1, 20616.0], [58.2, 20616.0], [58.3, 20616.0], [58.4, 20616.0], [58.5, 20616.0], [58.6, 20616.0], [58.7, 20616.0], [58.8, 20616.0], [58.9, 20616.0], [59.0, 20692.0], [59.1, 20692.0], [59.2, 20692.0], [59.3, 20692.0], [59.4, 20692.0], [59.5, 20692.0], [59.6, 20692.0], [59.7, 20692.0], [59.8, 20692.0], [59.9, 20692.0], [60.0, 20714.0], [60.1, 20714.0], [60.2, 20714.0], [60.3, 20714.0], [60.4, 20714.0], [60.5, 20714.0], [60.6, 20714.0], [60.7, 20714.0], [60.8, 20714.0], [60.9, 20714.0], [61.0, 20809.0], [61.1, 20809.0], [61.2, 20809.0], [61.3, 20809.0], [61.4, 20809.0], [61.5, 20809.0], [61.6, 20809.0], [61.7, 20809.0], [61.8, 20809.0], [61.9, 20809.0], [62.0, 20908.0], [62.1, 20908.0], [62.2, 20908.0], [62.3, 20908.0], [62.4, 20908.0], [62.5, 20908.0], [62.6, 20908.0], [62.7, 20908.0], [62.8, 20908.0], [62.9, 20908.0], [63.0, 21005.0], [63.1, 21005.0], [63.2, 21005.0], [63.3, 21005.0], [63.4, 21005.0], [63.5, 21005.0], [63.6, 21005.0], [63.7, 21005.0], [63.8, 21005.0], [63.9, 21005.0], [64.0, 21088.0], [64.1, 21088.0], [64.2, 21088.0], [64.3, 21088.0], [64.4, 21088.0], [64.5, 21088.0], [64.6, 21088.0], [64.7, 21088.0], [64.8, 21088.0], [64.9, 21088.0], [65.0, 21113.0], [65.1, 21113.0], [65.2, 21113.0], [65.3, 21113.0], [65.4, 21113.0], [65.5, 21113.0], [65.6, 21113.0], [65.7, 21113.0], [65.8, 21113.0], [65.9, 21113.0], [66.0, 21203.0], [66.1, 21203.0], [66.2, 21203.0], [66.3, 21203.0], [66.4, 21203.0], [66.5, 21203.0], [66.6, 21203.0], [66.7, 21203.0], [66.8, 21203.0], [66.9, 21203.0], [67.0, 21220.0], [67.1, 21220.0], [67.2, 21220.0], [67.3, 21220.0], [67.4, 21220.0], [67.5, 21220.0], [67.6, 21220.0], [67.7, 21220.0], [67.8, 21220.0], [67.9, 21220.0], [68.0, 21328.0], [68.1, 21328.0], [68.2, 21328.0], [68.3, 21328.0], [68.4, 21328.0], [68.5, 21328.0], [68.6, 21328.0], [68.7, 21328.0], [68.8, 21328.0], [68.9, 21328.0], [69.0, 21331.0], [69.1, 21331.0], [69.2, 21331.0], [69.3, 21331.0], [69.4, 21331.0], [69.5, 21331.0], [69.6, 21331.0], [69.7, 21331.0], [69.8, 21331.0], [69.9, 21331.0], [70.0, 21333.0], [70.1, 21333.0], [70.2, 21333.0], [70.3, 21333.0], [70.4, 21333.0], [70.5, 21333.0], [70.6, 21333.0], [70.7, 21333.0], [70.8, 21333.0], [70.9, 21333.0], [71.0, 21505.0], [71.1, 21505.0], [71.2, 21505.0], [71.3, 21505.0], [71.4, 21505.0], [71.5, 21505.0], [71.6, 21505.0], [71.7, 21505.0], [71.8, 21505.0], [71.9, 21505.0], [72.0, 21526.0], [72.1, 21526.0], [72.2, 21526.0], [72.3, 21526.0], [72.4, 21526.0], [72.5, 21526.0], [72.6, 21526.0], [72.7, 21526.0], [72.8, 21526.0], [72.9, 21526.0], [73.0, 21541.0], [73.1, 21541.0], [73.2, 21541.0], [73.3, 21541.0], [73.4, 21541.0], [73.5, 21541.0], [73.6, 21541.0], [73.7, 21541.0], [73.8, 21541.0], [73.9, 21541.0], [74.0, 21542.0], [74.1, 21542.0], [74.2, 21542.0], [74.3, 21542.0], [74.4, 21542.0], [74.5, 21542.0], [74.6, 21542.0], [74.7, 21542.0], [74.8, 21542.0], [74.9, 21542.0], [75.0, 21738.0], [75.1, 21738.0], [75.2, 21738.0], [75.3, 21738.0], [75.4, 21738.0], [75.5, 21738.0], [75.6, 21738.0], [75.7, 21738.0], [75.8, 21738.0], [75.9, 21738.0], [76.0, 21741.0], [76.1, 21741.0], [76.2, 21741.0], [76.3, 21741.0], [76.4, 21741.0], [76.5, 21741.0], [76.6, 21741.0], [76.7, 21741.0], [76.8, 21741.0], [76.9, 21741.0], [77.0, 21822.0], [77.1, 21822.0], [77.2, 21822.0], [77.3, 21822.0], [77.4, 21822.0], [77.5, 21822.0], [77.6, 21822.0], [77.7, 21822.0], [77.8, 21822.0], [77.9, 21822.0], [78.0, 21858.0], [78.1, 21858.0], [78.2, 21858.0], [78.3, 21858.0], [78.4, 21858.0], [78.5, 21858.0], [78.6, 21858.0], [78.7, 21858.0], [78.8, 21858.0], [78.9, 21858.0], [79.0, 21927.0], [79.1, 21927.0], [79.2, 21927.0], [79.3, 21927.0], [79.4, 21927.0], [79.5, 21927.0], [79.6, 21927.0], [79.7, 21927.0], [79.8, 21927.0], [79.9, 21927.0], [80.0, 22032.0], [80.1, 22032.0], [80.2, 22032.0], [80.3, 22032.0], [80.4, 22032.0], [80.5, 22032.0], [80.6, 22032.0], [80.7, 22032.0], [80.8, 22032.0], [80.9, 22032.0], [81.0, 22047.0], [81.1, 22047.0], [81.2, 22047.0], [81.3, 22047.0], [81.4, 22047.0], [81.5, 22047.0], [81.6, 22047.0], [81.7, 22047.0], [81.8, 22047.0], [81.9, 22047.0], [82.0, 22172.0], [82.1, 22172.0], [82.2, 22172.0], [82.3, 22172.0], [82.4, 22172.0], [82.5, 22172.0], [82.6, 22172.0], [82.7, 22172.0], [82.8, 22172.0], [82.9, 22172.0], [83.0, 22248.0], [83.1, 22248.0], [83.2, 22248.0], [83.3, 22248.0], [83.4, 22248.0], [83.5, 22248.0], [83.6, 22248.0], [83.7, 22248.0], [83.8, 22248.0], [83.9, 22248.0], [84.0, 22284.0], [84.1, 22284.0], [84.2, 22284.0], [84.3, 22284.0], [84.4, 22284.0], [84.5, 22284.0], [84.6, 22284.0], [84.7, 22284.0], [84.8, 22284.0], [84.9, 22284.0], [85.0, 22381.0], [85.1, 22381.0], [85.2, 22381.0], [85.3, 22381.0], [85.4, 22381.0], [85.5, 22381.0], [85.6, 22381.0], [85.7, 22381.0], [85.8, 22381.0], [85.9, 22381.0], [86.0, 22397.0], [86.1, 22397.0], [86.2, 22397.0], [86.3, 22397.0], [86.4, 22397.0], [86.5, 22397.0], [86.6, 22397.0], [86.7, 22397.0], [86.8, 22397.0], [86.9, 22397.0], [87.0, 22458.0], [87.1, 22458.0], [87.2, 22458.0], [87.3, 22458.0], [87.4, 22458.0], [87.5, 22458.0], [87.6, 22458.0], [87.7, 22458.0], [87.8, 22458.0], [87.9, 22458.0], [88.0, 22475.0], [88.1, 22475.0], [88.2, 22475.0], [88.3, 22475.0], [88.4, 22475.0], [88.5, 22475.0], [88.6, 22475.0], [88.7, 22475.0], [88.8, 22475.0], [88.9, 22475.0], [89.0, 22564.0], [89.1, 22564.0], [89.2, 22564.0], [89.3, 22564.0], [89.4, 22564.0], [89.5, 22564.0], [89.6, 22564.0], [89.7, 22564.0], [89.8, 22564.0], [89.9, 22564.0], [90.0, 22572.0], [90.1, 22572.0], [90.2, 22572.0], [90.3, 22572.0], [90.4, 22572.0], [90.5, 22572.0], [90.6, 22572.0], [90.7, 22572.0], [90.8, 22572.0], [90.9, 22572.0], [91.0, 22686.0], [91.1, 22686.0], [91.2, 22686.0], [91.3, 22686.0], [91.4, 22686.0], [91.5, 22686.0], [91.6, 22686.0], [91.7, 22686.0], [91.8, 22686.0], [91.9, 22686.0], [92.0, 22693.0], [92.1, 22693.0], [92.2, 22693.0], [92.3, 22693.0], [92.4, 22693.0], [92.5, 22693.0], [92.6, 22693.0], [92.7, 22693.0], [92.8, 22693.0], [92.9, 22693.0], [93.0, 22695.0], [93.1, 22695.0], [93.2, 22695.0], [93.3, 22695.0], [93.4, 22695.0], [93.5, 22695.0], [93.6, 22695.0], [93.7, 22695.0], [93.8, 22695.0], [93.9, 22695.0], [94.0, 22695.0], [94.1, 22695.0], [94.2, 22695.0], [94.3, 22695.0], [94.4, 22695.0], [94.5, 22695.0], [94.6, 22695.0], [94.7, 22695.0], [94.8, 22695.0], [94.9, 22695.0], [95.0, 22884.0], [95.1, 22884.0], [95.2, 22884.0], [95.3, 22884.0], [95.4, 22884.0], [95.5, 22884.0], [95.6, 22884.0], [95.7, 22884.0], [95.8, 22884.0], [95.9, 22884.0], [96.0, 22900.0], [96.1, 22900.0], [96.2, 22900.0], [96.3, 22900.0], [96.4, 22900.0], [96.5, 22900.0], [96.6, 22900.0], [96.7, 22900.0], [96.8, 22900.0], [96.9, 22900.0], [97.0, 22974.0], [97.1, 22974.0], [97.2, 22974.0], [97.3, 22974.0], [97.4, 22974.0], [97.5, 22974.0], [97.6, 22974.0], [97.7, 22974.0], [97.8, 22974.0], [97.9, 22974.0], [98.0, 22982.0], [98.1, 22982.0], [98.2, 22982.0], [98.3, 22982.0], [98.4, 22982.0], [98.5, 22982.0], [98.6, 22982.0], [98.7, 22982.0], [98.8, 22982.0], [98.9, 22982.0], [99.0, 23091.0], [99.1, 23091.0], [99.2, 23091.0], [99.3, 23091.0], [99.4, 23091.0], [99.5, 23091.0], [99.6, 23091.0], [99.7, 23091.0], [99.8, 23091.0], [99.9, 23091.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 15500.0, "maxY": 4.0, "series": [{"data": [[15500.0, 2.0], [15700.0, 3.0], [16000.0, 1.0], [16100.0, 1.0], [16200.0, 2.0], [16400.0, 1.0], [16500.0, 1.0], [16600.0, 2.0], [16700.0, 1.0], [16800.0, 2.0], [17000.0, 1.0], [17100.0, 1.0], [17300.0, 3.0], [17500.0, 2.0], [17700.0, 1.0], [17900.0, 3.0], [18000.0, 1.0], [18100.0, 2.0], [18200.0, 1.0], [18300.0, 2.0], [18400.0, 1.0], [18500.0, 1.0], [18600.0, 1.0], [18700.0, 1.0], [18800.0, 2.0], [18900.0, 2.0], [19000.0, 1.0], [19100.0, 1.0], [19300.0, 2.0], [19500.0, 2.0], [19700.0, 1.0], [19800.0, 1.0], [19900.0, 1.0], [20000.0, 3.0], [20200.0, 1.0], [20300.0, 3.0], [20400.0, 1.0], [20600.0, 2.0], [20700.0, 1.0], [20800.0, 1.0], [20900.0, 1.0], [21000.0, 2.0], [21100.0, 1.0], [21200.0, 2.0], [21300.0, 3.0], [21500.0, 4.0], [21700.0, 2.0], [21800.0, 2.0], [21900.0, 1.0], [22000.0, 2.0], [22100.0, 1.0], [22200.0, 2.0], [22300.0, 2.0], [22400.0, 2.0], [22500.0, 2.0], [22600.0, 4.0], [22800.0, 1.0], [22900.0, 3.0], [23000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 23000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.52999999999999, "minX": 1.62248736E12, "maxY": 50.52999999999999, "series": [{"data": [[1.62248736E12, 50.52999999999999]], "isOverall": false, "label": "oracleADW", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248736E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 15566.0, "minX": 1.0, "maxY": 23091.0, "series": [{"data": [[2.0, 22974.0], [3.0, 22982.0], [4.0, 22900.0], [5.0, 22884.0], [6.0, 22693.0], [7.0, 22695.0], [8.0, 22686.0], [9.0, 22695.0], [10.0, 22564.0], [11.0, 22572.0], [12.0, 22475.0], [13.0, 22458.0], [14.0, 22381.0], [15.0, 22397.0], [16.0, 22284.0], [17.0, 22248.0], [18.0, 22172.0], [19.0, 22047.0], [20.0, 22032.0], [21.0, 21927.0], [22.0, 21858.0], [23.0, 21822.0], [24.0, 21738.0], [25.0, 21741.0], [26.0, 21542.0], [27.0, 21541.0], [28.0, 21526.0], [29.0, 21505.0], [31.0, 21332.0], [33.0, 21220.0], [32.0, 21328.0], [35.0, 21113.0], [34.0, 21203.0], [37.0, 21005.0], [36.0, 21088.0], [39.0, 20809.0], [38.0, 20908.0], [41.0, 20692.0], [40.0, 20714.0], [43.0, 20483.0], [42.0, 20616.0], [45.0, 20383.0], [44.0, 20395.0], [47.0, 20236.0], [46.0, 20349.0], [49.0, 20087.0], [48.0, 20091.0], [51.0, 19998.0], [50.0, 20003.0], [53.0, 19779.0], [52.0, 19860.0], [55.0, 19567.0], [54.0, 19583.0], [57.0, 19330.0], [56.0, 19363.0], [59.0, 19068.0], [58.0, 19149.0], [61.0, 18980.0], [60.0, 18960.0], [63.0, 18865.0], [62.0, 18870.0], [67.0, 18416.0], [66.0, 18550.0], [65.0, 18629.0], [64.0, 18745.0], [71.0, 18133.0], [70.0, 18236.0], [69.0, 18350.5], [75.0, 17950.0], [74.0, 17958.0], [73.0, 18057.0], [72.0, 18145.0], [79.0, 17522.0], [78.0, 17513.0], [77.0, 17730.0], [76.0, 17915.0], [83.0, 17117.0], [82.0, 17312.0], [81.0, 17302.0], [80.0, 17314.0], [87.0, 16795.0], [86.0, 16868.0], [85.0, 16884.0], [84.0, 17011.0], [91.0, 16467.0], [90.0, 16593.0], [89.0, 16606.0], [88.0, 16699.0], [95.0, 16066.0], [94.0, 16168.0], [93.0, 16293.0], [92.0, 16292.0], [98.0, 15776.0], [97.0, 15776.0], [96.0, 15797.0], [100.0, 15566.0], [1.0, 23091.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.52999999999999, 19696.57]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 380.0, "minX": 1.62248736E12, "maxY": 25098.333333333332, "series": [{"data": [[1.62248736E12, 25098.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62248736E12, 380.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248736E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 19696.57, "minX": 1.62248736E12, "maxY": 19696.57, "series": [{"data": [[1.62248736E12, 19696.57]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248736E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 19415.629999999986, "minX": 1.62248736E12, "maxY": 19415.629999999986, "series": [{"data": [[1.62248736E12, 19415.629999999986]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248736E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3438.2200000000003, "minX": 1.62248736E12, "maxY": 3438.2200000000003, "series": [{"data": [[1.62248736E12, 3438.2200000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248736E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 15563.0, "minX": 1.62248736E12, "maxY": 23091.0, "series": [{"data": [[1.62248736E12, 23091.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62248736E12, 22571.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62248736E12, 23089.91]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62248736E12, 22874.55]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62248736E12, 15563.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62248736E12, 20000.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248736E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16467.0, "minX": 5.0, "maxY": 22397.0, "series": [{"data": [[16.0, 21332.0], [17.0, 22397.0], [9.0, 16467.0], [5.0, 19340.5], [10.0, 17307.0], [11.0, 19149.0], [13.0, 18236.0], [14.0, 20366.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16191.0, "minX": 5.0, "maxY": 22119.0, "series": [{"data": [[16.0, 21050.0], [17.0, 22119.0], [9.0, 16191.0], [5.0, 19056.5], [10.0, 17025.5], [11.0, 18871.0], [13.0, 17958.0], [14.0, 20085.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248736E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248736E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248736E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248736E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248736E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62248736E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248736E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248736E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248736E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.62248736E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.62248736E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62248736E12, "title": "Total Transactions Per Second"}},
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

