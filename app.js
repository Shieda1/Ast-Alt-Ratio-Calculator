// https://www.omnicalculator.com/health/ast-alt-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ratioRadio = document.getElementById('ratioRadio');
const ASTRadio = document.getElementById('ASTRadio');
const ALTRadio = document.getElementById('ALTRadio');

let ratio;
let AST = v1;
let ALT = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

ratioRadio.addEventListener('click', function() {
  variable1.textContent = 'AST';
  variable2.textContent = 'ALT';
  AST = v1;
  ALT = v2;
  result.textContent = '';
});

ASTRadio.addEventListener('click', function() {
  variable1.textContent = 'Ratio';
  variable2.textContent = 'ALT';
  ratio = v1;
  ALT = v2;
  result.textContent = '';
});

ALTRadio.addEventListener('click', function() {
  variable1.textContent = 'Ratio';
  variable2.textContent = 'AST';
  ratio = v1;
  AST = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ratioRadio.checked)
    result.textContent = `Ratio = ${computeratio().toFixed(2)}`;

  else if(ASTRadio.checked)
    result.textContent = `AST = ${computeAST().toFixed(2)}`;

  else if(ALTRadio.checked)
    result.textContent = `ALT = ${computeALT().toFixed(2)}`;
})

// calculation

function computeratio() {
  return Number(AST.value) / Number(ALT.value);
}

function computeAST() {
  return Number(ratio.value) * Number(ALT.value);
}

function computeALT() {
  return Number(AST.value) / Number(ratio.value);
}