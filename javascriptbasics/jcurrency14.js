const populate = async (value, currency) => {
    let myStr = "";
     let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_We5dvf1iQDvXiXNt8PKtYPW3ZDcoSJ86Qq50X27a&base_currency=" + currency;
    
    try {
        let response = await fetch(url);
        let rJson = await response.json();
        document.querySelector(".output").style.display = "block";

        for (let key of Object.keys(rJson["data"])) {
            myStr += `<tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr>`;
        }
        const tableBody = document.querySelector("tbody");
        tableBody.innerHTML = myStr;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
});
