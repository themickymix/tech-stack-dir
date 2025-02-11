const techData = {
  "Frontend Development": {
    "React.js": {
      url: "https://reactjs.org",
      description:
        "A JavaScript library for building user interfaces with a component-based architecture",
    },
    "Vue.js": {
      url: "https://vuejs.org",
      description:
        "Progressive JavaScript framework for building modern web interfaces",
    },
    Angular: {
      url: "https://angular.io",
      description:
        "Platform for building mobile and desktop web applications using TypeScript",
    },
    Svelte: {
      url: "https://svelte.dev",
      description:
        "Compiler that creates reactive JavaScript modules and minimal runtime",
    },
    "Next.js": {
      url: "https://nextjs.org",
      description:
        "React framework for production with server-side rendering and static site generation",
    },
    "Nuxt.js": {
      url: "https://nuxtjs.org",
      description:
        "Vue.js framework for creating universal, server-side rendered applications",
    },
  },
  "UI Component Libraries": {
    "Shadcn UI": {
      url: "https://ui.shadcn.com",
      description:
        "Beautiful, composable UI components built with Radix and Tailwind",
    },
    "Material-UI": {
      url: "https://mui.com",
      description: "React components that implement Google's Material Design",
    },
    daisyUI: {
      url: "https://daisyui.com",
      description:
        "Tailwind CSS component library for rapid UI development with dark mode",
    },
    "Ant Design": {
      url: "https://ant.design",
      description: "Enterprise-class UI design language and React UI library",
    },
    "Chakra UI": {
      url: "https://chakra-ui.com",
      description:
        "Simple, modular and accessible component library for React applications",
    },
    Flowbite: {
      url: "https://flowbite.com",
      description:
        "Modern, responsive and accessible CSS framework based on Flexbox",
    },
    Bootstrap: {
      url: "https://getbootstrap.com",
      description:
        "Popular CSS framework for responsive, mobile-first front-end development",
    },
    "Tailwind CSS": {
      url: "https://tailwindcss.com",
      description:
        "Utility-first CSS framework for rapidly building custom user interfaces",
    },
  },
  "State Management": {
    Redux: {
      url: "https://redux.js.org",
      description: "Predictable state container for JavaScript apps",
    },
    Zustand: {
      url: "https://github.com/pmndrs/zustand",
      description: "Small, fast and scalable state management solution",
    },
    Recoil: {
      url: "https://recoiljs.org",
      description: "State management library for React with atomic approach",
    },
    MobX: {
      url: "https://mobx.js.org",
      description:
        "Simple, scalable state management through reactive programming",
    },
    Vuex: {
      url: "https://vuex.vuejs.org",
      description:
        "State management pattern and library for Vue.js applications",
    },
    Pinia: {
      url: "https://pinia.vuejs.org",
      description: "Intuitive, type safe and flexible Store for Vue",
    },
  },
  "Animation & Interactivity": {
    GSAP: {
      url: "https://greensock.com/gsap",
      description: "Professional-grade animation library for the modern web",
    },
    "Framer Motion": {
      url: "https://www.framer.com/motion",
      description: "Production-ready motion library for React",
    },
    "Three.js": {
      url: "https://threejs.org",
      description: "JavaScript 3D library for creating WebGL-based 3D graphics",
    },
    Lottie: {
      url: "https://airbnb.io/lottie",
      description: "Library for rendering After Effects animations natively",
    },
  },
  "Backend Development": {
    "Node.js": {
      url: "https://nodejs.org",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    },
    "Express.js": {
      url: "https://expressjs.com",
      description: "Fast, unopinionated, minimalist web framework for Node.js",
    },
    NestJS: {
      url: "https://nestjs.com",
      description:
        "Progressive Node.js framework for building scalable server-side applications",
    },
    Django: {
      url: "https://www.djangoproject.com",
      description:
        "High-level Python web framework that encourages rapid development",
    },
    Flask: {
      url: "https://flask.palletsprojects.com",
      description: "Lightweight WSGI web application framework in Python",
    },
    "Spring Boot": {
      url: "https://spring.io/projects/spring-boot",
      description:
        "Java-based framework for creating stand-alone, production-grade applications",
    },
    "Ruby on Rails": {
      url: "https://rubyonrails.org",
      description:
        "Web application framework written in Ruby that follows MVC pattern",
    },
    Laravel: {
      url: "https://laravel.com",
      description:
        "PHP web application framework with expressive, elegant syntax",
    },
  },
  "Authentication & Authorization": {
    "Passport.js": {
      url: "https://www.passportjs.org",
      description:
        "Authentication middleware for Node.js with extensive strategy support",
    },
    JWT: {
      url: "https://jwt.io",
      description: "JSON Web Tokens for secure information transmission",
    },
    "Firebase Auth": {
      url: "https://firebase.google.com/products/auth",
      description: "Drop-in authentication solution by Google Firebase",
    },
    Auth0: {
      url: "https://auth0.com",
      description: "Universal authentication & authorization platform",
    },
    "Clerk.dev": {
      url: "https://clerk.dev",
      description: "Complete user management and authentication solution",
    },
  },
  "Database & ORMs": {
    PostgreSQL: {
      url: "https://www.postgresql.org",
      description: "Powerful, open source object-relational database system",
    },
    MySQL: {
      url: "https://www.mysql.com",
      description: "Popular open-source relational database management system",
    },
    SQLite: {
      url: "https://www.sqlite.org",
      description:
        "Self-contained, serverless, zero-configuration database engine",
    },
    MongoDB: {
      url: "https://www.mongodb.com",
      description:
        "Document-based distributed database for modern applications",
    },
    Redis: {
      url: "https://redis.io",
      description:
        "In-memory data structure store used as database/cache/message broker",
    },
    Prisma: {
      url: "https://www.prisma.io",
      description: "Next-generation ORM for Node.js and TypeScript",
    },
    Sequelize: {
      url: "https://sequelize.org",
      description: "Promise-based Node.js ORM for SQL databases",
    },
    TypeORM: {
      url: "https://typeorm.io",
      description:
        "ORM that can run in Node.js and supports multiple databases",
    },
    Mongoose: {
      url: "https://mongoosejs.com",
      description: "MongoDB object modeling tool for Node.js",
    },
  },
  Security: {
    "bcrypt.js": {
      url: "https://github.com/dcodeIO/bcrypt.js",
      description: "Password hashing function implementation for JavaScript",
    },
    argon2: {
      url: "https://www.npmjs.com/package/argon2",
      description: "Password hashing function implementation for Typrescript",
    },
    "Helmet.js": {
      url: "https://helmetjs.github.io",
      description: "Secure Express apps by setting various HTTP headers",
    },
    CORS: {
      url: "https://github.com/expressjs/cors",
      description:
        "Node.js package for providing Connect/Express middleware for CORS",
    },
    CSURF: {
      url: "https://github.com/expressjs/csurf",
      description: "CSRF protection middleware for Express",
    },
    "Rate-limiter-flexible": {
      url: "https://github.com/animir/node-rate-limiter-flexible",
      description: "Rate limiting middleware to prevent brute-force attacks",
    },
  },
  "API Development": {
    Axios: {
      url: "https://axios-http.com",
      description: "Promise-based HTTP client for browser and Node.js",
    },
    GraphQL: {
      url: "https://graphql.org",
      description: "Query language for APIs and runtime for fulfilling queries",
    },
    Apollo: {
      url: "https://www.apollographql.com",
      description: "Platform for building a unified graph of your data",
    },
    REST: {
      url: "https://restfulapi.net",
      description: "Architectural style for distributed hypermedia systems",
    },
    gRPC: {
      url: "https://grpc.io",
      description: "High-performance, open source universal RPC framework",
    },
  },
  "Payment & E-commerce": {
    Stripe: {
      url: "https://stripe.com",
      description: "Payment processing platform for internet businesses",
    },
    PayPal: {
      url: "https://developer.paypal.com",
      description: "Online payment system supporting money transfers",
    },
    Razorpay: {
      url: "https://razorpay.com",
      description: "Payment gateway solution for Indian businesses",
    },
    Square: {
      url: "https://squareup.com/developers",
      description: "Payment and point of sale solutions for businesses",
    },
    "Shopify API": {
      url: "https://shopify.dev",
      description: "API for building Shopify apps and integrations",
    },
  },
  "DevOps & CI/CD": {
    Docker: {
      url: "https://www.docker.com",
      description:
        "Platform for developing, shipping, and running applications in containers",
    },
    Kubernetes: {
      url: "https://kubernetes.io",
      description:
        "Container orchestration system for automating deployment and scaling",
    },
    "GitHub Actions": {
      url: "https://github.com/features/actions",
      description: "CI/CD platform integrated with GitHub repositories",
    },
    Jenkins: {
      url: "https://www.jenkins.io",
      description:
        "Open source automation server for building, deploying, and automating projects",
    },
    Terraform: {
      url: "https://www.terraform.io",
      description: "Infrastructure as Code software tool",
    },
    Ansible: {
      url: "https://www.ansible.com",
      description:
        "Automation tool for configuration management and deployment",
    },
    NGINX: {
      url: "https://www.nginx.com",
      description: "Web server, reverse proxy, load balancer, and HTTP cache",
    },
  },
  Testing: {
    Jest: {
      url: "https://jestjs.io",
      description: "JavaScript testing framework with a focus on simplicity",
    },
    Mocha: {
      url: "https://mochajs.org",
      description: "Feature-rich JavaScript test framework for Node.js",
    },
    Chai: {
      url: "https://www.chaijs.com",
      description: "BDD/TDD assertion library for Node.js and browsers",
    },
    Cypress: {
      url: "https://www.cypress.io",
      description:
        "Next generation front end testing tool for web applications",
    },
    Puppeteer: {
      url: "https://pptr.dev",
      description: "Node library for controlling headless Chrome or Chromium",
    },
    Selenium: {
      url: "https://www.selenium.dev",
      description: "Tool for browser automation and testing",
    },
  },
  "Logging & Monitoring": {
    Winston: {
      url: "https://github.com/winstonjs/winston",
      description: "Multi-transport async logging library for Node.js",
    },
    Morgan: {
      url: "https://github.com/expressjs/morgan",
      description: "HTTP request logger middleware for Node.js",
    },
    Log4js: {
      url: "https://log4js-node.github.io/log4js-node",
      description:
        "Logging framework for JavaScript with flexible logging levels",
    },
    Prometheus: {
      url: "https://prometheus.io",
      description: "Systems monitoring and alerting toolkit",
    },
    Grafana: {
      url: "https://grafana.com",
      description: "Open source analytics and monitoring solution",
    },
    Sentry: {
      url: "https://sentry.io",
      description: "Error tracking and performance monitoring platform",
    },
  },
  "Real-Time Communication": {
    "Socket.io": {
      url: "https://socket.io",
      description:
        "Library for real-time web applications with bidirectional communication",
    },
    WebRTC: {
      url: "https://webrtc.org",
      description:
        "Free, open project enabling real-time communication in web browsers",
    },
    Pusher: {
      url: "https://pusher.com",
      description: "Hosted APIs for building realtime applications",
    },
    Ably: {
      url: "https://ably.com",
      description: "Real-time messaging infrastructure as a service",
    },
  },
  "Serverless & Cloud": {
    "AWS Lambda": {
      url: "https://aws.amazon.com/lambda",
      description:
        "Serverless compute service that runs code in response to events",
    },
    "Firebase Functions": {
      url: "https://firebase.google.com/products/functions",
      description: "Google's serverless framework for running backend code",
    },
    Vercel: {
      url: "https://vercel.com",
      description: "Platform for frontend frameworks and static sites",
    },
    Netlify: {
      url: "https://www.netlify.com",
      description: "Platform for automating modern web projects deployment",
    },
    "Cloudflare Workers": {
      url: "https://workers.cloudflare.com",
      description:
        "Serverless execution environment on Cloudflare's edge network",
    },
  },
  "Headless CMS": {
    Strapi: {
      url: "https://strapi.io",
      description: "Open-source headless CMS to build customizable APIs",
    },
    "Sanity.io": {
      url: "https://www.sanity.io",
      description:
        "Platform for structured content with real-time collaboration",
    },
    Contentful: {
      url: "https://www.contentful.com",
      description: "API-first content platform for digital-first business",
    },
    Ghost: {
      url: "https://ghost.org",
      description:
        "Headless CMS and platform built for professional publishing",
    },
  },
  "AI & Machine Learning": {
    "TensorFlow.js": {
      url: "https://www.tensorflow.org/js",
      description: "Library for training and deploying ML models in JavaScript",
    },
    "Brain.js": {
      url: "https://brain.js.org",
      description: "Neural networks in JavaScript for browsers and Node.js",
    },
    "OpenAI API": {
      url: "https://openai.com/api",
      description: "API for accessing powerful AI models like GPT",
    },
    "Hugging Face": {
      url: "https://huggingface.co",
      description: "Platform for building, training and deploying ML models",
    },
  },
  "Web Scraping": {
    "Cheerio.js": {
      url: "https://cheerio.js.org",
      description: "Fast, flexible implementation of jQuery for parsing HTML",
    },
    Puppeteer: {
      url: "https://pptr.dev",
      description:
        "Node.js library for controlling headless Chrome or Chromium",
    },
    Playwright: {
      url: "https://playwright.dev",
      description: "Framework for Web Testing and Automation",
    },
    Scrapy: {
      url: "https://scrapy.org",
      description: "Fast high-level web crawling framework",
    },
  },
  "Build Tools": {
    Webpack: {
      url: "https://webpack.js.org",
      description: "Static module bundler for modern JavaScript applications",
    },
    Vite: {
      url: "https://vitejs.dev",
      description: "Next generation frontend tooling with instant server start",
    },
    Parcel: {
      url: "https://parceljs.org",
      description: "Zero configuration build tool for the web",
    },
    Rollup: {
      url: "https://rollupjs.org",
      description: "Module bundler for JavaScript libraries",
    },
    esbuild: {
      url: "https://esbuild.github.io",
      description: "Extremely fast JavaScript bundler and minifier",
    },
  },
  "Package Managers": {
    npm: {
      url: "https://www.npmjs.com",
      description: "Default package manager for Node.js",
    },
    yarn: {
      url: "https://yarnpkg.com",
      description: "Fast, reliable, and secure dependency management",
    },
    pnpm: {
      url: "https://pnpm.io",
      description: "Fast, disk space efficient package manager",
    },
  },
  "AI/Chatbot Development": {
    Botpress: {
      url: "https://botpress.com",
      description: "Open-source platform for building conversational AI",
    },
    Rasa: {
      url: "https://rasa.com",
      description: "Framework for automated conversations and AI assistants",
    },
    Dialogflow: {
      url: "https://cloud.google.com/dialogflow",
      description: "Google's natural language understanding platform",
    },
    "Microsoft Bot Framework": {
      url: "https://dev.botframework.com",
      description: "Platform for building enterprise-grade conversational AI",
    },
  },
  "File Upload & Storage": {
    Multer: {
      url: "https://github.com/expressjs/multer",
      description: "Middleware for handling multipart/form-data in Node.js",
    },
    Cloudinary: {
      url: "https://cloudinary.com",
      description: "Cloud service for image and video management",
    },
    "Firebase Storage": {
      url: "https://firebase.google.com/products/storage",
      description:
        "Object storage service for storing and serving user-generated content",
    },
    "Amazon S3": {
      url: "https://aws.amazon.com/s3",
      description:
        "Object storage built to store and retrieve any amount of data",
    },
  },
  "Email & Notifications": {
    Nodemailer: {
      url: "https://nodemailer.com",
      description: "Module for Node.js applications to send emails",
    },
    SendGrid: {
      url: "https://sendgrid.com",
      description: "Cloud-based email delivery platform",
    },
    Mailgun: {
      url: "https://www.mailgun.com",
      description:
        "Email API service for sending, receiving and tracking emails",
    },
    Twilio: {
      url: "https://www.twilio.com",
      description: "Platform for building SMS, voice & messaging applications",
    },
    "Firebase Cloud Messaging": {
      url: "https://firebase.google.com/products/cloud-messaging",
      description: "Cross-platform messaging solution",
    },
  },
  Internationalization: {
    i18next: {
      url: "https://www.i18next.com",
      description: "Internationalization framework for JavaScript",
    },
    "react-intl": {
      url: "https://formatjs.io/docs/react-intl",
      description: "Internationalization APIs and components for React",
    },
    "vue-i18n": {
      url: "https://kazupon.github.io/vue-i18n",
      description: "Internationalization plugin for Vue.js",
    },
    "lingui.js": {
      url: "https://lingui.js.org",
      description: "Seamless internationalization for JavaScript projects",
    },
  },
  "Web Performance": {
    Lighthouse: {
      url: "https://developers.google.com/web/tools/lighthouse",
      description: "Automated tool for improving web page quality",
    },
    "PageSpeed Insights": {
      url: "https://pagespeed.web.dev",
      description: "Tool for measuring page performance and optimization",
    },
    PurgeCSS: {
      url: "https://purgecss.com",
      description: "Tool to remove unused CSS from your project",
    },
    Workbox: {
      url: "https://developers.google.com/web/tools/workbox",
      description: "Libraries for adding offline support to web apps",
    },
  },
  "Blockchain & Web3": {
    "Web3.js": {
      url: "https://web3js.readthedocs.io",
      description: "JavaScript library for interacting with Ethereum",
    },
    "Ethers.js": {
      url: "https://docs.ethers.io",
      description: "Complete Ethereum library and wallet implementation",
    },
    Hardhat: {
      url: "https://hardhat.org",
      description: "Development environment for Ethereum software",
    },
    Truffle: {
      url: "https://trufflesuite.com",
      description: "Development framework for Ethereum",
    },
    Solidity: {
      url: "https://docs.soliditylang.org",
      description: "Object-oriented programming language for Ethereum",
    },
  },
  WebAssembly: {
    AssemblyScript: {
      url: "https://www.assemblyscript.org",
      description: "TypeScript-like language compiled to WebAssembly",
    },
    Emscripten: {
      url: "https://emscripten.org",
      description: "Toolchain for compiling C/C++ to WebAssembly",
    },
    "Rust & WASM": {
      url: "https://rustwasm.github.io",
      description: "Rust to WebAssembly development tools",
    },
    WasmEdge: {
      url: "https://wasmedge.org",
      description: "Cloud-native WebAssembly runtime",
    },
  },
  "Static Site Generators": {
    Hugo: {
      url: "https://gohugo.io",
      description: "Fast static site generator written in Go",
    },
    Gatsby: {
      url: "https://www.gatsbyjs.com",
      description: "React-based framework for building static websites",
    },
    Jekyll: {
      url: "https://jekyllrb.com",
      description: "Simple, blog-aware static site generator",
    },
    Eleventy: {
      url: "https://www.11ty.dev",
      description: "Simpler static site generator written in JavaScript",
    },
    Astro: {
      url: "https://astro.build",
      description: "All-in-one web framework for content-driven websites",
    },
  },
  "Graph Databases": {
    Neo4j: {
      url: "https://neo4j.com",
      description: "Native graph database platform",
    },
    Dgraph: {
      url: "https://dgraph.io",
      description: "Native GraphQL database with a graph backend",
    },
    ArangoDB: {
      url: "https://www.arangodb.com",
      description: "Multi-model database for graph, document and search",
    },
    OrientDB: {
      url: "https://orientdb.org",
      description: "Multi-model database supporting graph, document, key/value",
    },
  },
  "Web Audio": {
    "Tone.js": {
      url: "https://tonejs.github.io",
      description: "Framework for creating interactive music in the browser",
    },
    "Howler.js": {
      url: "https://howlerjs.com",
      description: "Audio library for modern web apps",
    },
    "Web Audio API": {
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",
      description:
        "High-level JavaScript API for processing and synthesizing audio",
    },
  },
  "Quantum Computing": {
    Qiskit: {
      url: "https://qiskit.org",
      description: "Open-source framework for quantum computing",
    },
    Cirq: {
      url: "https://quantumai.google/cirq",
      description: "Python framework for creating quantum algorithms",
    },
    "Microsoft QDK": {
      url: "https://azure.microsoft.com/en-us/products/quantum",
      description: "Development kit for quantum computing",
    },
  },
  "Social Media APIs": {
    "Facebook Graph API": {
      url: "https://developers.facebook.com/docs/graph-api",
      description: "Primary way to get data in and out of Facebook",
    },
    "Twitter API": {
      url: "https://developer.twitter.com/en/docs",
      description: "API for reading and writing Twitter data",
    },
    "Instagram API": {
      url: "https://developers.facebook.com/docs/instagram-api",
      description: "API for accessing Instagram features and data",
    },
    "Reddit API": {
      url: "https://www.reddit.com/dev/api",
      description: "API for accessing Reddit data and features",
    },
    "YouTube API": {
      url: "https://developers.google.com/youtube",
      description: "API for integrating YouTube features into applications",
    },
  },
  "Frontend NPM Packages": {
    "Radix UI": {
      url: "https://www.npmjs.com/package/@radix-ui/react",
      description:
        "Unstyled, accessible components for building high-quality design systems",
    },
    Emotion: {
      url: "https://www.npmjs.com/package/@emotion/react",
      description: "CSS-in-JS library with powerful styling capabilities",
    },
    "Styled Components": {
      url: "https://www.npmjs.com/package/styled-components",
      description: "Visual primitives for the component age using CSS-in-JS",
    },
    "Vanilla Extract": {
      url: "https://www.npmjs.com/package/@vanilla-extract/css",
      description: "Zero-runtime CSS-in-TypeScript with static extraction",
    },
    "React Spring": {
      url: "https://www.npmjs.com/package/@react-spring/web",
      description: "Spring-physics based animation library for React",
    },
    "Chart.js": {
      url: "https://www.npmjs.com/package/chart.js",
      description: "Simple yet flexible JavaScript charting library",
    },
    "D3.js": {
      url: "https://www.npmjs.com/package/d3",
      description:
        "Data-driven manipulation of documents with powerful visualizations",
    },
    Recharts: {
      url: "https://www.npmjs.com/package/recharts",
      description: "Redefined chart library built with React and D3",
    },
  },
  "Backend NPM Packages": {
    Fastify: {
      url: "https://www.npmjs.com/package/fastify",
      description: "Fast and low overhead web framework for Node.js",
    },
  },
};
function createCategoryElement(title, tools) {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "category";

  const heading = document.createElement("h2");
  heading.textContent = title;

  const toolsList = document.createElement("ul");
  toolsList.className = "tools-list";

  Object.entries(tools).forEach(([name, data]) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = data.url;
    link.textContent = name;
    link.className = "tool-link";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const description = document.createElement("p");
    description.className = "tool-description";
    description.textContent = data.description;

    li.appendChild(link);
    li.appendChild(description);
    toolsList.appendChild(li);
  });

  categoryDiv.appendChild(heading);
  categoryDiv.appendChild(toolsList);
  return categoryDiv;
}

function renderCategories(searchTerm = "") {
  const categoriesContainer = document.getElementById("categories");
  categoriesContainer.innerHTML = "";

  Object.entries(techData).forEach(([category, tools]) => {
    const filteredTools = Object.entries(tools).reduce((acc, [name, data]) => {
      if (
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        acc[name] = data;
      }
      return acc;
    }, {});

    if (Object.keys(filteredTools).length > 0) {
      const categoryElement = createCategoryElement(category, filteredTools);
      categoriesContainer.appendChild(categoryElement);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    renderCategories(e.target.value);
  });
});
