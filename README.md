## "Cifrado de Cesar"

#Objetivo
La presente página web permitirá a los usuarios contar con una plataforma web capaz de cifrar y descifrar una cadena de caracteres mediante la sustitución alfabética simple.

#Introducción

CIFREMOS va dirigidos a los jóvenes que tienen un particular interés de comunicarse de mediante textos cifrados, ya sea para organizar un evento, fiesta, reunión, etc. El interés de los usuarios en utilizar el aplicativo web "CIFREMOS" parte en la necesidad de que les permita cifrar mensajes para posteriormente ser enviados a los demás miembros del grupo ya sea WhatsApp, Messenger u otra red social. El cifrado de textos conlleva a su vez al descifrado para que se pueda entender o interpretar el mensaje recibido. 

Principales usuarios: Jóvenes que organicen un evento.

Objetivo del usuario: 
•	Permita cifrar y descifrar textos para luego ser enviados
•	Contar con un aplicativo web con un interfaz agradable, practica y fácil de usar.
•	Que la funcionalidad del aplicativo web sea al 100% 
•	
Necesidad que resuelve:
•	Enviar mensajes cifrados y descifrados en los grupos creados en las redes sociales



El aplicativo web fue desarrollado en JavaScript, HTML y CSS. 


Consta de lo siguiente para su representación en la web:

##HTML
En relacion al HTML, manejé una estructura básica de entrada y salida de texto, contiene dos input y dos botonos.

-Input
'texto1'--> Contiene el valor de la entrada de texto
'texto2'--> Contiene el valor de la salida de texto

-Button
'cifrar'   --> Para invocar a la funcion del cifrado
'descifrar'--> Para invocar a la funcion del descifrado

Obs. Pendiente finalizar su desarrollo.

##JS
Contiene la funcion del cifrado y el descifrado.
Contiene los eventos DOM

 -Funciones: . Valor de entrada (texto1) y como valor del retorno (texto1 descrifrado)
             . Se utilizó la herramienta del bucle para el recorrido de la cadena
             . Se utilizó una fórmula matemática para aplicar el 'Crifrado de cesar' (x- 65 + offSet)%26+65
             . Esta realizado en funcion al ASCCI
             . El offSet se obtiene mediante el alert()
             

##CSS
Basado en un diseño sencillo y practico de traduccion.

Basado en styles.



