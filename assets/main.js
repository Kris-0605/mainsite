async function get_tr() {
    let rating = await fetch("https://kristr.kris.software")
    document.getElementById("tr").innerHTML = await rating.text()
}