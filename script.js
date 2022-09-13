
        //recibe texto de usuario
        //var x =prompt("Ingrese texto");
        //convierto todo lo incresado a minuscula
        //x = x.toLowerCase();

            const cajaTexto =document.querySelector(".cajaEncriptar");
            const txtEncriptado = document.querySelector(".cajaDesencriptar");
         
        function btnEncriptar(){
                const textoEncriptado =encriptar(cajaTexto.value)
                txtEncriptado.value =textoEncriptado;
                cajaTexto.value ="";

        }

        function btnDesencriptar(){
            
            const textoEncriptado =desencriptar(cajaTexto.value)
            txtEncriptado.value =textoEncriptado;
            cajaTexto.value ="";
        }
       function btnCopiar(){
            txtEncriptado.select();
            navigator.clipboard.writeText(txtEncriptado.value);
            txtEncriptado.value="";
            alerta();
       }
       function alerta(){
        Swal.fire(
            'Mensaje copiado!'
          )
       }    
        
/*
            //convierte lo ingresado en un array
            //cajaTexto = cajaTexto.toString().split("");
        function encriptar(arr){

            for(i=0; i<=arr.length;i++){
            //empiza a buscar las iniciales para comparar
                if(arr[i]=="e"){
                    arr[i]=arr[i]+"nter";
                }
                if(arr[i]=="i"){
                    arr[i]=arr[i]+"mes";
                }
                if(arr[i]=="a"){
                    arr[i]=arr[i]+"i";
                }
                if(arr[i]=="o"){
                    arr[i]=arr[i]+"ver";
                }
                if(arr[i]=="u"){
                    arr[i]=arr[i]+"fat";
                }
            }
        //retorna la cadena de texto y los une
        return arr;
        }
        
*/

        function encriptar(x){

            //declado la condicion de desencriptado
            let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
            
                //recorro lo ingresado buscando las iniciales de las palabras
                for(let i=0; i<matrizCodigo.length;i++){
                    //valida si encuentra las condiciones de busqueda
                    if(x.includes(matrizCodigo[i][0])){
                        //reemplaza el el segundo elemento(condicion) con el primero(desencriptado)
                        x=x.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
                    }
                }
                return x;
        }

        function desencriptar(x){

            //declado la condicion de desencriptado
            let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
            
                //recorro lo ingresado buscando las iniciales de las palabras
                for(let i=0; i<matrizCodigo.length;i++){
                    //valida si encuentra las condiciones de busqueda
                    if(x.includes(matrizCodigo[i][1])){
                        //reemplaza el el segundo elemento(condicion) con el primero(desencriptado)
                        x=x.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
                    }
                }
                return x;
        }
