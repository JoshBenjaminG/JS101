function greetings(arr, status) {
  console.log(`Hello, ${arr.join(" ")}. Nice to have a ${status.title} ${status.occupation} around!`);
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })