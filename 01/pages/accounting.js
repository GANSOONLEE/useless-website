
let rowRecord = document.querySelector("#cashflow-record");

// define an cashflow class
class Cashflow
{
    serialNumber;
    category;
    current;
    date;
    time;

    constructor(category, current, date, time)
    {
        this.serialNumber = this.generateSerialNumber();
        this.category = category;
        this.current = current;
        this.date = date;
        this.time = time;
    }

    /**
     * @returns {string}
     */
    queryAmount()
    {
        return "NTD " . this.current;
    }

    /**
     * @returns {string}
     */
    generateSerialNumber()
    {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

}
let cashflowArray = [];
let recordOne = new Cashflow("支出 - 伙食費", "1,200", '2024-02-23', '22:25:23');
let recordTwo = new Cashflow("收入 - 工資", "23,800", '2024-02-28', '05:12:34');
let recordTHree = new Cashflow("測試", "10,200", '2024-03-03', '12:32:23');
cashflowArray.push(recordOne, recordTwo, recordTHree);

/**
 * render Cashflow instance to the table
 */
const tableRow = document.querySelector('#cashflow-record');

function renderRecord ()
{
    cashflowArray.forEach(record => {
        
        // create tr
        let tr = document.createElement('tr');
        
        let td1 =  document.createElement('td');
        td1.innerText = record['serialNumber'];

        let td2 =  document.createElement('td');
        td2.innerText = record['category'];

        let td3 =  document.createElement('td');
        td3.innerText = record['current'];

        let td4 =  document.createElement('td');
        td4.innerText = record['date'];

        let td5 =  document.createElement('td');
        td5.innerText = record['time'];

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tableRow.appendChild(tr);

    });
}

renderRecord();