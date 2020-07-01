var myChatId = 256450715;
var messageText = "hi bitch";
var botApiKey = "1208352415:AAEmRoVO0FEAglsMhjk3pJQhWdnvK0UXk_g";
$('btn').click(function(){usePHP(); return false; });
function usePHP() {
    alert("running php")
    $.ajax({
        url: 'php/telegram.php',
        success: function(data) {
            alert('Directory created');
        }
    });
}

// function sendMessage() {
//     POST https://api.telegram.org/botbotApiKey/sendMessage?chat_id=myChatId&text=messageText
//     String urlString = "https://api.telegram.org/bot%s/sendMessage?chat_id=%s&text=%s";
//
//     String apiToken = botApiKey;
//     String chatId = myChatId;
//     String text = messageText;
//
//     urlString = String.format(urlString, apiToken, chatId, text);
//
//     URL url = new URL(urlString);
//     URLConnection conn = url.openConnection();
// }
// $('#orderButton').click(function(){sendMessage(); return false; });