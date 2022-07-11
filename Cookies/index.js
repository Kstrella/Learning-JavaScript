// cookie = a small text file stored on your computer
// used to remember information about the user
// saved in name=value pairs
 
//console.log(navigator.cookieEnabled); //checks to see if we have cookies enabled
//adding cookie and putting a date when to delete
//document.cookie = "firstName=Nick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"; 
//document.cookie = "lastName=Cage; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
//let allCookies = document.cookie;
//console.dir(allCookies);


const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

//getting cookie from user
submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive)
{
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000)); //converts to miliseconds
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

//how we delete a cookie
function deleteCookie(name)
{
    setCookie(name, null, null);
}


function getCookie(name)
{
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0)
        {
            result = element.substring(name.length + 1)
        }
    })
    return result;
}