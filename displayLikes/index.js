function displayLikes(names) {
  if (names.length === 0) {
    return console.log('no one likes this');
  } else if (names.length === 1) {
    return console.log(`${names[0]} likes this`);
  } else if (names.length === 2) {
    return console.log(`${names[0]} and ${names[1]} likes this`);
  } else if (names.length === 3) {
    return console.log(`${names[0]}, ${names[1]} and ${names[2]} likes this`);
  } else {
    return console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others likes this`);
  }
}
displayLikes(['Lochan', 'Kunal', 'Protik', 'Devi']);
