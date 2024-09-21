

// function to get input value

function getInputValue(id){
    const value = document.getElementById(id).value;
    return parseFloat(value);
}

// function to get inner text

function getInnerText(id)
{
    const text = document.getElementById(id).innerText;
    return parseFloat(text);
}