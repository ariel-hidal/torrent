'use strict';
//required packages
const fs = require('fs');
const bencode = require('bencode');
const dgram = require('dgram');
const Buffer = require('buffer').Buffer;
const urlParse = require('url').parse;

//create url JSON
const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
const url = urlParse(torrent.announce.toString('utf8'));


//create connection and message
const socket = dgram.createSocket('udp4');
const msg = Buffer.from('hello?', 'utf8');

//send message
socket.send(msg, 0, msg.length, url.port, url.host, () => {});

//receive messages
socket.on('message', message => {
  console.log('message is: ' + message);
});
