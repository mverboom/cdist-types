args.forEach(function (item, index) {
   str = JSON.stringify(eval(item), null, 4);
   console.log("var " + item + " = " + str + ";");
})
