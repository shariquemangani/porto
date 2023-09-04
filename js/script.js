document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggleSwitch");

  toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
      // Function to execute when the switch is ON
      toggleOnFunction();
    } else {
      // Function to execute when the switch is OFF
      toggleOffFunction();
    }
  });

  function toggleOnFunction() {
    console.log("Switch is ON");
    document.getElementById("basic-price").textContent = "10";
    document.getElementById("standard-price").textContent = "15";
    document.getElementById("premium-price").textContent = "20";
  }

  function toggleOffFunction() {
    console.log("Switch is OFF");
    // Add your function logic for when the switch is OFF
    console.log("Switch is ON");
    document.getElementById("basic-price").textContent = "12";
    document.getElementById("standard-price").textContent = "17";
    document.getElementById("premium-price").textContent = "22";
  }
});

// scrolli marquee
const scrollingText = document.getElementById("scrolling-text");
let scrollDirection = 1; // 1 for left to right, -1 for right to left

document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    scrollDirection = -1; // Scroll down (towards user), move text right
  } else {
    scrollDirection = 1; // Scroll up (away from user), move text left
  }

  scrollingText.style.left = `${
    parseInt(scrollingText.style.left || 0) + 60 * scrollDirection
  }px`;
});
