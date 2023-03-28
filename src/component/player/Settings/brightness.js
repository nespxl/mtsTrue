function changeBrigthnessParameters(video, brightnessValue, contrastValue, saturationValue) {
    let canvas = document.getElementById("output-canvas");
    canvas.style.cssText = `filter:brightness(${brightnessValue}%) contrast(${contrastValue}%) saturate(${saturationValue}%);`;
}

export { changeBrigthnessParameters }