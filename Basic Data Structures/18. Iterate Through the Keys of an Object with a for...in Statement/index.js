const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  // Only change code below this line
  let totalOnline = 0;
  for (const key in allUsers) {
    if (allUsers[key].online) totalOnline++;
  }
  return totalOnline;
  // Only change code above this line
}

console.log(countOnline(users));
