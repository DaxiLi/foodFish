const urlFac = function (url) {
  return url.replace(new RegExp(/^(http|https):\/\/.*\..*\/upload\//g), "");
}

;
export{
  urlFac
}