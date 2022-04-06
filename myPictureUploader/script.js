const inputs = document.querySelectorAll(".controls input");
const image = document.querySelector("img");
const handleUpdate = (e) => {
    const { dataset, name, value } = e.currentTarget;
    const suffix = dataset.sizing || "";
    document.documentElement.style.setProperty(`--${name}`, value + suffix);
};
inputs.forEach(input => {
    input.addEventListener("change", handleUpdate);
    input.addEventListener("mousemove", handleUpdate);
});
console.log(image.src);
