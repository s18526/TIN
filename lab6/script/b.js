let i = 5;
const addParagraph = () => {
    setTimeout(function () {
        document.getElementById("hdr").innerHTML = "the paragraph is going to appear in " + (i - 1);
        i--;

        if (i > 0) {
            addParagraph();
        }
        if (i === 0) document.getElementById("paragraph").innerHTML = "";
    }, 1000);
};

addParagraph();
