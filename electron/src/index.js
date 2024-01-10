import React from "react";
import * as ReactDomClient from "react-dom/client";

const elements = (
  <div>
    <h1>Вывод нескольких тегов</h1>
    <h2>Заголовок 2</h2>
    <h3>Заголовок 3</h3>
  </div>
)

const app = ReactDomClient.createRoot(document.getElementById('app'));

app.render(elements)