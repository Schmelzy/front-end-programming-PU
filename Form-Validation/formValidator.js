function formValidator() {

    let checkButton = document.querySelector('button');

    checkButton.addEventListener('click', () => {

        let name = document.getElementById("name");
        let address = document.getElementById("address");
        let postalCode = document.getElementById("postalCode");
        let output = document.getElementById("output");
        let nameValue = name.value;
        let addressValue = address.value;
        let postalCodeValue = postalCode.value;

        if (nameValue === "" || addressValue === "" || postalCodeValue === "") {
            alert("Please fill out all the fields.");
            return;
        }

        for (let char of nameValue) {
            if (!isNaN(char) && char !== " ") {
                alert("The name can't contain a number!");
                name.value = '';
                return;
            }
        }

        for (let el of postalCodeValue) {
            if (isNaN(el)) {
                alert("The postal code should only consist of numbers!");
                postalCode.value = '';
                return;
            }
        }

        let outputText = "Name: " + nameValue + "\nAdress: " + addressValue + "\nPostal Code: " + postalCodeValue;
        output.value += `${outputText} \n\n`;
        name.value = '';
        address.value = '';
        postalCode.value = '';
    })

}

formValidator()