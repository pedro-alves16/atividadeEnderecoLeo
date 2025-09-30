const form = document.getElementById('form');
const CEP = document.getElementById('cep');
const RUA = document.getElementById('rua');
const numeroCasa = document.getElementById('numeroCasa');
const UF = document.getElementById('UF');
const complemento = document.getElementById('complemento');
const botao = document.getElementById('enviar');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(!CEP.value){
        alert('Digite um CEP válido!');
        return;
    }

    if(RUA.value.length < 5){
        alert('Logradouro deve ter ao menos 5 caracteres!');
        return;
    }
    
    if(!numeroCasa.value){
        alert('Digite o número da casa!');
        return;
    }

    if(UF.value.length < 2){
        alert('Digite o estado corretamente!');
        return;
    }

    alert('Endereço cadastrado com sucesso');
    return;

});

CEP.addEventListener('input', e =>{
    e.preventDefault();
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.substring(0, 8); 
    valor = valor.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    e.target.value = valor;
});

numeroCasa.addEventListener('input', e =>{
    e.preventDefault();
    let valor = e.target.value.replace(/\D/g, "");
    e.target.value = valor;
});

UF.addEventListener('input', e =>{
    e.preventDefault();
    let valor = e.target.value.replace(/[^a-zA-Z]/g, "");
    valor = valor.toUpperCase();
    valor = valor.substring(0,2);
    e.target.value = valor;
});