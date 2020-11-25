<?php
    //server side
    // php import statement
    //include("connect.php"); //commented out bc of index.php

    $result = [];

    //these functions are for index.php
    function getAllProj($conn) {
        $query = "SELECT * FROM tbl_projectdata";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        //encoding echo into JSON for js (HAS TO BE DONE FOR JS)
        //vardump doesnt work for this, it adds html styles which break the code
        echo(json_encode($result));

        //return $result;
    }

    function getSingleProj($conn, $ID) {
        $query = "SELECT * FROM tbl_projectdata WHERE ID=" . $ID . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
       
        echo(json_encode($result));
    }
    