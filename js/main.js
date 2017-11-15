const Charts = document.getElementById("chartjs");
//Chart.defaults.scale.ticks.beginAtZero =true;
var dataarray=[];
var percent;
var i=0;
while(i<6)
{
    value=Math.floor((Math.random() * 100) + 1);
    //percent = ((value - 15) / (40 - 15)) * 100;
    dataarray[i]= value;
    i++;
}
var Dchart = new Chart(Charts,{
        type: "doughnut",
        data: {
           // labels :['DRESSING,ADHESIVE FILM','COVER EQUIPMENT','DRAPE,PROCEDURAL','DRUG TOPICAL','BLADE,GENERAL','TAPE,MEDICAL AND STERI STRIPS'],
         labels :['FILM','EQUIPMENT',',PROCEDURAL','TOPICAL','BGENERAL','STRIPS'],
            datasets: [
                {
                    label :"Points",
                    backgroundColor: ['#ff6384','#36a2eb','#B276B2','#DECF3F','#FAA43A','#F17CB0'],
                    data:dataarray,
                }
            ]
             },
         options: {
                    legend: {
                        display: true,  //Display the legend on top, if flase not
                        
                    },
                    onClick : function (evt, elements) {

                                var index = elements[0]._index;
                               // datasetIndex = elements[0]._datasetIndex;
                               // alert(datasetIndex);
                               // alert(evt.pageX);
                               // alert(evt.pageY);
                                //alert(Dchart.data.labels[[index]]+" "+Dchart.data.datasets[0].data[[index]]);     
                               // document.getElementById("p2").innerHTML=Dchart.data.datasets[0].data[[index]] ; //Get the data value(numbers);
                               var percent = Dchart.data.datasets[0].data[[index]] ;
                               var percentage = percent+"% of savings";
                               document.getElementById("p2").innerHTML=percentage
                               document.getElementById("p1").innerHTML=Dchart.data.labels[[index]]; //Print the labels clicked
                               document.getElementById("tag").style.display = "block";
              
                    },
                    cutoutPercentage:60,
                    animation: {
                        animationScale: true
                    }
                }
});
