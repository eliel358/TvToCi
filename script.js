function createBinaryTable(numVariables) {
    document.getElementById("tabela").innerHTML = ''

    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.margin = "20px auto";
    table.style.width = "50%";

    const headerRow = document.createElement("tr");
    const headers = Array.from({ length: numVariables }, (_, i) => String.fromCharCode(65 + i)); 
    headers.push("S"); 

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        th.style.border = "1px solid black";
        th.style.padding = "10px";
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    const numRows = Math.pow(2, numVariables);
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");

        const binaryValues = i.toString(2).padStart(numVariables, "0").split("").map(Number);

        binaryValues.forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });

        const sCell = document.createElement("td");
        sCell.innerHTML = '<input type="checkbox" id="checkbox'+i+'" style="width: 2em;" >'; 
        
        row.appendChild(sCell);

        table.appendChild(row);
    }

    document.getElementById("tabela").appendChild(table);
}

const numVariables = 3; 

document.getElementById('increasevarnumber').addEventListener('click',()=>{

    document.getElementById('inportnumber').innerHTML = parseInt(document.getElementById('inportnumber').innerHTML)+1
    createBinaryTable(parseInt(document.getElementById('inportnumber').innerHTML));
})
document.getElementById('decreasevarnumber').addEventListener('click',()=>{

    document.getElementById('inportnumber').innerHTML = parseInt(document.getElementById('inportnumber').innerHTML)-1
    createBinaryTable(parseInt(document.getElementById('inportnumber').innerHTML));
})
createBinaryTable(numVariables);