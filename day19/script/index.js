function setCounter(target, duration) {
    let steps = duration / 100;
    let incre = Math.floor(target / steps);
}

const counters = document.querySelectorAll(".counter");

for (let counter of counters) {
    let target = counter.dataset.target;
    let duration = counter.dataset.duration || 3000;

    setCounter(counter, target, duration);
}