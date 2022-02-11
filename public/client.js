console.log('Client-side code running');

function relay(buttonNumber, on) {
    const url = `http://192.168.1.4/30000/${(buttonNumber*2-(on?2:1)).toString().padStart(2, '0')}`;
    console.log(url);
    //fetch(url, {method: 'GET'})
    //.then((response)=>{
    //    if(response.ok) {
    //        console.log(`Button ${buttonNumber} toggled ${on?'on':'off'}.`);
    //    }
    //})
}

document.getElementById('myButton1').addEventListener('click', (e) => {relay(1, true)});
document.getElementById('myButton2').addEventListener('click', (e) => {relay(1, false)});
document.getElementById('myButton3').addEventListener('click', (e) => {relay(2, true)});
document.getElementById('myButton4').addEventListener('click', (e) => {relay(2, false)});
document.getElementById('myButton5').addEventListener('click', (e) => {relay(3, true)});
document.getElementById('myButton6').addEventListener('click', (e) => {relay(3, false)});
document.getElementById('myButton7').addEventListener('click', (e) => {relay(4, true)});
document.getElementById('myButton8').addEventListener('click', (e) => {relay(4, false)});
//jalan di browser


