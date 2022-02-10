const readAllBtn = document.querySelector(".readAllBtn");
const readOneBtn = document.querySelector(".readOneBtn");
const list = document.querySelector(".list");

readAllBtn.addEventListener("click", async () => {
  const coursesResult = await axios.get("http://localhost:8001/courses");
  const listElements = coursesResult.data
    .map((course) => `<li>${course.name}</li>`)
    .reduce((prev, curr) => prev + curr);
  list.innerHTML = listElements
});

readOneBtn.addEventListener('click', async () => {
  const courseResult = await axios.get("http://localhost:8001/courses/2")
  console.log(courseResult.data)
})
