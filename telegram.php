<?php
if (isset($_GET['cemetery']))
{
    search($_GET['cemetery']);
}

function Search($res)
{
    //real search code goes here
    echo $res;
}
$token = "1208352415:AAEmRoVO0FEAglsMhjk3pJQhWdnvK0UXk_g";
$chatid = "256450715";
sendMessage($chatid, "Hello World", $token);
function sendMessage($chatID, $messaggio, $token) {
    echo "sending message to " . $chatID . "\n";

    $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
    $url = $url . "&text=" . urlencode($messaggio);
    $ch = curl_init();
    $optArray = array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}?>