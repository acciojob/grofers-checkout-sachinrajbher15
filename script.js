const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table=document.querySelector("table")
let price=document.querySelectorAll(".price")
let newrow=document.createElement("tr")
let total=document.createElement("td")
let sum=document.createElement("td")
total.innerText="Total Price";
sum.id="ans"
table.append(total);
table.append(sum)



const getSum = () => {
//Add your code here
	let totalsum=0
	for(let i=0;i<price.length;i++){
		totalsum=totalsum+parseInt(price[i].innerText)
	}
	sum.innerText=totalsum
};
getSumBtn.addEventListener("click", getSum);
