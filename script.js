let prnt_div = document.createElement("div")
prnt_div.className="main"

let inp_dat = document.createElement("input")
inp_dat.setAttribute("type","date")
inp_dat.id="dob"

let btn = document.createElement("button")
btn.setAttribute("type","button")
btn.className="btn btn-primary"
btn.innerHTML = "Display Data"
btn.addEventListener("click",date_result)

let res = document.createElement("div")
res.className="main1"
res.innerHTML=""

prnt_div.append(inp_dat,btn,res)
document.body.append(prnt_div)

function date_result(){
    
    let input = document.getElementById("dob").value;
    console.log(input)
    if(input!==""){
        let inp_date = new Date(input)
        let curr_date = new Date()
        
        
        let msec = parseInt(curr_date.getTime())-parseInt(inp_date.getTime())
        
        console.log(inp_date)
        console.log(curr_date)
        console.log(msec)

        let sec = Math.floor(msec/1000)
        console.log(sec)

        let min = Math.floor(sec/60)
        console.log(min)

        let hr = Math.floor(min/60)
        console.log(hr)

        let day = Math.floor(hr/24)
        console.log(day)

        var yr = curr_date.getFullYear() - inp_date.getFullYear()
        console.log(yr);

        var mnth = (yr*12)+(curr_date.getMonth()-inp_date.getMonth())
        console.log(mnth);
        res.innerHTML=`
        Given Input Date is: ${inp_date} <br>
        Year:${yr} <br>
        Month:${mnth} <br>
        Days:${day} <br>
        Hours:${hr} <br>
        Minutes:${min} <br>
        Seconds:${sec} <br>
        MilliSeconds:${msec}
        `
    }
    else{
       res.innerHTML="<b>SELECT VALID DATE!!!<b>"
        // prnt_div.append(inp_dat,btn,alert)
        // document.body.append(prnt_div)
    }
}





