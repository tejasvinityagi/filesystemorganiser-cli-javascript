const inputArr = process.argv;
// console.log(inputArr);

// implimenting the commands
// help
// organise
// tree

const command = inputArr[2];
switch(command){
    case "help":
        helpFn();
        break;
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organise":
        organiseFn(inputArr[1]);
        break;
    default:
        console.log("please enter valid command");
    
}

function treeFn(dirPath){
    console.log("tree command implemented", dirPath)
}
function organiseFn(dirPath){
    console.log("organise cmnd implemetned",)
}

function helpFn(){
    console.log(
    `list of all the commands
    to organize "organize"
    to create tree "tree"
    to help "help"
    `)
}