/* eslint-disable prettier/prettier */
import { Client } from 'pg'

export class Notifier {
  client: Client
  constructor(connectionString) {
    this.client = new Client({ connectionString })
  }

  async connect() {
    try {
      await this.client.connect()
      console.log('Conectado a la base de datos.')
      this.listenForNotifications()
    } catch (err) {
      console.error('Error al conectar a la base de datos:', err)
    }
  }

  listenForNotifications() {
    this.client.query('LISTEN new_sale')

    this.client.on('notification', (msg) => {
      console.log('Nueva venta:', msg.payload)
      alert(msg.payload)
    })

    this.client.on('error', (err) => {
      console.error('Error en el cliente de PostgreSQL', err)
    })
  }

  async disconnect() {
    try {
      await this.client.end()
      console.log('Desconectado de la base de datos.')
    } catch (err) {
      console.error('Error al desconectar de la base de datos:', err)
    }
  }
}
