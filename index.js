window.onload = function(){
    var sumnumber = 0;  //用于累加 收入
    var sumnumber1 = 0; //用于累加 支出
document.getElementById("btn").addEventListener("click",function(event){
    event.preventDefault();  //取消默认事件


var namenode = document.getElementById("name");
var moneynode = document.getElementById("money");

var namevalue = namenode.value;
var moneyvalue = moneynode.value;

//判断条件，跳出警告框
if(namevalue.length === 0 ){
    alert("收条支目不可为空")
    return;
}else if(namevalue.length > 10){
    alert("收条支目不可超过10个字符")
    return;
}else if(moneyvalue.length === 0){
    alert("金额不可为空")
    return;
}

//转型
 moneyvalue = Number(moneyvalue);


 //创建li节点
var liNode= document.createElement("li");

//给li节点增加文本内容
if(moneyvalue>0){   //判断如果大于0，则给前面添加一个 + 
liNode.innerHTML = `
            <p class="recordName" >${namevalue}</p>  
            <p class="recordMoney">+${moneyvalue}</p>  
                        `;
}else if(moneyvalue<=0){
    liNode.innerHTML = `
            <p class="recordName" >${namevalue}</p>  
            <p class="recordMoney">${moneyvalue}</p>  
                        `;
}

//将li节点插入到ul节点中
document.getElementsByTagName("ul")[0].append(liNode);


//每次添加完清空内容
namenode.value = "";
moneynode.value ="";


// =========================================================================

var num1 =document.getElementById("num1");
var num2 =document.getElementById("num2");

//判断符号
if(moneyvalue>=0){      //大于0的相加在一起就是收入                     
    sumnumber += moneyvalue;
       num1.innerHTML =`<span id="num1">￥${sumnumber}</span>`;
}else if(moneyvalue<0){  //小于0的相加在一起就是支出
    sumnumber1 += moneyvalue;
    sumnumber1 = -sumnumber1;  //去掉 负号
     num2.innerHTML = `<span id="num2">￥${sumnumber1}</span>`;
}

//将他们的收入和支出相加得到总和
document.getElementById("title").innerHTML = `￥
         ${sumnumber+(-sumnumber1)}
`;




})

}
