import App from './App'

const port = process.env.PORT || 3000

const app = new App()

process.on('SIGINT', () => process.exit())