<?php

    //include is flexible, use require() for 
    include("connect.php");
    include("functions.php");

    //GET superglobal 
    if(isset($_GET["ID"])) {
        $targetID = $_GET["ID"];
        $result = getSingleProj($pdo, $targetID);

        return $result;
    } else {
        $allProj = getAllProj($pdo);

        return $allProj;
    }