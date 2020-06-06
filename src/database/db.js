// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco
const db = new sqlite3.Database("./src/database/database.db") // atribuindo objeto para constante

module.exports = db



// utilizar o objeto do banco de dados para nossas operações
// db.serialize(() => {
//     // com comandos SQL eu vou: 

//     // 1 criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // 2 inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         adress,
//         adress2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
//     `
//     // no 1º parenteses os campos e no 2º os valores
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//         "Papersider",
//         "Rua Campos do Jordão",
//         "Número 241",
//         "São Paulo",
//         "Cajamar",
//         "Resíduos Orgânicos"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this) // o this funciona diferente numa arrow func
//     }

//     db.run(query, values, afterInsertData) // se colocar os parenteses não vai ser callback e vai chamar na hora


    // 3 consultar dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão os registros: ")
    //     console.log(rows)
    // })


    // 4 deletar dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Deletado com sucesso")
    // })

// })