let v = [2,2,2,2,2,2,2,2,2]
let entry = 0
let cnt = 0
function finish()
{
    let p1 = sessionStorage.getItem("p11");
    let p2 = sessionStorage.getItem("p22");
    if(entry === 1)
    document.getElementById("msg").innerText = "💥" + p1 + " Won💥";
    else
    document.getElementById("msg").innerText = "💥" + p2 + " Won💥";
    document.getElementById("divv").innerHTML = `
    <br></br>
    <button id="newbtn" onclick="window.location.href = '/Tick.html';">New Game</button>
    `;
}
function draw()
{
    document.getElementById("msg").innerText = "🤝Draw🤝";
    document.getElementById("divv").innerHTML = `
    <br></br>
    <button id="newbtn" onclick="window.location.href = '/Tick.html';">New Game</button>
    `;
}
function check()
{
    cnt++;
    if(cnt === 9)
    {
        draw();
    }

    if(v[0] === 1 && v[4] === 1 && v[8] === 1 ||  v[0] === 0 && v[4] === 0 && v[8] === 0)
    {
        finish();
        return;
    }
    if(v[2] === 0 && v[4] === 0 && v[6] === 0 ||  v[2] === 1 && v[4] === 1 && v[6] === 1)
    {
        finish();
        return;
    }
    for(let i = 0; i <3 ; i+=1)
    {
        if((v[i] === 0 || v[i] === 1 ) && v[i] === v[i+3] && v[i+3] === v[i+6] || (v[3*i] === 0 || v[3*i] === 1 ) && v[3*i] === v[3*i+1] && v[3*i+1]===v[3*i+2])
        {
            finish();
            break;

        }
    }
}
function b1()
{
    if(v[0] === 2)
    {
        v[0] = entry
    document.getElementById("btn1").innerText = "" + entry;
    entry = 1-entry;
    check();
    }
};
function b2()
{
    if(v[1] === 2)
    {
        v[1] = entry
    document.getElementById("btn2").innerText = "" + entry;
    entry = 1-entry;
    check();
    }
};
function b3()
{
    if(v[2] === 2)
    {
        v[2] = entry
    document.getElementById("btn3").innerText = "" + entry;
    entry = 1-entry;
    check();
    }
};
function b4()
{
    if(v[3] === 2)
    {
        v[3] = entry
    document.getElementById("btn4").innerText = "" + entry;
    entry = 1-entry;
    check();
    }
};
function b5()
{
    if(v[4] === 2)
    {
        v[4] = entry
    document.getElementById("btn5").innerText = "" + entry;
    entry = 1-entry;
    check();
    }
};
function b6()
{
    if(v[5] === 2)
    {
        v[5] = entry
    document.getElementById("btn6").innerText = "" + entry;
    entry = 1-entry;
    check();
    }
};
function b7()
{
    if(v[6] === 2)
    {
        v[6] = entry
    document.getElementById("btn7").innerText = "" + entry;
    entry = 1-entry;
    check();
    }
};
function b8()
{
    if(v[7] === 2)
    {
        v[7] = entry
    document.getElementById("btn8").innerText = "" + entry;
    entry = 1-entry;
    check();
    }
};
function b9()
{
    if(v[8] === 2)
    {
        v[8] = entry
    document.getElementById("btn9").innerText = "" + entry;
    entry = 1-entry;
    check();
    }
};
function namee(){
            sessionStorage.setItem("p11", document.getElementById("px").value);
            sessionStorage.setItem("p22", document.getElementById("py").value);

     window.location = "/next.html";

}

    
