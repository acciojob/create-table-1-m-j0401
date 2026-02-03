function insert_Row() {
    //Write your code here
  let table=document.querySelector("#sampleTable");
	let tr=document.createElement("tr");
	let td_1=document.createElement("td");
	let td_2=document.createElement("td");
	td_1.innerText="New Cell1";
	td_2.innerText="New Cell2";
	tr.append(td_1);
	tr.append(td_2);
	table.prepend(tr);
  
}
