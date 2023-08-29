# Aplicativo de Lista de Tarefas em React

Este é um simples aplicativo de lista de tarefas construído em React. Ele demonstra os principais conceitos do React, incluindo gerenciamento de estado, imutabilidade do estado, renderização de listas e componetização.

## Funcionalidades

- Adicionar uma nova tarefa.
- Marcar e desmarcar uma tarefa como concluída.
- Remover uma tarefa da listagem.
- Mostrar o progresso de conclusão das tarefas.

## Como Usar

Certifique-se de ter o Node.js e o npm instalados no seu sistema.

1. Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/mbrenodev/todo-react.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd todo-react
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o aplicativo:

   ```bash
   npm run dev
   ```

O aplicativo será executado em `http://localhost:5173/` no seu navegador.

## Estrutura do Projeto

- `src/` - Contém o código-fonte do aplicativo.
  - `components/` - Contém os componentes React reutilizáveis.
    - `Header.jsx` - Componente hearder para rederizar a imagem logo.
    - `Header.module.css` - Module CSS do componente Header.
    - `Tasks.jsx` - Componente para exibir uma tarefa individual.
    - `Tasks.module.css` - Module CSS do componente Tasks.
  - `App.js` - Componente principal que renderiza a aplicação.
  - `main.jsx` - Ponto de entrada principal da aplicação.
- `public/` - Contém arquivos estáticos como o icon.

## Conceitos Importantes

### Estado e Imutabilidade

O estado do aplicativo é gerenciado em `App.js` usando o estado do React (`useState`). Certifique-se de manter o estado imutável ao atualizá-lo. Isso é fundamental para garantir um comportamento previsível e eficiente do React.

```javascript
const [tasks, setTasks] = useState([]);
```

### Lista e Chaves de Propriedades

A lista de tarefas é renderizada no componente `Tasks.js` usando um mapeamento (`map`) para criar elementos React para cada tarefa. Certifique-se de atribuir uma chave única a cada elemento renderizado para otimizar a atualização de elementos da lista.

```javascript
{tasks.map((task) => (
  <Tasks
    key={task.id}
    id={task.id}
    title={task.title}
    onCompleteTask={handleCompleteTask}
    onDeleteTask={handleDeleteTask}
  />
))}
```

### Componetização

O aplicativo é dividido em componentes reutilizáveis para facilitar a manutenção e a escalabilidade. Cada componente tem sua responsabilidade específica.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Basta abrir uma [issue](https://github.com/mbrenodev/todo-react/issues) ou enviar um [pull request](https://github.com/mbrenodev/todo-react/pulls).

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).