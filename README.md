Iremos usar pacotes e nada melhor do que usar um já feito pela comunidade pra esse caso iremos usar prompt build 
Regex - dar uma olhada depois e ver livro expressões regulares
Refatoração - dar uma olhada nesse livro

Entende o racional entender a arquitetura - criar em camadas aprender sobre isso pois uma vez que conseguimos entender e explica esse nível de racional em uma entrevista técnica e o que te faz diferente de todos os outros não se contente em aprender apenas a sintaxe o código e sim um todo principalmente arquitetura pois quando você entender isso, todo o resto vem na sua mente, então entenda sobre a arquitetura como um todo. Isso gera mais confiança!

Pontos de melhoria
Refatoração
Adicionar melhoria onde prompts schema vá direto pra services em vez de mandar pra MAIN.JS 

 # 🛠️ Kit de Utilidades para E-commerce

Projeto desenvolvido durante a **Formação Node.js da DIO**, com o objetivo de praticar conceitos fundamentais do ecossistema Node.js por meio da criação de ferramentas executadas diretamente pelo terminal.

Atualmente, o projeto disponibiliza duas funcionalidades:

- 🔳 Gerador de QR Code
- 🔐 Gerador de senhas

Além da implementação das funcionalidades, este projeto está sendo utilizado como material de estudo para reforçar conceitos como modularização, variáveis de ambiente, prompts interativos, validação com Regex, manipulação de arrays, geração de valores aleatórios e uso de pacotes NPM.

---

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto foram trabalhados:

- ECMAScript Modules (ESM)
- Importação e exportação de módulos
- Modularização
- Funções assíncronas
- `async` / `await`
- Callbacks
- Variáveis de ambiente
- `process.env`
- Arrays
- Spread Operator
- Regex
- `Math.random()`
- `Math.floor()`
- Loops
- Validação de entrada
- Prompts interativos
- Dependências NPM
- Separação de responsabilidades

---

# 🔳 Gerador de QR Code

O gerador recebe um **link informado pelo usuário** e utiliza esse valor para criar um QR Code.

O fluxo começa através de um prompt:

```js
{
  name: "link",
  description: "Digite o link para gerar o QR CODE"
}
```

O valor digitado pelo usuário fica disponível através da propriedade definida em `name`.

Por exemplo:

```js
result.link
```

Isso acontece porque o nome definido no schema do prompt é utilizado como chave do resultado retornado.

---

## Escolhendo o tipo de QR Code

Depois de informar o link, o usuário pode escolher como o QR Code será gerado:

```text
[1] IMAGEM
[2] TERMINAL
```

O prompt utiliza:

```js
name: "type"
```

Portanto, posteriormente podemos recuperar a escolha através de:

```js
result.type
```

---

## Validação com Regex

Para impedir que o usuário informe uma opção diferente de `1` ou `2`, foi utilizado:

```js
pattern: /^[1-2]+$/
```

### Entendendo a expressão

```text
^       início da entrada
[1-2]   aceita os valores 1 ou 2
+       exige pelo menos uma ocorrência
$       final da entrada
```

A intenção é restringir as opções disponíveis no menu.

Caso uma entrada inválida seja informada, o próprio schema possui uma mensagem de erro.

---

## Gerando o QR Code

A geração é realizada utilizando:

```js
qr.generate()
```

O primeiro argumento contém o conteúdo utilizado para gerar o QR Code:

```js
result.link
```

Exemplo conceitual:

```js
qr.generate(result.link, options, callback)
```

---

## Definindo o tamanho no terminal

A escolha realizada pelo usuário é transformada em um valor booleano:

```js
const isSmall = result.type == 2
```

Se:

```text
result.type == 2
```

o resultado será:

```text
true
```

Caso contrário:

```text
false
```

Esse valor é enviado para:

```js
{
  small: isSmall
}
```

permitindo controlar a forma como o QR Code é apresentado.

---

## Callback do QR Code

O método `generate()` também permite utilizar uma função callback.

Estrutura:

```js
qr.generate(result.link, { small: isSmall }, (qrcode) => {
  // resultado
})
```

O parâmetro:

```js
qrcode
```

recebe o resultado gerado pela biblioteca.

Esse resultado pode então ser utilizado para exibição ou processamento.

---

# 🔐 Gerador de Password

A segunda ferramenta disponível no projeto é o gerador de senhas.

A configuração da senha é controlada através de **variáveis de ambiente**.

Isso permite alterar as regras de geração sem precisar modificar diretamente a lógica da aplicação.

---

## Variáveis de ambiente

A aplicação utiliza configurações semelhantes a:

```env
PASSWORD_LENGTH=
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

### `PASSWORD_LENGTH`

Define a quantidade de caracteres que a senha deverá possuir.

No código:

```js
process.env.PASSWORD_LENGTH
```

### `UPPERCASE_LETTERS`

Controla a utilização de letras maiúsculas.

```text
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

### `LOWERCASE_LETTERS`

Controla a utilização de letras minúsculas.

```text
abcdefghijklmnopqrstuvwxyz
```

### `NUMBERS`

Controla a utilização de números.

```text
0123456789
```

### `SPECIAL_CHARACTERS`

Controla a utilização de caracteres especiais.

```text
!@#$%^&*()_-
```

---

# 🧠 Montando os caracteres permitidos

A função:

```js
permittedCharacters()
```

é responsável por montar dinamicamente o conjunto de caracteres disponíveis para gerar a senha.

Inicialmente:

```js
let permitted = []
```

A aplicação verifica cada configuração presente no `.env`.

Exemplo:

```js
process.env.UPPERCASE_LETTERS === "true"
```

Quando a opção estiver habilitada, os caracteres correspondentes são adicionados ao array.

---

## Spread Operator

Para adicionar os caracteres individualmente ao array é utilizado:

```js
...
```

Exemplo:

```js
permitted.push(..."ABC")
```

Em vez de adicionar `"ABC"` como um único elemento, o spread distribui os caracteres:

```text
A
B
C
```

para dentro do array.

O mesmo princípio é utilizado para letras minúsculas, números e caracteres especiais.

---

# 🎲 Gerando caracteres aleatórios

Depois de montar o conjunto permitido:

```js
characters = await permittedCharacters()
```

a aplicação executa um loop baseado no tamanho definido para a senha.

Conceitualmente:

```js
for (...) {
  // selecionar caractere
}
```

Para escolher uma posição aleatória é utilizado:

```js
Math.random()
```

Porém, `Math.random()` retorna um número decimal.

Por isso é utilizado:

```js
Math.floor()
```

A lógica fica:

```js
Math.floor(Math.random() * characters.length)
```

---

## Entendendo essa operação

### `Math.random()`

Gera um valor pseudoaleatório.

Exemplo:

```text
0.58342
```

### `characters.length`

Representa a quantidade de caracteres disponíveis.

Multiplicando os dois valores:

```js
Math.random() * characters.length
```

obtemos uma posição possível dentro do array.

### `Math.floor()`

Arredonda o resultado para baixo, produzindo um índice inteiro válido.

Esse índice é então utilizado:

```js
characters[index]
```

para recuperar um caractere.

---

# 🔁 Construção da senha

A senha começa vazia:

```js
let password = ""
```

A cada repetição do loop, um novo caractere é escolhido e concatenado:

```js
password += characters[index]
```

O processo continua até atingir:

```js
PASSWORD_LENGTH
```

Ao final:

```js
return password
```

retorna a senha criada.

---

# 🧭 Menu principal

A aplicação possui um menu responsável por direcionar o usuário para a ferramenta escolhida.

As opções disponíveis são:

```text
[1] QRCODE
[2] PASSWORD
```

O resultado é recuperado através de:

```js
choose.select
```

Então a aplicação decide qual função executar:

```text
1 → Gerador de QR Code
2 → Gerador de Password
```

Essa estrutura mantém cada funcionalidade separada e permite que novas ferramentas sejam adicionadas futuramente.

---

# 🧪 Debug durante o desenvolvimento

Durante o desenvolvimento foram utilizados `console.log()` temporários para localizar problemas no fluxo da aplicação.

Exemplos de pontos investigados:

```js
console.log("CHOOSE:", choose)
```

Utilizado para verificar o objeto retornado pelo prompt.

```js
console.log("PASSWORD_LENGTH:", passwordLength)
```

Utilizado para investigar quando:

```text
PASSWORD_LENGTH
```

estava retornando:

```text
undefined
```

Também foram utilizados logs dentro das funções para identificar se determinadas partes do fluxo estavam sendo executadas.

Esses logs fazem parte do processo de **debug** e podem ser removidos depois que o comportamento esperado for confirmado.

---

# 🌱 Variáveis de ambiente e execução

As configurações sensíveis ou configuráveis ficam isoladas no arquivo:

```text
.env
```

O código recupera os valores utilizando:

```js
process.env.NOME_DA_VARIAVEL
```

Exemplo:

```js
process.env.PASSWORD_LENGTH
```

O `.env` não deve ser enviado para o GitHub.

Uma boa prática é disponibilizar posteriormente um:

```text
.env.example
```

contendo apenas os nomes das variáveis necessárias, sem dados privados.

---

# 📦 Dependências

O projeto utiliza atualmente:

```json
"dependencies": {
  "chalk": "^6.0.0",
  "figures": "^6.1.0",
  "prompt": "^1.3.0",
  "qrcode-terminal": "^0.12.0"
}
```

### Chalk

Utilizado para estilizar mensagens exibidas no terminal.

### Figures

Utilizado para adicionar símbolos visuais às mensagens, como:

- indicadores
- setas
- confirmação
- erro

### Prompt

Responsável pela interação com o usuário através do terminal.

É utilizado para solicitar:

- ferramenta desejada;
- link;
- tipo do QR Code.

Também permite aplicar validações aos valores informados.

### QRCode Terminal

Responsável pela geração do QR Code.

---

# 🔄 Fluxo geral da aplicação

```text
Aplicação iniciada
        │
        ▼
   Menu principal
        │
        ├── [1] QR CODE
        │       │
        │       ▼
        │   Solicita link
        │       │
        │       ▼
        │   Escolhe formato
        │       │
        │       ▼
        │   Gera QR Code
        │
        └── [2] PASSWORD
                │
                ▼
          Lê configurações .env
                │
                ▼
          Monta caracteres permitidos
                │
                ▼
          Sorteia caracteres
                │
                ▼
          Retorna senha
```

---

# 🚧 Próximas melhorias

Este projeto representa a primeira versão funcional desenvolvida durante os estudos.

Alguns pontos poderão ser trabalhados posteriormente:

- refatoração;
- melhoria na separação de responsabilidades;
- abstração de partes da aplicação;
- melhoria das validações;
- tratamento de erros;
- melhoria da experiência no terminal;
- remoção dos comentários utilizados durante o aprendizado;
- revisão da arquitetura;
- implementação de novas funcionalidades.

Essas melhorias serão desenvolvidas gradualmente para praticar evolução e manutenção de código.