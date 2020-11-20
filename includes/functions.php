<?php
    //server side
    // php import statement
    include("connect.php");

    $query = "SELECT * FROM tbl_projectdata";

    $runQuery = $pdo->query($query);

    $result = [];

    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }
    //encoding echo into JSON for js (HAS TO BE DONE FOR JS)
    //vardump doesnt work for this, it adds html styles which break the code
    echo(json_encode($result));

    //return $result;