
export const logger = `
const old = console.log;
const logger = document.createElement("pre");
document.body.prepend(logger);
console.log = function () {
  logger.innerHTML += "<span style='opacity: 0.5;'>Console: </span>"
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == "object") {
      logger.innerHTML += JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i];
    } else {
      logger.innerHTML += arguments[i] + " ";
    }
  }

  logger.innerHTML += "<br>";
  old(...arguments);
};`
