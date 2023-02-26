function imt() {
    let w = document.getElementById('w').value;
    // Рассчет ИМТ
    let imt = w/100;
    let imt2 = w/1000000
    let imt3 = w * 10
    document.getElementById('result2').innerText = imt3;
    document.getElementById('result').innerText = imt;
    document.getElementById('status').innerText = imt2;
    }