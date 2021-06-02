export function setTheme(arg) {
    document.cookie = `theme=${arg}`;
}
export function themePallete() {
    var theme = getThemeName();
    switch (theme) {
        case "dark":
            return { background: "#fff", color: "#000" }
            break;
        case "light":
            return { background: "#000", color: "#fff" }
            break;
        default:
            return false
    }
}

function getThemeName() {
    var name = "theme" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}