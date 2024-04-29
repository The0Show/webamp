import Webamp from "./Webamp";

if (document.readyState == "complete") {
    new Webamp();
} else {
    document.onreadystatechange = (ev) => {
        if (document.readyState == "complete") {
            new Webamp();
        }
    };
}
