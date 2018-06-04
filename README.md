## "Cifrado de Cesar"

#Objetivo
La presente página web permitirá a los usuarios contar con una plataforma web capaz de cifrar y descifrar una cadena de caracteres mediante la sustitución alfabética simple.

## Introducción

CIFREMOS va dirigidos a los jóvenes que tienen un particular interés de comunicarse de mediante textos cifrados, ya sea para organizar un evento, fiesta, reunión, etc. El interés de los usuarios en utilizar el aplicativo web "CIFREMOS" parte en la necesidad de que les permita cifrar mensajes para posteriormente ser enviados a los demás miembros del grupo ya sea WhatsApp, Messenger u otra red social. El cifrado de textos conlleva a su vez al descifrado para que se pueda entender o interpretar el mensaje recibido. 

Principales usuarios: Jóvenes que organicen un evento.

Objetivo del usuario: 

Permita cifrar y descifrar textos para luego ser enviados

Contar con un aplicativo web con un interfaz agradable, práctico y fácil de usar.

Que la funcionalidad del aplicativo web sea al 100% 

Necesidad que resuelve:

Permita cifrar y descifrar mensajes para luego ser enviados en los grupos creados en las redes sociales

## Diseño

Para laptops, computadoras:

![](https://fotos.subefotos.com/f75125e2999349849db800254a181827o.png)

Para celulares:

![](https://fotos.subefotos.com/2b1b089fed0eedb2d80881018166340co.png)


El aplicativo web fue desarrollado en JavaScript, HTML y CSS. 


Consta de lo siguiente para su representación en la web:

##HTML

En relacion al HTML, manejé una estructura básica de entrada y salida de texto, contiene 2 input y 4 botonos.

-Input
'texto0'--> Contiene el valor del numero (offset)
'texto1'--> Contiene el valor de la entrada de texto
'texto2'--> Contiene el valor de la salida de texto

-Button
'cifrar'   --> Para invocar a la funcion del cifrado
'descifrar'--> Para invocar a la funcion del descifrado
'limpiar'  --> Para borror el texto de los input
'copiar'   --> Para copiar el texto del texto2



##JS

Contiene la funcion del cifrado y el descifrado.
Contiene los eventos DOM

 -Funciones: . Valor de entrada (texto1) y como valor del retorno (texto1 descrifrado)
             . Se utilizó la herramienta del bucle para el recorrido de la cadena
             . Se utilizó una fórmula matemática para aplicar el 'Crifrado de cesar' (x- 65 + offSet)%26+65
             . Esta realizado en funcion al ASCCI
             
             

##CSS

Basado en un diseño sencillo y práctico. 

Se utilizo responsive para equipos moviles, teniendo en cuenta que el aplicativo web sera usada en celulares.


##Test

Para se utilizó el Node JS, implemantando los posibles escenarios en base a la usuabilidad del aplicativo web.

Se obtuvo el siguiente resultado:

![](https://fotos.subefotos.com/fd5ed9d8af5fc377a2da182fd52608fco.png)





