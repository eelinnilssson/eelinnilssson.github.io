document.addEventListener("DOMContentLoaded", (event) => {
    NAME = "Elin Nilsson";

    function textWriter(i) {
        if (i < NAME.length) {
            if (NAME[i] === "<" || NAME[i] === "/") {
                setTimeout(() => {
                    textWriter(i + 1);
                }, 120);
            } else {
                document.getElementById("name").innerHTML =
                    NAME.substring(0, i + 1) + '<span aria-hidden="true"></span>';
                setTimeout(() => {
                    textWriter(i + 1);
                }, 120);
            }
        }
    }
    textWriter(0);
});