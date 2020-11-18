<?php
    include("connect.php");

    $query = "SELECT * FROM tbl_projectdata";

    $runQuery = $pdo->query($query);

    $result = array();

    while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }

    return $result;