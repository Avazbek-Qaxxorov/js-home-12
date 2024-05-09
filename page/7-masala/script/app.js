function array(string) {
    // TODO
       return string.split(",").slice(1,-1).join(" ") || null
  }

  let result = array("1,2,3,4,5,6");
  console.log(result)