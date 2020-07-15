var imagenes = [];
imagenes["Cauchin"] = "cerdo.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "vaca.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var pakin of coleccion)
{
    pakin.mostrar(); 
}

for (var x in imagenes)
    {
        console.log(x);
    }