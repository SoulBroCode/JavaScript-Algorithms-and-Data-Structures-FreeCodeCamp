let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  let friends;
  // Only change code below this line
  if (userObj.hasOwnProperty("data")) {
    const data = userObj["data"];
    if (data.hasOwnProperty("friends")) {
      friends = data["friends"];
      friends.push(friend);
    }
  }
  return friends;
  // Only change code above this line
}

console.log(addFriend(user, "Pete"));
