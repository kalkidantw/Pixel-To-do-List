// Wait until the HTML is fully loaded
window.addEventListener("DOMContentLoaded", () => {
    console.log("JS is working");
  
    let storage = [];
  
    const input = document.getElementById("taskInput");
    const enterButton = document.getElementById("enterButton");
    const addButton = document.getElementById("addButton");
    const list = document.getElementById("taskList");
  
    function addTask() {
        const task = input.value.trim();
        if (task !== "") {
          storage.push({ text: task, done: false });
          input.value = "";
          updateList();
        }
      }
      
  
    // When ENTER button is clicked — stay "pressed"
    enterButton.addEventListener("click", () => {
      enterButton.classList.add("pressed");
    });
  
    // When ADD button is clicked — bounce + add task + reset enter button
    addButton.addEventListener("click", () => {
      addTask();
  
      // Bounce Add button
      addButton.classList.add("bouncing");
  
      // Release Enter button
      enterButton.classList.remove("pressed");
  
      // Remove bounce after animation
      setTimeout(() => {
        addButton.classList.remove("bouncing");
      }, 300);
    });
  
    // Update the list visually
    function updateList() {
        list.innerHTML = "";
        storage.forEach((task, index) => {
          const li = document.createElement("li");
          li.className = "task-item";
      
          // Create checkbox image
          const checkbox = document.createElement("img");
          checkbox.src = task.done ? "checked.jpg" : "unchecked.jpg";
          checkbox.className = "checkbox-img";
          checkbox.addEventListener("click", () => {
            storage[index].done = !storage[index].done;
            updateList();
          });
      
          // Create task text
          const span = document.createElement("span");
          span.textContent = task.text;
      
          // Delete button
          const deleteButton = document.createElement("img");
          deleteButton.src = "x.png";
          deleteButton.className = "delete-btn";
          deleteButton.addEventListener("click", () => {
            storage.splice(index, 1);
            updateList();
          });
          
      
          li.appendChild(checkbox);
          li.appendChild(span);
          li.appendChild(deleteButton);
          list.appendChild(li);
        });
      }
s      
  });
  