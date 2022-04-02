const getActiveUploadObj = function() {
  try {
    return new ActiveXObject('TXFTNAtiveX.FTNUpload')
  } catch (error) {
    return false
  }
}
const supportFlash = () => true
const getFlashUploadObj = function() {
  if(supportFlash()) {
    const str = '<object type="application/x-shockwave-flash"></object>'
    return document.body.appendChild(str)
  }
  return false
}

const getFormUploadObj = function () {
  const str = '<input name="file" type="file" class="ui-file" />'
  return document.body.appendChild(str)
}

const iteratorUploadObj = function() {
  for (let i = 0, fn; fn = arguments[i++];) {
    const uploadObj = fn();
    if(uploadObj !== false) {
      return uploadObj
    }
  }
}

const uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj)

console.log(uploadObj, 'uploadObj ====>')

