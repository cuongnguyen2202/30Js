const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];
//some and check
const isOver18 = people.some((person) => {
    return new Date().getFullYear() - person.year >= 18;
});
console.log(isOver18);
//every check
const isOver19 = people.every((person) => {
    return new Date().getFullYear() - person.year >= 19;
});
console.log(isOver19);
//find comment id 823423
const findComment = comments.find((comment) => {
    return comment.id === 823423;
});
console.log(findComment);
// findIndex
const findIndexOfComment = comments.findIndex((comment) => {
    return comment.id === 823423;
});
console.log(findIndexOfComment);
comments.splice(findIndexOfComment, 1);
console.log(comments);