# Guia Completo de Implantação
## Curso Python para IA e Embarcados

### Instruções Detalhadas para Hospedagem Gratuita

---

## Introdução

Este guia fornece instruções passo a passo para implantar o site "Curso Python para IA e Embarcados" em diferentes plataformas de hospedagem gratuita. O projeto foi desenvolvido com React, Tailwind CSS e shadcn/ui, sendo otimizado para performance e compatibilidade com as principais plataformas de hospedagem.

## Pré-requisitos

Antes de iniciar a implantação, certifique-se de ter:

- Conta no GitHub (recomendado para todas as plataformas)
- Node.js instalado localmente (para desenvolvimento)
- Git configurado em sua máquina
- Acesso aos arquivos do projeto

## Estrutura do Projeto

O projeto possui a seguinte estrutura otimizada:

```
curso-python-novo/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/ui/      # Componentes shadcn/ui
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos customizados
│   └── main.jsx           # Ponto de entrada
├── dist/                  # Build de produção (gerado)
├── package.json           # Dependências e scripts
├── README.md              # Documentação
└── .gitignore            # Arquivos ignorados pelo Git
```

---

## Opção 1: Vercel (Recomendado)

### Por que Vercel?

A Vercel é a plataforma mais recomendada para projetos React devido à sua integração nativa com frameworks modernos, deploy automático e excelente performance global.

### Passo a Passo - Vercel

#### 1. Preparação do Repositório

1. Acesse [github.com](https://github.com) e crie um novo repositório
2. Faça upload dos arquivos do projeto ou use Git:

```bash
git init
git add .
git commit -m "Initial commit: Curso Python para IA e Embarcados"
git branch -M main
git remote add origin https://github.com/seu-usuario/curso-python-ia.git
git push -u origin main
```

#### 2. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign up" e conecte com sua conta GitHub
3. Após o login, clique em "New Project"
4. Selecione o repositório do curso Python
5. Configure as opções:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### 3. Configurações Avançadas (Opcional)

Para otimizar ainda mais, adicione um arquivo `vercel.json` na raiz:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### 4. Deploy Automático

- Cada push para a branch `main` acionará um novo deploy
- Branches de feature criam previews automáticos
- O site estará disponível em: `https://seu-projeto.vercel.app`

---

## Opção 2: Netlify

### Características do Netlify

O Netlify oferece excelente integração com Git, formulários gratuitos e funcionalidades serverless básicas.

### Passo a Passo - Netlify

#### 1. Deploy Manual (Mais Rápido)

1. Execute o build local:
```bash
npm run build
```

2. Acesse [netlify.com](https://netlify.com)
3. Arraste a pasta `dist` para a área de deploy
4. Seu site estará online em segundos

#### 2. Deploy Automático via Git

1. Conecte sua conta GitHub no Netlify
2. Clique em "New site from Git"
3. Selecione o repositório
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (em Environment variables)

#### 3. Configurações de Redirecionamento

Crie um arquivo `_redirects` na pasta `public`:

```
/*    /index.html   200
```

Isso garante que o roteamento do React funcione corretamente.

---

## Opção 3: GitHub Pages

### Limitações e Vantagens

GitHub Pages é gratuito para repositórios públicos e oferece integração nativa, mas tem algumas limitações para SPAs (Single Page Applications).

### Passo a Passo - GitHub Pages

#### 1. Configuração do Repositório

1. Certifique-se de que o repositório é público
2. Vá em Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha a branch `main` e pasta `/docs` ou `/root`

#### 2. Configuração do Build

Adicione ao `package.json`:

```json
{
  "homepage": "https://seu-usuario.github.io/curso-python-ia",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### 3. Deploy Automático com GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

---

## Opção 4: Surge.sh

### Deploy Rápido via CLI

Surge.sh é ideal para deploys rápidos e testes.

### Passo a Passo - Surge.sh

#### 1. Instalação

```bash
npm install -g surge
```

#### 2. Build e Deploy

```bash
npm run build
cd dist
surge
```

#### 3. Configuração de Domínio

- Escolha um subdomínio: `curso-python-ia.surge.sh`
- Para domínio customizado, adicione arquivo `CNAME`

---

## Configurações de Performance

### Otimizações Implementadas

O projeto já inclui várias otimizações:

1. **Code Splitting**: Componentes carregados sob demanda
2. **Tree Shaking**: Remoção de código não utilizado
3. **Minificação**: CSS e JavaScript comprimidos
4. **Lazy Loading**: Imagens carregadas conforme necessário
5. **Caching**: Headers de cache otimizados

### Métricas de Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

---

## Monitoramento e Analytics

### Google Analytics (Opcional)

Para adicionar analytics, inclua no `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics

Para projetos na Vercel, adicione:

```bash
npm install @vercel/analytics
```

E no `App.jsx`:

```javascript
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      {/* Seu componente */}
      <Analytics />
    </>
  );
}
```

---

## Domínio Personalizado

### Configuração de Domínio

#### Vercel
1. Vá em Project Settings > Domains
2. Adicione seu domínio
3. Configure DNS conforme instruções

#### Netlify
1. Site Settings > Domain management
2. Add custom domain
3. Configure DNS records

#### GitHub Pages
1. Settings > Pages > Custom domain
2. Adicione arquivo `CNAME` no repositório

### Configuração DNS

Para qualquer plataforma, configure:

```
Type: CNAME
Name: www
Value: seu-site.plataforma.com

Type: A (para apex domain)
Name: @
Value: [IPs da plataforma]
```

---

## Solução de Problemas

### Problemas Comuns

#### 1. Erro 404 em Rotas

**Problema**: Páginas não encontradas ao acessar URLs diretas

**Solução**: Configure redirecionamentos:
- Vercel: Arquivo `vercel.json` com rewrites
- Netlify: Arquivo `_redirects`
- GitHub Pages: Limitação conhecida para SPAs

#### 2. Build Falha

**Problema**: Erro durante o processo de build

**Soluções**:
- Verifique versão do Node.js (recomendado: 18+)
- Limpe cache: `npm ci`
- Verifique dependências: `npm audit`

#### 3. Performance Lenta

**Problema**: Site carrega lentamente

**Soluções**:
- Otimize imagens (WebP, compressão)
- Ative compressão gzip
- Use CDN da plataforma
- Minimize CSS/JS não utilizados

#### 4. Problemas de CSS

**Problema**: Estilos não aplicados corretamente

**Soluções**:
- Verifique ordem de importação CSS
- Confirme build do Tailwind
- Teste em modo de produção local

---

## Manutenção e Atualizações

### Atualizações Regulares

1. **Dependências**: Atualize mensalmente
```bash
npm update
npm audit fix
```

2. **Conteúdo**: Mantenha informações atualizadas
3. **Performance**: Monitore métricas regularmente
4. **Segurança**: Aplique patches de segurança

### Backup e Versionamento

- Use Git para controle de versão
- Mantenha backups do repositório
- Documente mudanças importantes
- Use tags para releases estáveis

---

## Conclusão

Este guia fornece todas as informações necessárias para implantar com sucesso o site "Curso Python para IA e Embarcados" em plataformas de hospedagem gratuita. A Vercel é recomendada para a melhor experiência, mas todas as opções apresentadas são viáveis dependendo de suas necessidades específicas.

Para suporte adicional, consulte a documentação oficial de cada plataforma ou entre em contato através dos canais de suporte disponíveis.

---

**Desenvolvido por Manus AI**  
*Guia atualizado em Junho de 2025*

