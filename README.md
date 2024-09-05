# Calculadora de IMC

Este é um projeto simples de uma **Calculadora de Índice de Massa Corporal (IMC)**, desenvolvido com **HTML**, **CSS** e **JavaScript**. A calculadora permite que os usuários insiram seus dados de peso e altura para calcular o IMC e exibir a classificação correspondente.

## Funcionalidades

- Calcular o IMC com base no peso (em kg) e altura (em cm).
- Exibir o resultado do IMC e a classificação correspondente.
- Limpar os campos de entrada e o resultado.
- Limitar o número de dígitos permitidos nos campos de peso e altura.
- Tabela com a classificação de IMC para referência.

## Tecnologias Utilizadas

- **HTML**: Estrutura do conteúdo da página.
- **CSS**: Estilização e layout da interface.
- **JavaScript**: Lógica de cálculo e manipulação de DOM.

## Como Usar

1. Clone ou faça o download deste repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Insira seu peso (kg) e altura (cm) nos campos de entrada.
4. Clique no botão **Calcular IMC** para ver o resultado.
5. Use o botão **Limpar** para apagar os campos e o resultado.

### Exemplo de Uso

- Peso: 70 kg
- Altura: 170 cm
- Resultado do IMC: 24.2
- Classificação: Normal

## Estrutura do Projeto

```bash
├── index.html        # Página principal do projeto
├── styles/
│   └── index.css     # Arquivo de estilo CSS
└── scripts/
    └── calcular.js   # Arquivo JavaScript com a lógica de cálculo
```


## Lógica de Cálculo
A fórmula usada para calcular o IMC é:
```bash
IMC = peso (kg) / (altura (m) * altura (m))
```

A classificação do IMC segue as diretrizes:

| IMC                | Classificação       |
|--------------------|---------------------|
| Menor que 18,5     | Abaixo do peso      |
| 18,5 a 24,9        | Peso normal         |
| 25,0 a 29,9        | Sobrepeso           |
| 30,0 a 34,9        | Obesidade I         |
| 35,0 a 39,9        | Obesidade II        |
| Maior que 40,0     | Obesidade III       |

## Licença

Este projeto é de domínio público e pode ser utilizado livremente.


