let froyoOrder = prompt("Please enter your froyo order seperated by commas.");
let arrord = froyoOrder.split(",");
const fullorder = {};

/**
 * @param {string[]} froOrder an array of strings of froyo flavors
 *
 */
function fillOrder(froOrder) {
  for (let i = 0; i < froOrder.length; i++) {
    if (froOrder[i] in fullorder) {
      fullorder[froOrder[i]] = fullorder[froOrder[i]] + 1;
    } else {
      fullorder[froOrder[i]] = 1;
    }
  }
}
/**
 * @param {object} order an object contating froyo flavors {keys} and order total {values, number}
 *
 */
function dispOrder(order) {
  for (let froyo in fullorder) {
    let amount = fullorder[froyo];
    console.log(froyo + " flavor: " + amount);
  }
}
fillOrder(arrord);
dispOrder(fullorder);
