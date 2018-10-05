# list-of-skills

## Instalando dependencias
```
npm install
```

### Colocando em modo desenvolvimento
```
npm run serve
```

### Gerando a pasta dist (minificada)
```
npm run build
```

### Rodar testes
```
npm run test
```

### Lints e correções de arquivos
```
npm run lint
```

### Deploy -> Envio para githubPages
#### Essa parte irá criar o dist e publicar no branch gh:pages, para isso precisei configurar o vue.config.js e configurar o SSH
##### https://cli.vuejs.org/guide/deployment.html#github-pages
##### https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
```
./deploy.sh
```

