window.save = function(text, filename) {
    let textFile = document.createElement("a");

    textFile.href = window.URL.createObjectURL(new Blob([text], {
        type: 'text/plain'
    }));
    textFile.download = filename;

    textFile.click();
};

function sparatelog(...args) {
    for (let i in args) {
        console.log(args[i]);
    }
}