type StringOrNum = String | Number;
// we can use this insted of String | Number
type objWithName = { name: String, uid: StringOrNum };
// like this we can define and use later

const logDetails = (uid: String | Number, item: String) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: { name: String, uid: StringOrNum }) => {
    console.log(`${user.name} says hello`);
}

const greetagain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

