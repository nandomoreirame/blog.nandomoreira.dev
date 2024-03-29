---
path: '/wp-cli-uma-interface-de-linha-de-comando-para-wordpress'
title: 'WP-CLI: Uma interface de linha de comando para WordPress'
description: 'Nesse artigo vou mostrar como instalar a WP-CLI, uma interface de linha de comando para WordPress'
keywords: 'wordpress, wp, cli, wp-cli, comando, linha, interface'
image: ../../../assets/wp-cli-help.png
date: 2016-01-10
datePublished: 2016-01-10
category:
  - wordpress
tags:
  - wordpress
  - cli
  - wpcli
---

Nesse artigo vou mostrar como instalar a [WP-CLI](http://wp-cli.org/), uma interface de linha de comando para WordPress.

**WP-CLI** significa _WordPress Command Line Interface_ traduzindo para o português _interface de linha de comando_.

A instalação é bem simples, basta que você tenha o <abbr title="PHP: Hypertext Preprocessor">PHP</abbr> instalado em sua máquina.

---

## Instalando (e atualizando)

Primeiro, faça o download [wp-cli.phar](https://raw.github.com/wp-cli/builds/gh-pages/phar/wp-cli.phar) usando `wget` ou `curl`. Por exemplo:

```bash
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
```

Em seguida, verifique se ele funciona:

```bash
php wp-cli.phar --info
```

Para ser capaz de escrever apenas `wp` no seu terminal, em vez de `php wp-cli.phar`, você precisa tornar o arquivo executável e movê-lo para algum lugar no seu `$PATH`. Por exemplo:

```bash
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp
```

Agora é só executar `wp --info`.

> O texto acima foi uma tradução de [WP-CLI](http://wp-cli.org/).

---

## WP-CLI instalado e agora?

Executando `wp help` ou apenas `wp` ele nos trará uma lista de subcomandos.

![wp-cli help command](../../../assets/wp-cli-help.png)

Com esses subcomandos você pode ter total controle da sua instalação <abbr title="WordPress">WP</abbr>, você pode instalar e remover plugins e temas, gerenciar categorias, taxonomias e termos, gerenciar comentários, usuários, resumindo, tudo que pode ser feito via `/wp-admin/` poderá ser feito via `WP-CLI`.

Por exemplo, instalação de um plugin ficara mais ou menos assim:

```bash
wp plugin install hello-dolly
```

Fácil não?

![wp-cli theme status](../../../assets/wp-cli-theme-status.png)

---

## Palestra

Tem um vídeo muito bom de uma palestra do **[Rodrigo Primo](https://github.com/rodrigoprimo)** no WordCamp Belo Horizonte em 2014.

https://www.youtube.com/watch?v=Gy6uQ_2Gceg

Os slides da palestra está nesse link: [rodrigoprimo.github.io/wp-cli-wordcamp-bh-2014](http://rodrigoprimo.github.io/wp-cli-wordcamp-bh-2014/)

E você já usa <abbr title="WordPress Command Line Interface">WP-CLI</abbr>? Conte para nós como está sendo sua experiência com a ferramenta.

/end
