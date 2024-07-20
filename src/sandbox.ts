type StringOrNum = String | Number;
// we can use this insted of String | Number

const logDetails = (uid: String | Number, item: String) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: { name: String, uid: StringOrNum }) => {
    console.log(`${user.name} says hello`);
}

