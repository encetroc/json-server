const readAllBtn = document.querySelector(".readAllBtn");
const readOneBtn = document.querySelector(".readOneBtn");
const createBtn = document.querySelector(".createBtn");

const inputId = document.querySelector(".inputId");
const inputName = document.querySelector(".inputName");
const inputType = document.querySelector(".inputType");
const list = document.querySelector(".list");
const oneCourse = document.querySelector(".oneCourse");
const oneNewCourse = document.querySelector(".oneNewCourse");

readAllBtn.addEventListener("click", async () => {
  const coursesResult = await axios.get("http://localhost:8001/courses");
  const listElements = coursesResult.data
    .map((course) => `<li>${course.name}</li>`)
    .reduce((prev, curr) => prev + curr);
  list.innerHTML = listElements;
});

readOneBtn.addEventListener("click", async () => {
  const courseResult = await axios.get(
    `http://localhost:8001/courses/${inputId.value}`
  );
  oneCourse.innerHTML = courseResult.data.name;
});

createBtn.addEventListener("click", async () => {
  await axios.post("http://localhost:8001/courses", {
    name: inputName.value,
    type: inputType.value,
  });
});
