function guessNumber() {

    let minNum = 1;
    let maxNum = 999;
    let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    let submitButton = document.querySelector('button');
    let counter = 10;

    submitButton.addEventListener('click', () => {
        let isFound = false;
        let inputNumber = document.querySelector('input');
        let messages = document.querySelectorAll('p');
        let message = messages[0];
        let secondMessage = messages[1];
        message.style.display = 'block';
        secondMessage.style.display = 'block';
        let guessNumber = Number(inputNumber.value);

        if (!Number(inputNumber.value) || guessNumber < 1 || guessNumber > 999) {
            message.textContent = `Please enter a valid number!`;
            inputNumber.value = '';
        } else if (guessNumber > randomNum) {
            counter--;
            message.textContent = 'Too High';
        } else if (guessNumber < randomNum) {
            counter--;
            message.textContent = 'Too Low';
        } else if (guessNumber === randomNum) {
            message.textContent = 'Got it!';
            randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
            counter = 10;
            isFound = true;
        }
        if (counter > 0 && counter < 10 && !isFound) {
            if (counter === 1) {
                secondMessage.textContent = `You have ${counter} try left!`
            } else {
                secondMessage.textContent = `You have ${counter} tries left!`
            }
        } else {
            secondMessage.style.display = 'none';
        }
        inputNumber.value = '';

        if (counter === 0) {
            message.textContent = `No more tries left.
            The random number was ${randomNum}. 
            Try again with a new random number.`
            randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
            counter = 10;
        }
    })
}

guessNumber();