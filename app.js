let searchBtn=document.getElementById('btn');
let searchTxt=document.getElementById('txt');


searchBtn.addEventListener('click',()=>{
    videoSearch(searchTxt);
});


const videoSearch=function (txt) {
    let inpt=txt.value;
    // return location.href=`https://www.youtube.com/results?search_query=${inpt}`;
    return location.href="videoPlay.html";
}
