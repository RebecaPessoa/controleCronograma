function doGet() {
  return HtmlService.createTemplateFromFile("home").evaluate();
}

function usuarioClicou(atividade) {
  var ssId = "11nqp2NnU1N4RVvMd7XsJmjYrPWpkrdmQeWFgl-DWeig";
  var ss = SpreadsheetApp.openById(ssId);
  var ws = ss.getSheetByName("Atividades");

  ss.appendRow([atividade.descricao, atividade.status]);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function helloWorld() {
  console.log("Hello World!");
}