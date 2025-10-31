console.log("acha rate marna wrna..!!")
let first = document.querySelector('a[data-id="1"]');
let second = document.querySelector('a[data-id="2"]');
let third = document.querySelector('a[data-id="3"]');
let atags = document.querySelectorAll('a[data-id="1"], a[data-id="2"], a[data-id="3"]');

let p1 = document.querySelector('p[data-id="1"]');
let p2 = document.querySelector('p[data-id="2"]');
let p3 = document.querySelector('p[data-id="3"]');
let p4 = document.querySelector('p[data-id="4"]');
let p5 = document.querySelector('p[data-id="5"]');
let p6 = document.querySelector('p[data-id="6"]');

atags.forEach(a => {
    a.addEventListener("click", () => {
        if (a.dataset.id == "1") {
            p1.textContent = "2hrs";
            p2.textContent = "3hrs";
            p3.textContent = "5hrs";
            p4.textContent = "1hrs";
            p5.textContent = "4hrs";
            p6.textContent = "0hrs";
        } else if (a.dataset.id == "2") {
            p1.textContent = "18hrs";
            p2.textContent = "7hrs";
            p3.textContent = "22hrs";
            p4.textContent = "4hrs";
            p5.textContent = "27hrs";
            p6.textContent = "2hrs";
        } else if (a.dataset.id == "3") {
            p1.textContent = "120hrs";
            p2.textContent = "22hrs";
            p3.textContent = "159hrs";
            p4.textContent = "17hrs";
            p5.textContent = "110hrs";
            p6.textContent = "13hrs";
        }
    })
});
