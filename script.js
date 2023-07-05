document.getElementById("sentenceForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the input value
    var sentence = document.getElementById("sentenceInput").value;
    
    // Replace spaces with an emoji
    var result = sentence.replace(/\s/g, "🤸");

    // Display the result
    document.getElementById("result").textContent = result;
});

function copyText() {
    // Get the result element
    var resultElement = document.getElementById("result");

    if(resultElement != '' || null){

        var textToCopy = resultElement.textContent;

        // Copy the text to the clipboard
        navigator.clipboard.writeText(textToCopy)
            .then(function() {
                alert("Copied the text: " + textToCopy);
            })
            .catch(function(error) {
                // Display an error message if copying failed
                console.error("Failed to copy text: ", error);
            });
    }
}
