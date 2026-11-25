# MARÉ — Movimento de Acesso ao Recife e Experiências

Landing page de pesquisa e validação do **MARÉ**, uma iniciativa que está ouvindo quem vive o Recife para criar uma plataforma gratuita que reúne cultura, gastronomia, lazer gratuito e eventos em um só lugar.

A página apresenta o problema (informação espalhada, dúvida sobre a qualidade dos lugares, falta de preços claros), mostra os dados da pesquisa inicial com 75 participantes em Recife e convida o visitante a responder o formulário.

## O que tem na página

- **Hero** com um protótipo de celular interativo: os filtros Todos, Gratuito, Cultura e Gastronomia funcionam de verdade.
- **O Cenário e Dados:** números-chave, principais dificuldades ao escolher o que fazer, o que as pessoas mais querem encontrar e o perfil de idades ouvido.
- **Como é hoje x Com a nossa plataforma:** comparação lado a lado.
- **Como vai funcionar:** curadoria inteligente, filtros pelo seu perfil e bolso, acesso democrático.
- **Participar:** botão que leva ao formulário de pesquisa.

## Estrutura dos arquivos

```
/
├── index.html    # estrutura da página (é o arquivo que você abre)
├── style.css     # cores, fontes e estilos customizados
├── script.js     # filtros, menu mobile, animações
├── logo.png      # logo do MARÉ (fundo transparente)
└── favicon.png   # ícone da aba do navegador
```

## Como rodar localmente

Não precisa instalar nada nem fazer build. Mantenha os 5 arquivos na mesma pasta.

### Opção 1: abrir direto

Dê dois cliques no `index.html` e ele abre no navegador.

### Opção 2: servidor local (localhost)

Abra o terminal dentro da pasta do projeto e use um destes:

**Python**

```bash
python -m http.server 5500
```

(em alguns sistemas o comando é `python3`). Depois acesse http://localhost:5500.

**Node**

```bash
npx serve
```

Acesse o endereço que aparecer no terminal.

**VS Code**

Instale a extensão **Live Server**, clique com o botão direito no `index.html` e escolha **Open with Live Server**. A página recarrega sozinha a cada alteração salva.

> Precisa de internet para carregar a fonte (Google Fonts), o Tailwind CSS e os ícones Lucide, que vêm de CDN.

## Tecnologias

- HTML5, CSS3 e JavaScript puro (Vanilla JS)
- [Tailwind CSS](https://tailwindcss.com/) via CDN, só para utilitários de layout
- [Lucide](https://lucide.dev/) para os ícones
- Fonte [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

## Paleta de cores

| Nome | Hex |
| --- | --- |
| Citrus Zest | `#FFA62B` |
| Sea Breeze | `#86C5FF` |
| Amalfi Tile | `#2E5AA7` |
| Cream Gelato | `#F8E6A0` |

## Link da pesquisa

Todos os botões de ação abrem o formulário em uma nova aba:
https://forms.gle/HxK9HoF9sowGPgGM6

Para trocar o link, procure por `forms.gle` no `index.html` e substitua em todas as ocorrências.

## Publicação

Quando quiser colocar no ar, suba os arquivos na raiz de um repositório no GitHub e conecte ao Netlify (ou arraste a pasta no Netlify Drop). Não é necessária nenhuma configuração de build.

---

© 2026 MARÉ · Recife, PE
