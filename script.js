
let dd,hh,mm,ss
let dc=document.querySelector('#d')
let hc=document.querySelector('#h')
let mc=document.querySelector('#m')
let sc=document.querySelector('#s')

function dayy(dd){
    switch(dd){
        case 0:
            dc.textContent='SUN'
            break
        case 1:
            dc.textContent='MON'
            break
        case 2:
            dc.textContent='TUE'
            break
        case 3:
            dc.textContent='WED'
            break        
        case 4:
            dc.textContent='THU'
            break            
        case 5:
            dc.textContent='FRI'
            break
        case 6:
            dc.textContent='SAT'
            break


    }
}
function run(){
    let time=new Date();
    ss=time.getSeconds()
    mm=time.getMinutes()
    hh=time.getHours()
    dd=time.getDay()

    dayy(dd)

    hc.textContent=hh
    mc.textContent=mm
    sc.textContent=ss
}

run()

setInterval(function(){
    run()
},1000)


