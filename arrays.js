chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(chocolateBars, bar){
  newchocolateBars = [bar, ...chocolateBars];
  return newchocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, bar){
     chocolateBars = [bar, ...chocolateBars];
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, bar){
  newchocolateBars = [...chocolateBars, bar];
  return newchocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, bar){
     chocolateBars = [...chocolateBars, bar];
  return chocolateBars;
}

function accessElementInArray(chocolateBars, num) {
  console.log(chocolateBars[num]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
