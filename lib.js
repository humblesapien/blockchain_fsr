const Web3 = require('node_modules/web3');
const PORT = 8080;
exp = require('express');
const app = new exp();
var path = require('path');
var mysql = require('mysql');
const bodyParser = require("body-parser");
const crypto = require('crypto');
var session = require('express-session');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var sess=null;

app.use(cors());

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use(cookieParser());

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

let filterIdnew;

const POW_TIME = 100;
const TTL = 20;
const POW_TARGET = 2;
const channelTopic = "0x5a4ea131";
const web3 = new Web3();
//let recipientPubKey;
let keyPair ;
let pubKey;
//let send_data;
//var window = require("C:\\Users\\Amrat\\node_modules\\window-or-global\\lib");

app.use(exp.static(path.join(__dirname, 'dist')));

app.listen(PORT, function() {
	console.log('Express server listening on port ', PORT); // eslint-disable-line
});

app.post('/check_account',function(req,res){
	console.log(req.body);
	connection.query('SELECT * FROM login_table WHERE m_pub_key LIKE '+'\"'+req.body.m_pub_key+'\"' ,function(error,rows,fields){
		if(!!error){
			console.log('error!');
			res.send('Error!');
		}
		else
			{
				//console.log(rows);
				if(rows.length!=0){
					data={
						is_signed_up: 1
					}
					res.send(data);
				}
				else{
					data={
						is_signed_up: 0
					}
					res.send(data);
				}
			}
	});
	
});

app.get('/check_session', function (req,res) {
	console.log("inside check session");
	if(req.session.password==null){
		console.log("inside if loop");
		res.send({status:0});
	}else{
		console.log("inside else loop");
		res.send({status:1});
	}

});

app.get('/*', function (req,res) {
	console.log("hi sign");
	
	res.sendFile(path.join(__dirname, 'dist/index.html'));

});

/*app.get('/dashboard', function (req,res) {
	
	console.log("hi dash");
	console.log(req);
	//res.sendFile(path.join(__dirname, 'dist/index.html'));
	res.redirect('/signup');
});*/



app.post('/check_password',function(req,res){

	

		connection.query('SELECT * FROM login_table WHERE m_pub_key='+'"'+req.body.m_pub_key+'"' ,function(error,rows,fields){
			if(!!error){
				console.log('error!');
				res.send('Error!');
			}
			else{	
				
				//rows[0].w_pub_key
				var password = req.body.pass;
				var key = crypto.pbkdf2Sync(password,req.body.m_pub_key,1,32,'sha512');
				   
				var text_toDecrypt = JSON.parse(rows[0].w_key_pair);
				var decrypted_text = decrypt(text_toDecrypt,key);
				if(decrypted_text == "error"){
					res.send({status:0});
				}
				else{
					//console.log(decrypted_text);
					req.session.password=req.body.pass;
					console.log(req.session.password);
    				//sess=req.session;
					res.send({status:1});
				}
				
				
			}
		});
		
	
});

app.post('/signup', function (req,res) {
	console.log(req.body.username+" "+req.body.email+" ");
	console.log(req.body.m_pub_key);
	console.log(req.body.pass);
	
	req.session.password=req.body.pass;
    //sess=req.session;
    console.log(sess);

	//console.log(keyPair);

	(async () => {
		try {
			web3.setProvider(new Web3.providers.WebsocketProvider("ws://localhost:8546", {headers: {Origin: "mychat"}}));
			await web3.eth.net.isListening();
		}catch(err){
			process.exit();
		}
		keyPair = await web3.shh.newKeyPair();
		//web3.shh.getPrivateKey(keyPair);
		console.log("key var "+keyPair);	 
		pubKey = await web3.shh.getPublicKey(keyPair);
		console.log(pubKey);

		let filter = {
				topics: ['0x5a4ea131']
		};
		filter.privateKeyID = keyPair;

		await web3.shh.newMessageFilter(filter).then(filterId => {
			console.log("*****  "+filterId+"  ***********");
			filterIdnew = filterId;
		});
		
		let encryption_key;
		var encryption_password = req.body.pass;
		encryption_key = crypto.pbkdf2Sync(encryption_password,req.body.m_pub_key,1,32,'sha512');
		  
		var encrypted_keyPair = encrypt(keyPair,encryption_key);
		console.log(JSON.stringify(encrypted_keyPair));
		encrypted_keyPair = JSON.stringify(encrypted_keyPair);

		var encrypted_filterId = encrypt(filterIdnew,encryption_key);
		console.log(JSON.stringify(encrypted_filterId));
		encrypted_filterId = JSON.stringify(encrypted_filterId);

		connection.query('INSERT INTO login_table VALUES  (\''+ req.body.username+'\' ' +', \'' + req.body.email+'\' ,\''+req.body.m_pub_key+'\',\''+pubKey+'\',\''+encrypted_keyPair+'\',\''+encrypted_filterId+'\' )',function(error,rows,fields){
		if(!!error){
			console.log('error!');
			res.send('ERROR!');
		}
		else{
			if(!rows.length){
				data={
					"status": 1
				};
				res.send(data);
					//res.sendFile('/profile.html',{root: __dirname});					//res.redirect('/invalid');
				console.log('Signup SUCCESSFUL');
			}
			else{
				data={
					"status": 0,
				};
				res.send(data);
				res.end('Signup FAILED');
				console.log('Signup FAILED');
					//res.redirect('/user');
			}
		}
		});
   //console.log(web3.shh.hasKeyPair(keyPair));
		console.log('Signup page');
	})();
});

app.post('/send',function(req,res){

	console.log("data received in backend");
	//console.log(req.body.receiver_w_pub_key);
	//console.log(req.body.w_key_pair);
	//console.log(req.body.receiver_w_key_pair);

	console.log(req.body.m_pub_key);
	console.log(req.body.email);
	console.log(req.body.message);
	//console.log(sess);

	web3.setProvider(new Web3.providers.WebsocketProvider("ws://localhost:8546", {headers: {Origin: "mychat"}}));

	let msg = {
				text: req.body.message,
				hash: req.body.hash,
				password: req.body.password
	};

	let postData = {
				ttl: 7,
				topic: '0x5a4ea131',
				powTarget: 2.01,
				powTime: 100
	};

	(async () => {

		await connection.query('SELECT * FROM login_table WHERE m_pub_key='+'"'+req.body.m_pub_key+'"' ,function(error,rows,fields){
			if(!!error){
				console.log('error!');
				res.send('Error!');
			}
			else{	
				console.log(rows[0].w_key_pair);
				console.log(req.session.password);

				var key = crypto.pbkdf2Sync(req.session.password,req.body.m_pub_key,1,32,'sha512');
				   
				var text_toDecrypt = JSON.parse(rows[0].w_key_pair);
				var decrypted_text = decrypt(text_toDecrypt,key);

				postData.sig = decrypted_text;
				console.log(rows[0].username);
				msg.name = rows[0].username;
			}
		});
			
		await connection.query('SELECT * FROM login_table WHERE email='+'"'+req.body.email+'"' ,function(error,rows,fields){
			if(!!error){
				console.log('error!');
				res.send('Error!');
			}
			else{	
				console.log(rows[0].w_pub_key);
				postData.pubKey = rows[0].w_pub_key;

				postData.payload = encodeToHex(JSON.stringify(msg));

				console.log(postData.pubKey);
				console.log(postData.payload);
				web3.shh.post(postData);
				console.log("sent");

				res.send({status:1});
			}
		});

		
	})();
});

app.post('/check_messages',function (req,res){

	console.log("inside check messages");
	console.log(sess);

	web3.setProvider(new Web3.providers.WebsocketProvider("ws://localhost:8546", {headers: {Origin: "mychat"}}));

	connection.query('SELECT * FROM login_table WHERE m_pub_key='+'"'+req.body.m_pub_key+'"' ,function(error,rows,fields){
		if(!!error){
			console.log('error!');
			res.send('Error!');
		}
		else{	
			var result_data = [];
			console.log(req.session.password);
			var key = crypto.pbkdf2Sync(req.session.password,req.body.m_pub_key,1,32,'sha512');
				   
			var text_toDecrypt = JSON.parse(rows[0].filterId);
			var decrypted_text = decrypt(text_toDecrypt,key);
			
					//var myInterval = setInterval(()=>{
			web3.shh.getFilterMessages(decrypted_text).then(messages => {
				console.log(messages);
				for (let msg of messages) {

					let message = decodeFromHex(msg.payload);
					console.log("received "+message.text+" by "+rows[0].username);
					console.log("****  "+ message.name + " ****");
					send_object={
						text: message.text,
						name: message.name,
						hash: message.hash,
						password: message.password
					}
					result_data.push(send_object);
					
					//clearInterval(myInterval);
				}

				
				console.log(result_data);
						//},10000);
				newdata={
					messages: result_data
				}
				res.send(newdata);
			});
		}
	});
});

function decodeFromHex(hex) {
	if (!hex || hex.length < 4 || hex[0] != "0" || hex[1] != "x" || hex.length % 2 != 0) {
		console.log(`Invalid hex string: ${hex}`);
		return "";
	} else {
		let result = "";

		for (let i = 2; i<hex.length; i+=2) {
			let n = parseInt(hex.slice(i, i+2), 16);
			result += String.fromCharCode(n);
		}

		try {
			return JSON.parse(result);
		} catch (e) {
			return "Error: message could not be decrypted";
		}
	}
}

function encodeToHex(string) {
	let hexEncodedMessage = "0x";

	try {
		for (let c of string) {
			hexEncodedMessage += c.charCodeAt(0).toString(16);
		}
	} catch(e) {
		
	}

	return hexEncodedMessage;
}

function encrypt(text,pass) {
 var iv = crypto.randomBytes(16);
 let cipher = crypto.createCipheriv('aes-256-cbc', pass, iv);
 let encrypted = cipher.update(text);
 
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex')};
 
}

function decrypt(text,pass) {
 let iv = Buffer.from(text.iv, 'hex');
 let encryptedText = Buffer.from(text.encryptedData, 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', pass, iv);
 console.log(decipher);
 let decrypted = decipher.update(encryptedText);
 console.log(decrypted.toString('utf8'));
 try{
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 }catch{
  return "error";
 }
 console.log(decrypted.toString('utf8'));
 return decrypted.toString('utf8');
}

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fyproject'
});
connection.connect();

app.post('/session', function(req, res) {
  
  req.session.password=req.body.pass;
  sess=req.session;
  res.send({'a':'y'});

});
