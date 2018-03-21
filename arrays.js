chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(chocolateBars, bar){
  newchocolateBars = [bar, ...chocolateBars];
  return newchocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, bar){
     chocolateBars = [bar, ...chocolateBars];
  return chocolateBars;
}
