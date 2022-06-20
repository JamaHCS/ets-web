const currencies = raw.data;
const tbody = document.getElementById('tbody');

console.log(currencies)

const getTemplate = (currencie) => {
    return `
    <tr>
        <td>${currencie.cmc_rank}</td>
        <td class="symbol">
        <div>
            <img src="./assets/${currencie.img}" alt="Currencie" srcset="" height="24" width="24">
            <span>${currencie.name}</span>
            <span>${currencie.symbol}</span>
        </div>
        </td>
        <td>$ ${new Intl.NumberFormat().format(currencie.quote.USD.price)}</td>
        <td class="${currencie.quote.USD.percent_change_24h > 0 ? 'color-green' : 'color-red'}">${new Intl.NumberFormat().format(currencie.quote.USD.percent_change_24h)} %</td>
        <td class="${currencie.quote.USD.percent_change_7d > 0 ? 'color-green' : 'color-red'}">${new Intl.NumberFormat().format(currencie.quote.USD.percent_change_7d)} %</td>
        <td>$ ${new Intl.NumberFormat().format(currencie.quote.USD.market_cap)}</td>
        <td class="volume">
        <div>
            <span>${new Intl.NumberFormat().format(currencie.quote.USD.volume_24h)} %</span>
            <span></span>
        </div>
        </td>
        <td>${new Intl.NumberFormat().format(currencie.total_supply)} ${currencie.symbol}</td>
        <td><img class="img-chart" src="./assets/chart.jpg" alt="chart" width="100" height="40" /></td>
    </tr>
    `;
}

const printCurrencies = () => {
    tbody.innerHTML = '';
    let toPrint = currencies.filter(e => e.cmc_rank < 11);
    toPrint.forEach(e => {
        tbody.innerHTML += getTemplate(e);
    });
};

printCurrencies();