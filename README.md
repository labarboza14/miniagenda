
# 📆 MiniAgenda – Calendário Interativo com Eventos

Este projeto é uma **mini agenda interativa** feita com HTML, CSS e JavaScript puro (sem bibliotecas externas), ideal para quem está aprendendo a programar e deseja aplicar conhecimentos em DOM, manipulação de datas, eventos e lógica de front-end.

---

## ✨ Funcionalidades

- Visualização de um **calendário mensal** com destaque para o **dia atual**.
- Adição de **eventos com horário, título, participante e e-mail**.
- Visualização de eventos por dia.
- Tentativa de alerta via `popup` **5 minutos antes de cada evento** (não funcionou).
- Interface simples, clara e 100% funcional em navegador moderno.

---

## 📁 Estrutura dos Arquivos

```

miniagenda/
│
├── index.html       # Estrutura da página (calendário + formulário)
├── style.css        # Estilização da agenda e do calendário
└── script.js        # Lógica para interações, eventos e alertas

````

---

## 🚀 Como Usar Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/labarboza14/miniagenda.git
cd miniagenda
````

2. **Abra o arquivo `index.html` no navegador:**

Você pode simplesmente clicar duas vezes no arquivo ou usar uma extensão como Live Server no VS Code para recarregamento automático.

---

## 🧠 Conceitos Trabalhados

Este projeto é excelente para praticar:

* Manipulação do DOM com JavaScript puro
* Uso de `Date()` e `setInterval` para controle de tempo
* Estruturação de layouts com **Grid e Flexbox**
* Armazenamento temporário em memória (via arrays)
* Atualização dinâmica da interface
* Eventos de clique, `input` e `submit`

---

## 📝 Como Adicionar um Evento

1. Clique em um **dia do calendário**.
2. Preencha o formulário:

   * **Título** do evento
   * **Horário** (formato `HH:MM`)
   * **Nome do participante**
   * **E-mail** (simulado, não envia)
3. Clique em **"Adicionar Evento"**.
4. O evento aparecerá na lateral, abaixo do calendário.

> ✅ Um alerta será exibido **5 minutos antes do horário do evento**, se a aba estiver aberta.

---

## ⚠️ Pontos a Melhorar

* **A notificação via `alert()` para lembrar do evento 5 minutos antes não funcionou de forma confiável**, especialmente se a aba do navegador não estiver ativa.
* A implementação do alerta é simples, mas aplicativos reais usam **notificações do sistema (push notifications)** que exigem permissões específicas e APIs mais avançadas.
* Foi um desafio construir um calendário e sistema de eventos do zero, pois já existem muitas soluções e apps consolidados que fazem isso com alta complexidade e recursos.
* O foco aqui foi criar um projeto didático para fixar conceitos básicos de JavaScript e manipulação de datas.

---

## 🛠️ Melhorias Futuras (para estudar mais)

* Implementar notificações push usando a API de Notificações do navegador.
* Armazenar os eventos com `localStorage` para persistência.
* Permitir **edição e exclusão** de eventos.
* Integrar com APIs externas de calendários (Google Calendar, Outlook).
* Exportar eventos em formatos padrão (.ics, .csv).
* Adicionar responsividade para dispositivos móveis.

---

## 👩‍💻 Para quem é este projeto?

* Estudantes de JavaScript iniciantes/intermediários
* Pessoas que querem aprender a criar interfaces dinâmicas sem frameworks
* Quem busca um projeto pequeno, prático e útil para o portfólio

---
