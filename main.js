const text = document.getElementById("text");
const ck = document.getElementById("ckbtn");
const right = document.getElementById("righta");
const down = document.getElementById("downa");
const finish = document.getElementById("finish");
const items = document.getElementById("items");
const finishitem = document.getElementById("finishitem");
const menu2 = document.getElementById("menu2");

//시계  
const timer = () => {
    const clock = document.querySelector('.clock');
    const today = new Date();
    let h = today.getHours();
    if (h == 0) {
        h = 12;
    }
    (h > 12) ? h = 'PM ' + (h-12) : h = 'AM ' + h;
    clock.innerHTML = 
        `${addZero(h)} : ${addZero(today.getMinutes())} : 
        ${addZero(today.getSeconds())}`;
}

const addZero = (num) => {
    (num < 10) ? num = '0' + num : num;
    return num;
}

const start = () => {
  timer();
  setInterval(timer, 1000);
}

window.onload = start();


//인풋 마우스 오버
text.addEventListener("mouseover", function(){
    text.focus();
    text.style.borderBottom="2px solid gray";
})

//추가 버튼 동작
ck.addEventListener("click", function(){
    if(text.value != ""){
        items.style.display="inline";
        const item = document.createElement('ul');
        item.innerText = text.value;
        items.appendChild(item);
        ck.style.display="inline";
        text.value = "";
        ck.checked=false;
        item.style.fontSize="20px";
        item.style.marginLeft="20px";
        item.style.marginTop="10px";
        item.style.borderBottom="1px solid rgb(172, 172, 172)"
        item.style.width="700px"
        item.style.paddingTop="10px";

        //텍스트 클릭 시 줄을 그어줌
        item.addEventListener('click', function(e){
        e.stopPropagation();
        item.style.textDecoration = "line-through";
        })

        //별이미지
        var img = document.createElement('img');
        img.id="starem";
        img.src = "./image/starem.png";
        item.appendChild(img);
        img.style.width="20px";
        img.style.height="20px";
        img.style.float="right";
        img.style.cursor="pointer";
        //별 클릭 시 노란색으로 -> 중요로 이동해야함
        img.addEventListener("click", function(e){
            //이벤트 버블링 방지
            //e.stopPropagation();
            var newimg = document.createElement('img');
            img.id="starfu";
            img.src = "./image/starfu.png";


            if(img.src="./image/starem.png"){
                img.id="starfu";
                img.src="./image/starfu.png";
            }
            else {
                img.id.replace=("starem");
                img.src.replace=("./image/starem.png");
            }
            // img.src = "./image/starfu.png";
            // img.appendChild(newimg);
        })
    }
    
});

//엔터키 텍스트 추가 
text.addEventListener("keyup", function(e){
    e.preventDefault();
    if(e.key === 'Enter' && text.value != ""){
        items.style.display="inline";
        const list2 = document.createElement('ul');
        list2.innerText = text.value;
        items.appendChild(list2);
        ck.style.display="inline";
        text.value = "";
        items.style.fontSize="20px";
        items.style.marginLeft="20px";
        items.style.marginTop="10px";
        list2.style.borderBottom="1px solid rgb(172, 172, 172)"
        list2.style.width="700px"
        list2.style.paddingTop="10px";
        list2.addEventListener('click', function(){
        list2.style.textDecoration = "line-through";
        })

         //텍스트 클릭 시 줄을 그어줌
         item.addEventListener('click', function(e){
            e.stopPropagation();
            list2.style.textDecoration = "line-through";
            })
    
            //별이미지
            var img = document.createElement('img');
            img.id="starem";
            img.src = "./image/starem.png";
            list2.appendChild(img);
            img.style.width="20px";
            img.style.height="20px";
            img.style.float="right";
            img.style.cursor="pointer";
            //별 클릭 시 노란색으로 -> 중요로 이동해야함????이건 우째하지
            img.addEventListener("click", function(e){
                //이벤트 버블링 방지
                e.stopPropagation();
                //e.target.src="./image/starfu.png";
                // const newimg = document.createElement('img');
                // newimg.id="starfu";
                // img.appendChild(newimg);
                
            })
            
    }
});


//별이랑 취소선 다시 누르면 없어지게 -> 구현해야함


//더블 클릭시 완료됨으로 이동 -> 구현해야함

//중요페이지에 아이템 옮기기 -> 구현해야함
menu2.style.cursor="pointer";
menu2.addEventListener('click', function(){
    
})