const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const salarioMenor = (total, atual)=>{
    return total.salario < atual.salario ? total : atual
}
const apenasPais = pais => pais.pais === 'China'
const apenasSexo = sexo => sexo.genero === 'M'





axios.get(url).then(response=>{
    const funcionarios = response.data
    const resultado = funcionarios.filter(apenasSexo).filter(apenasPais).reduce(salarioMenor)


 
     console.log(resultado)

})