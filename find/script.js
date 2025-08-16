var users = [
  { name: "Alex", id: 1 },
  { name: "Alex", id: 2 },
  { name: "Brian", id: 3 },
  { name: "Carol", id: 4 },
];

var user = users.find(function (user) {
  return user.name === "Alex";
});

console.log(user);

var posts = [
  { id: 1, title: "The climate change" },
  { id: 2, title: "The moon and the sun" },
];

var comment = { postId: 1, content: "Amazing!" };

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));

var ladders = [
  { id: 1, height: 20 },
  { id: 2, height: 15 },
  { id: 3, height: 25 },
];

function findWhere(array, criteria) {
  var property = Object.keys(criteria)[0];
  return array.find(function (item) {
    return item[property] === criteria[property];
  });
}

console.log(findWhere(ladders, { height: 25 }));
