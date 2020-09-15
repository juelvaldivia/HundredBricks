<?php

namespace App\Utils;

/*
 * Clase para encriptar o desencriptar cadenas de texto.
 * Creado por: Joel Valdivia
 * Fecha: 14 Ago 2019
 */
class Encrypt{
    
    /**
     * Encripta una cadena de texto
     *
     * @return string
     */
    static public function encrypt($stringDesencriptado){
        $key='L4LI4V3M43STR$';  // Una clave de codificacion, debe usarse la misma para encriptar y desencriptar
        return base64_encode(openssl_encrypt($stringDesencriptado, 'AES-128-ECB', md5($key))); //Devuelve el string encriptado
    }

    /**
     * Desencripta una cadena de texto
     *
     * @return string
     */
    static public function decrypt($stringEncriptado){
        $key='L4LI4V3M43STR';  // Una clave de codificacion, debe usarse la misma para encriptar y desencriptar
        return rtrim(openssl_decrypt(base64_decode($stringEncriptado), 'AES-128-ECB', md5($key)), "\0"); //Devuelve el string desencriptado 
    }

}