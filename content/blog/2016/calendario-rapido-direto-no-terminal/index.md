---
path: '/calendario-rapido-direto-no-terminal'
title: 'Como ver o Calendário direto pelo terminal'
date: 2016-09-02
datePublished: 2016-09-02
comments: true
description: 'Essa será uma dica bem curta e rápida, assim como o comando que você vai executar no seu terminal.'
image: ../../../assets/cal-command.png
category:
  - dicas
tags:
  - dicas
  - terminal
  - bash
---

Você tá focado no código, apenas com algumas ferramentas abertas e não quer procurar o caléndário na listagem de programas instalados no seu computador, ou ir até a barra de ferramentas e clicar na data pra poder ver o calendário completo do mês ou do ano?

Essa será uma dica bem curta e rápida, assim como o comando que você vai executar direto pelo terminal e que vai te ajudar a visualizar o calendário completo de qualquer ano.

Basta que você digite o comando `cal`, sim isso mesmo.

```bash
$ cal
```

O comando acima sem nenhum parâmentro exibe o mês atual completo pra você.

![Comando cal](../../../assets/cal-command.png)

Se você quiser escolher o Mês para ser exibido você precisa passar o múmero do mês (de 1 a 12) e o ano, assim:

```bash
$ cal 3 2017
```

Isso vai imprimir o mês excolhido.

![Comando cal mach 2017](../../../assets/cal-march-2017.png)

Caso você queira apenas o ano

```bash
$ cal 2018
```

![Comando cal year 2018](../../../assets/cal-year-2018.png)

That’s it! [Aqui está um link para uma simples doc](http://ss64.com/bash/cal.html 'Aqui está um link para uma simples doc')

Espero que use e abuse! 😀

/end
