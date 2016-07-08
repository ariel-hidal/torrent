'use strict';
//required packages
const fs = require('fs');
const bencode = require('bencode');

//create torrent IO
const buffer = fs.readFileSync('puppy.torrent');
const torrent = bencode.decode(buffer);

//testing IO
var announce = torrent.announce.toString('utf8');
console.log(announce);

