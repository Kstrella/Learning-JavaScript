// async = makes a function return a Promise

 
async function loadFile()
{

  //producing
  let fileLoaded = true;

  if(fileLoaded){
      return "File loaded";
  }
  else{
      throw "File NOT loaded";
  }
}
//consuming
loadFile().then(value => console.log(value))
               .catch(error => console.log(error));