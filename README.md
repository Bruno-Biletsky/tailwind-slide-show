# instalando a dependencia de rotas
    npm install react-router-dom

# instalando a dependencia do tailwind
    npm install -D tailwindcss

# criando os arquivos do tailwind
    npx tailwindcss init

# adicionano as linhas no tailwind.config
     content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
# adicionando as 3 inhas(base, utilities, componentes) dentro do index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
# instalando  cdn do servidor no index.html
    <script src="https://cdn.tailwindcss.com"></script>

# instalando a dependencia de slideshow
    npm i react-slideshow-image