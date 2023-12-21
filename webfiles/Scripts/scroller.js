let a = 0
function movetext (waittime) {
    document.getElementById("amog").innerHTML = "among us ";
    sleep(waittime*1).then(() => {  document.getElementById("amog").innerHTML = "s among u"; });
    sleep(waittime*2).then(() => {  document.getElementById("amog").innerHTML = "us among "; });
    sleep(waittime*3).then(() => {  document.getElementById("amog").innerHTML = " us among"; });
    sleep(waittime*4).then(() => {  document.getElementById("amog").innerHTML = "g us amon"; });
    sleep(waittime*5).then(() => {  document.getElementById("amog").innerHTML = "ng us amo"; });
    sleep(waittime*6).then(() => {  document.getElementById("amog").innerHTML = "ong us am"; });
    sleep(waittime*7).then(() => {  document.getElementById("amog").innerHTML = "mong us a"; });
    sleep(waittime*8).then(() => {  document.getElementById("amog").innerHTML = "among us "; });
    sleep(waittime*9).then(() => {if (x = 1) {
                movetext(1)
            } });
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function stop(){
        x = 0
}