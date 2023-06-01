let array = [
  {
    text: "первое дело",
    done: false,
  },
  {
    text: "второе дело",
    done: true,
  },
  {
    text: "третье дело",
    done: false,
  },
  {
    text: "четвертое дело",
    done: false,
  },
  {
    text: "пятое дело",
    done: false,
  },
];

const input = document.getElementById("input");

function render(arr) {
  list.textContent = "";
  input.value = "";
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.id = "buttonOne";

    li.textContent = arr[i].text;
    list.append(li);
    li.append(deleteButton);

    const input2 = document.createElement("input");
    input2.type = "checkbox";
    input2.checked = arr[i].done;

    input2.addEventListener("click", () => {
      console.log(input2.checked);
      checkTodo(i);
    });
    if (input2.checked) {
      li.style.background = "grey";
    } else {
      li.style.background = "#f2f2f2";
    }
    // });
    li.prepend(input2);
    input2.style.width = "45px";
    input2.classList.add("input2");

    deleteButton.addEventListener("click", () => {
      remove(i);
    });

    li.append(deleteButton);
  }
}
render(array);

function remove(index) {
  array.splice(index, 1);
  render(array);
}
// remove()

function addTodo(text) {
  // const p = document.createElement('p')

  if (input.value.trim() === "") {
    return null;
  }
  // p.textContent = input

  array.push({ text: text, done: false });
  input.value = "";
  render(array);
}
// addTodo('text')

function checkTodo(i) {
  console.log(i);
  //   console.log(arr[i]);
  array[i].done = !array[i].done;
  // console.log(array[i])
  //   console.log(arr[i] done);
  render(array);
}

const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo(input.value);
});
