﻿
const configL = {
	user: 'iEx',
	password: 'iEx',
	server: 'ALEXISPC\\SQLDEV',
	database: 'ONNE',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};

const config = {
	user: 'db_a6478c_onneweb_admin',
	password: 'razors1805',
	server: 'sql5092.site4now.net',
	database: 'db_a6478c_onneweb',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};

const sql = require('mssql');

let execute = {
	Query : (res,sqlqry)=>{	
		
		//console.log('ejecutando consulta... ' + sqlqry);		

		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					console.log(err.message);
					res.send('error')
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
			  res.send('error');
		  })
		} catch (error) {
			console.log(error);
		  res.send('error')   
		  sql.close();
		}
	},
	QueryJson : (res,sqlqry)=>{	
		
		//console.log('ejecutando consulta... ' + sqlqry);		

		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					console.log(err.message);
					//res.send('error')
				}else{
					//res.send(result);
					console.log(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
			  res.send('error');
		  })
		} catch (error) {
			console.log(error);
		  res.send('error')   
		  sql.close();
		}
	},
	get_data_qry : (sqlqry)=>{	
				
		return new Promise((resolve,reject)=>{

			try {
				const pool1 = new sql.ConnectionPool(config, err => {
				  new sql.Request(pool1)
				  .query(sqlqry, (err, result) => {
					  if(err){
						  	console.log(err.message);
						  	reject();
					  }else{
							resolve(result);
					  }					
				  })
				  sql.close();  
				})
				pool1.on('error', err => {
					console.log('error sql = ' + err);
					reject();
					sql.close();
				})
			  } catch (error) {
				  	console.log(error);
					reject();   
					sql.close();
			  }

		})

	},
	command : (rsqlqry)=>{			
		return new Promise((resolve,reject)=>{
			try {
				const pool1 = new sql.ConnectionPool(config, err => {
				  new sql.Request(pool1)
				  .query(sqlqry, (err, result) => {
						sql.close();
						if(err){
							reject(err);		  
						}else{
							resolve(result);
						}					
				  })  
				})
				pool1.on('error', err => {
					sql.close();
					reject(err);
				})
			  } catch (error) {
					sql.close();
					reject(error);
			  }
		})
	},
	start:()=>{
		console.log('intentando iniciar la conexión...')
		//const sql = require('mssql')
		try {
			sql.connect(config).then(()=>{sql.close();})
			console.log('primera conexion exitosa...');
		} catch (error) {
			console.log('primera conexion fallo: ' & error);
		}
	}
}

module.exports = execute;

