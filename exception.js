// try {
//   console.log("Start of try block");
//   if (a == 3) {
//     console.log("This is error");
//   }
// } catch (err) {
//   console.log("Error has occured: " + err);
// } finally {
//   console.log("This is always run");
// }

// console.log("Then the execution continues");


let json = '{"age": 30}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete Data: no name");
    }
    console.log(user.name);
} catch (error) {
    console.log("JSON Error => " + error)
}

// let a = 6, b = 0;
// try {
//     if (b==0) {
//         throw new SyntaxError("b==0, This is not possible");
//     }
//     const output = a/b;
//     console.log("Succesful Output: " + output);
// } catch (error) {
//     console.log("Error occured => " + error);
// }


