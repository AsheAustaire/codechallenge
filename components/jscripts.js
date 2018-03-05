// This function appends scripts to the document body element.
// It takes the name of the css file, and an extra parameter incase it is nested.

function scriptCreator(name, extra) {
  let newEle = document.createElement('script')
  if(extra) {
    newEle.src = `components/${extra}/${name}/${name}.js`
  } else {
    newEle.src = `components/${name}/${name}.js`
  }
  document.body.appendChild(newEle)
}
// // // // // // // // // // // // // // // // // // // // // //

scriptCreator('main')
