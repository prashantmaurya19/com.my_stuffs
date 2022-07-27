document.getElementById("start").addEventListener('click',function (e){
    let sr = parseInt(document.querySelector("#srange").value);
    let er = parseInt(document.querySelector("#erange").value);
    let dn = parseInt(document.querySelector("#dataset").value);

    test(dn,sr,er);

    document.querySelector("#srange").innerHTML = "";
    document.querySelector("#erange").innerHTML = "";
    document.querySelector("#dataset").innerHTML = "";
})