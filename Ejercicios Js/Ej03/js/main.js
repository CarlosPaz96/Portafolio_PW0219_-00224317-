window.onload = function () {
    let btn_dia1 = document.querySelector("#d1")[0];
    let btn_dia2 = document.querySelector("#d2")[0];
    let btn_dia3 = document.querySelector("#d3")[0];
    let btn_dia4 = document.querySelector("#d4")[0];
    let btn_dia5 = document.querySelector("#d5")[0];
    let ListaId = ["'#d1'", "'#d2'", "'#d3'", "'#d4'", "'#d5'"];
    let lista = [];
    let listaAnterior = [];

    function selectorVista(boton) {

        if (boton === 1) {
            console.log('select 1');
            lista = [true, false, false, false, false];
            ocultarMostrar();
        }else{
            if (boton === 2) {
                console.log('select 2');
                lista = [false, true, false, false, false];
                ocultarMostrar();
            } else {
                if (boton === 3) {
                    console.log('select 3');
                    lista = [false, false, true, false, false];
                    ocultarMostrar();
                } else {
                    if (boton === 4) {
                        console.log('select 4');
                        lista = [false, false, false, true, false];
                        ocultarMostrar();
                    } else {
                        if (boton === 5) {
                            console.log('select 5');
                            lista = [false, false, false, false, true];
                            ocultarMostrar();
                        }
                    }
                }
            }
        }

    }

    function ocultarMostrar() {
        let nnn;

        for (let i = 0; i < 5; i++) {
            if (lista[i] === true) {
                if (listaAnterior === null) {
                    nnn = document.getElementsById(ListaId[i]).style.display = 'inherit';
                    listaAnterior = lista;
                    lista = [];
                } else {
                    if (lista[i] === true && listaAnterior[i] === true) {
                        nnn = document.getElementsById(ListaId[i]).style.display = 'inherit';
                        listaAnterior = lista;
                        lista = [];
                    } else {
                        if (lista[i] === false && listaAnterior[i] === true) {
                            nnn = document.getElementsById(ListaId[i]).style.display = 'none';
                            let num = lista.indexOf(true);
                            nnn = document.getElementsById(ListaId[num]).style.display = 'inherit';
                            i = 5;
                        }
                        else {
                            if (lista[i] === true && listaAnterior[i] === false) {
                                nnn = document.getElementsById(ListaId[i]).style.display = 'inherit';
                                listaAnterior = lista;
                                lista = [];
                            }
                            else {
                                if (lista[i] === false && listaAnterior[i] === false) {
                                    console.log('falsos los dos');
                                }
                            }
                        }

                    }

                }

            }

        }
    }

    let xa = document.getElementById('#d1');
    xa.addEventListener('click', selectorVista(1), false);
    let xb = document.querySelector('#d2');
    xb.addEventListener('click', selectorVista(2), false);
    let xc = document.querySelector('#d3');
    xc.addEventListener('click', selectorVista(3), false);
    let xd = document.querySelector('#d4');
    xd.addEventListener('click', selectorVista(4), false);
    let xe = document.querySelector('#d5');
    xe.addEventListener('click', selectorVista(5), false);
/*
    btn_dia1.addEventListener('click', selectorVista(1), false);
    btn_dia2.addEventListener('click', selectorVista(2), false);
    btn_dia3.addEventListener('click', selectorVista(3), false);
    btn_dia4.addEventListener('click', selectorVista(4), false);
    btn_dia5.addEventListener('click', selectorVista(5), false);


*/


}
