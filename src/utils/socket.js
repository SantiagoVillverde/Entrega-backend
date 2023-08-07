
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { menssagerModel } from '../models/menssage.model.js';


export const app = express();
export const server = http.createServer(app);
export const io = new Server(server);


io.on('connection', async (socket) => {
	console.log('Cliente conectado');

	try {
		const messages = await menssagerModel.find({}).lean();
		socket.emit('List-Message', { messages });
	} catch (error) {
		console.error('Error al obtener los mensajes:', error);
	}


	socket.on('disconnect', () => {
		console.log('Cliente desconectado');
	});
});
