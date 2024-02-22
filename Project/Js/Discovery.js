const counts = document.querySelectorAll('.count');
const speed = 1000;

counts.forEach((counter) => {
    function upDate() {
        const target = parseInt(counter.getAttribute('data-target')); // Use parseInt to convert string to number
        let count = parseInt(counter.innerText); // Use parseInt to convert string to number
        const inc = target / speed;

        if (count < target) {
            count += Math.ceil(inc); // Increment by the rounded-up value of inc
            counter.innerText = count;
            setTimeout(upDate, 1);
        } else {
            counter.innerText = target;
        }
    }

    upDate(); // Call the function to start the counting
});
