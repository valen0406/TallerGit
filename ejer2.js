function cuadrado() {
    let lado = 0;
    let area = 0;
    let perimetro = 0;

    lado = document.getElementById("lado").value;
    area = lado * lado;
    perimetro = lado * 4;    

    document.getElementById("area").value = area;
    document.getElementById("perimetro").value = perimetro;
}