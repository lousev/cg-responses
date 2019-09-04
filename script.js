// $(document)
//   .one('focus.autoExpand', 'textarea.autoExpand', function () {
//     var savedValue = this.value;
//     this.value = '';
//     this.baseScrollHeight = this.scrollHeight;
//     this.value = savedValue;
//   })
//   .on('input.autoExpand', 'textarea.autoExpand', function () {
//     var minRows = this.getAttribute('data-min-rows') | 0, rows;
//     this.rows = minRows;
//     rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
//     this.rows = minRows + rows;
//   });

// Declaring Variables
const reqName = document.querySelector('#req-name')
const descriptionArea = document.querySelector('#description-area')
const internalNotesArea = document.querySelector('#internal-notes-area')
const response = document.querySelector('#response')
const signature = 'Thank you,\n\nITOC Service Desk\nXXX.XXX.XXXX\nITOCServiceDesk@continuumgbl.com'
const copyBtn1 = document.querySelector('#copy-btn-1')
const copyBtn2 = document.querySelector('#copy-btn-2')
const descriptionBtn = document.querySelector('#description')
const internalNotesBtn = document.querySelector('#internal-notes')
const resetPage = document.querySelector('#reset')

// Calling the Functions
reqName.addEventListener('input', updateTxt)
response.addEventListener('change', updateTxt)
copyBtn1.addEventListener('click', copyTxt1)
copyBtn2.addEventListener('click', copyTxt2)
internalNotesBtn.addEventListener('click', showInternalNotes)
descriptionBtn.addEventListener('click', showDescription)
resetPage.addEventListener('click', reloadPage)

// Functions
function updateTxt() {
  let responseVal = response.value
  let responseFinal = document.getElementById(responseVal).textContent
  descriptionArea.textContent = `Hi ${reqName.value},\n${responseFinal}\n${signature}`;
}

function copyTxt1() {
  descriptionArea.select()
  document.execCommand('copy')
}

function copyTxt2() {
  internalNotesArea.select()
  document.execCommand('copy')
}

function showInternalNotes() {
  let combined1 = [descriptionArea, copyBtn1]
  combined1.forEach(function (e) {
    e.classList.add('invisible')
  })
  let combined2 = [internalNotesArea, copyBtn2]
  combined2.forEach(function (e) {
    e.classList.remove('invisible')
  })
}

function showDescription() {
  let combined1 = [descriptionArea, copyBtn1]
  combined1.forEach(function (e) {
    e.classList.remove('invisible')
  })
  let combined2 = [internalNotesArea, copyBtn2]
  combined2.forEach(function (e) {
    e.classList.add('invisible')
  })
}

function reloadPage() {
  location.reload();
}

$(document).ready(function () {
  $('#lookups').load('./source.xml')
})