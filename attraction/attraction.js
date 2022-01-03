function calculate(){
var location1 = {
    latitude: document.getElementById("lat1").value,
    longitude: document.getElementById("long1").value,
}
m1 = document.getElementById("m1").value;
var location2 = {
    latitude:  document.getElementById("lat2").value,
    longitude: document.getElementById("long2").value
}
m2 = document.getElementById("m2").value;
long1 = location1.longitude/(180/Math.PI)
lat1 = location1.latitude/(180/Math.PI)
long2 = location2.longitude/(180/Math.PI)
lat2 = location2.latitude/(180/Math.PI)
distance = 3963.0 * Math.acos((Math.sin(lat1) * Math.sin(lat2)) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2-long1)) *1.609344
r = 6371
if(document.getElementById("distance").value!==null){
    distance=document.getElementById("distance").value
}
angle = distance/r
absolutedistance = 2*r*Math.sin(angle/2)
g = 6.67 * Math.pow(10,-11)
gravitationalattraction = (g*m1*m2)/(Math.pow(distance,2))
alert("They are attracted to you by " + gravitationalattraction + " newtons!")
}
