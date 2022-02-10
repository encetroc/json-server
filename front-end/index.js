// get the buttons
const readAllBtn = document.querySelector(".readAllBtn");
const readOneBtn = document.querySelector(".readOneBtn");
const createBtn = document.querySelector(".createBtn");
const putBtn = document.querySelector(".putBtn");
const patchBtn = document.querySelector(".patchBtn");
const deleteBtn = document.querySelector(".deleteBtn");

// get the inputs
const inputId = document.querySelector(".inputId");
const inputName = document.querySelector(".inputName");
const inputType = document.querySelector(".inputType");

// get some dom element to display results
const list = document.querySelector(".list");
const oneCourse = document.querySelector(".oneCourse");
const oneNewCourse = document.querySelector(".oneNewCourse");

// event for fetching all the courses
readAllBtn.addEventListener("click", async () => {
  const coursesResult = await axios.get("http://localhost:8001/courses");
  const listElements = coursesResult.data
    .map((course) => `<li>${course.name}</li>`)
    .reduce((prev, curr) => prev + curr);
  list.innerHTML = listElements;
});

// event for fetching one course using an id from the input id
readOneBtn.addEventListener("click", async () => {
  const courseResult = await getOneRegister(inputId.value)
  oneCourse.innerHTML = courseResult.data.name;
});

// example on how to use functions to fetch data using axios
function getOneRegister (id) {
  return axios.get(
    `http://localhost:8001/courses/${id}`
  );
}

// event for creating a new course using the name and type input
createBtn.addEventListener("click", async () => {
  await axios.post("http://localhost:8001/courses", {
    name: inputName.value,
    type: inputType.value,
  });
});

// event for changing a whole course using the name and type input
putBtn.addEventListener("click", async () => {
  await axios.put(`http://localhost:8001/courses/${inputId.value}`, {
    name: inputName.value,
    type: inputType.value,
  });
});

// changing a set of field
patchBtn.addEventListener("click", async () => {
  // construct the object to patch
  const course = {
    // if there is an input name, add the name field to the course object
    ...(inputName.value && { name: inputName.value }),
    // if there is an input type, add the type field to the course object
    ...(inputType.value && { type: inputType.value }),
  };
  const result = await axios.patch(`http://localhost:8001/courses/${inputId.value}`, course);
  console.log(result.data)
});

// event for deleting a course using id from the input id
deleteBtn.addEventListener('click', async () => {
  await axios.delete(`http://localhost:8001/courses/${inputId.value}`)
})

