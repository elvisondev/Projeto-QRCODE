# 🛠️ E-commerce Utility Kit

Kit de ferramentas desenvolvido em **Node.js** durante a Formação Node.js da DIO.

A aplicação disponibiliza utilidades executadas diretamente pelo terminal, reunindo ferramentas que podem auxiliar em operações relacionadas a e-commerce.

Atualmente, o projeto possui:

- 🔳 Gerador de QR Code
- 🔐 Gerador de senhas

---

## ✨ Funcionalidades

### 🔳 QR Code Generator

Permite gerar um QR Code a partir de um link informado pelo usuário.

Durante a execução, o usuário informa o link e escolhe a forma de geração do QR Code através do terminal.

### 🔐 Password Generator

Gera senhas aleatórias utilizando regras configuráveis através de variáveis de ambiente.

É possível configurar:

- tamanho da senha;
- letras maiúsculas;
- letras minúsculas;
- números;
- caracteres especiais.

---

## 🧰 Tecnologias

- Node.js
- JavaScript
- ECMAScript Modules (ESM)
- NPM

### Dependências

O projeto utiliza:

```json
{
  "chalk": "^6.0.0",
  "figures": "^6.1.0",
  "prompt": "^1.3.0",
  "qrcode-terminal": "^0.12.0"
}
```

### Pacotes utilizados

- `chalk` — estilização das mensagens exibidas no terminal;
- `figures` — símbolos e indicadores visuais;
- `prompt` — interação e validação das entradas do usuário;
- `qrcode-terminal` — geração dos QR Codes.

---

## 📁 Estrutura do projeto

```text
Projeto-qr-code/
│
├── src/
│   ├── prompts-schema/
│   │   ├── prompt-schema-main.js
│   │   └── prompt-schema-qrcode.js
│   │
│   ├── services/
│   │   ├── password/
│   │   │   ├── utils/
│   │   │   │   └── permitted-Characters.js
│   │   │   ├── create.js
│   │   │   └── handler.js
│   │   │
│   │   └── qr-code/
│   │       ├── create.js
│   │       └── handler.js
│   │
│   └── main.js
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### Organização

A aplicação foi dividida por responsabilidade:

- `prompts-schema/` — configura os prompts e suas validações;
- `services/password/` — concentra a lógica relacionada à geração de senhas;
- `services/password/utils/` — contém funções auxiliares utilizadas pelo gerador;
- `services/qr-code/` — concentra a criação e o tratamento do QR Code;
- `main.js` — ponto de entrada e controle do fluxo principal da aplicação.

---

## ⚙️ Configuração

Após clonar o projeto, instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto para configurar o gerador de senhas.

Exemplo:

```env
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

### ⚠️ Sobre o arquivo `.env`

O arquivo `.env` **não deve ser versionado**, pois em aplicações reais ele pode armazenar informações sensíveis, como credenciais, tokens, chaves de API e configurações específicas de cada ambiente.

Neste projeto, as variáveis apresentadas acima possuem finalidade exclusivamente **didática e de configuração do gerador de senhas**. Os valores são exibidos na documentação apenas para demonstrar como executar e configurar o projeto.

Mesmo não contendo credenciais sensíveis neste caso, o `.env` permanece ignorado pelo Git para manter a prática correta de gerenciamento de variáveis de ambiente.

---

## 🔐 Configuração do gerador de senhas

As regras da senha são controladas pelas variáveis de ambiente:

| Variável | Função |
| --- | --- |
| `PASSWORD_LENGTH` | Define o tamanho da senha |
| `UPPERCASE_LETTERS` | Habilita letras maiúsculas |
| `LOWERCASE_LETTERS` | Habilita letras minúsculas |
| `NUMBERS` | Habilita números |
| `SPECIAL_CHARACTERS` | Habilita caracteres especiais |

As opções de caracteres utilizam valores booleanos representados como texto:

```env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

---

## ▶️ Executando

Para executar normalmente:

```bash
npm run start
```

Durante o desenvolvimento:

```bash
npm run dev
```

---

## 🧭 Fluxo da aplicação

Ao iniciar o projeto, o usuário escolhe uma das ferramentas:

```text
[1] QRCODE
[2] PASSWORD
```

### QR Code

Selecionando `1`, a aplicação:

```text
Menu
 ↓
QR Code
 ↓
Solicita o link
 ↓
Solicita o tipo
 ↓
Gera o QR Code
 ↓
Exibe o resultado
```

### Password

Selecionando `2`, a aplicação:

```text
Menu
 ↓
Password
 ↓
Lê as variáveis de ambiente
 ↓
Monta os caracteres permitidos
 ↓
Seleciona caracteres aleatoriamente
 ↓
Gera a senha
 ↓
Exibe o resultado
```

---

## 🏗️ Arquitetura

O projeto utiliza uma organização modular baseada na separação de responsabilidades.

```text
                    main.js
                       │
              ┌────────┴────────┐
              │                 │
           QR Code           Password
              │                 │
           create.js          create.js
              │                 │
          handler.js          handler.js
                                │
                     permitted-Characters.js
```

Os schemas dos prompts ficam separados das regras responsáveis pela geração das ferramentas, evitando concentrar toda a aplicação no arquivo principal.

---

## 📌 Status

**Primeira versão funcional.**

O projeto poderá receber novas versões voltadas para:

- refatoração;
- melhoria das validações;
- tratamento de erros;
- novas funcionalidades;
- melhoria da experiência no terminal;
- revisão da separação de responsabilidades;
- evolução da arquitetura.

---

## 🎓 Projeto educacional

Projeto desenvolvido durante a **Formação Node.js da DIO** para aplicação prática de conceitos do ecossistema Node.js.

O projeto será evoluído progressivamente conforme novos conceitos forem estudados e aplicados.