document.addEventListener('DOMContentLoaded', function () {
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const clearBtn = document.getElementById('clear');
    const countDisplay = document.getElementById('count');
    const errorMsg = document.getElementById('errorMsg');

    let count = 0;

    function updateCountDisplay() {
        countDisplay.textContent = count;
        if (count === 0) {
            decrementBtn.disabled = true;
            errorMsg.style.display = 'none';
        } else {
            decrementBtn.disabled = false;
        }
    }

    function showError() {
        errorMsg.style.display = 'block';
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 2000); // Hide error message after 2 seconds
    }

    incrementBtn.addEventListener('click', function () {
        count++;
        updateCountDisplay();
    });

    decrementBtn.addEventListener('click', function () {
        if (count > 0) {
            count--;
            updateCountDisplay();
        } else {
            showError();
        }
    });

    clearBtn.addEventListener('click', function () {
        count = 0;
        updateCountDisplay();
    });
});