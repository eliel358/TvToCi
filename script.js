function createBinaryTable(numVariables) {
    document.getElementById("tabela").innerHTML = ''

    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.margin = "20px auto";
    table.style.width = "50%";
    table.id = 'table'

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

calc = () =>{
    tablerows = document.getElementById('table').childNodes
    // console.log(tablerows)
    form = []
    for (let i = 1; i < tablerows.length; i++) {
        // console.log(i)
        numerodetr = tablerows[i].childNodes.length
        // console.log((tablerows[i].childNodes.length))//cada tr
        // console.log('----')//cada 3
        linha = []
        for (k =0;k< numerodetr;k++) {
            //k = col;i = row
            // console.log(tablerows[i].childNodes[k].innerHTML)
            cell = tablerows[i].childNodes[k].innerHTML
            if(cell == 0){
                cell = '|'+tablerows[0].childNodes[k].innerHTML
            }else if(cell == 1){
                cell = tablerows[0].childNodes[k].innerHTML
            }
            linha.push(cell)
        }
        console.log(linha)
        console.log(i)
        console.log(document.getElementById('checkbox'+(i-1)).checked)
        if((document.getElementById('checkbox'+(i-1)).checked)){
            str = ''
            for (v =0;v< linha.length -1;v++) {
                if(v == 0){
                    str = '( '+str+linha[v]
                }else{
                    str = str+' * '+linha[v]+" ) "

                }
            }
            form.push(str)
        }
        str = ''
        for(d in form){
            if(d == 0){
                str = str + form[d]
            }else{
                str = str +" + "+ form[d]

            }

        }
        console.log(form)
        console.log(str)
        document.getElementById('resposta').innerHTML = str
    }
}

const numVariables = 0; 

document.getElementById('increasevarnumber').addEventListener('click',()=>{

    document.getElementById('inportnumber').innerHTML = parseInt(document.getElementById('inportnumber').innerHTML)+1
    createBinaryTable(parseInt(document.getElementById('inportnumber').innerHTML));
})
document.getElementById('decreasevarnumber').addEventListener('click',()=>{

    document.getElementById('inportnumber').innerHTML = parseInt(document.getElementById('inportnumber').innerHTML)-1
    createBinaryTable(parseInt(document.getElementById('inportnumber').innerHTML));
})
createBinaryTable(numVariables);
document.getElementById('calcular').addEventListener('click',()=>{
    calc()
})