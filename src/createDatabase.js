const connection = require('./connector')
const data = require('./data');
const bookData = data.book;
const userData = data.user;


const initialize = async () => {

    await
        new Promise((res, rej) => {
            connection.query("DROP TABLE IF EXISTS Books;",
                (err, result) => {
                    if (err) rej(err);
                    else res();
                });
        })

    await
        new Promise((res, rej) => {
            connection.query("CREATE TABLE Books (id INT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(255) NOT NULL,description VARCHAR(255),genre VARCHAR(255), author VARCHAR(255), rating INT, review VARCHAR(255), FavQuotes VARCHAR(255), section ENUM('0' ,'1', '2' ));",
                (err, result) => {
                    if (err) {
                        rej(err)
                        // console.log(err)
                    }
                    else {
                        res();
                    }
                });
        })
    for (let a in bookData) {
        let element = bookData[a];
        await new Promise((res, rej) => {
            connection.query("INSERT INTO Books (title, description, genre, author, rating, review, FavQuotes, section) VALUES (?,?,?,?,?,?,?,?);", [element.title, element.description, element.genre, element.author, element.rating, element.review, element.FavQuotes, element.section], (err, result) => {
                if (err) {
                    rej(err)
                    // console.log(err)
                }
                else {
                    res();
                }
            })
        });
    }

    await
        new Promise((res, rej) => {
            connection.query("DROP TABLE IF EXISTS user;",
                (err, result) => {
                    if (err) rej(err);
                    else res();
                });
        })

    await
        new Promise((res, rej) => {
            connection.query("CREATE TABLE user (id varchar(100) PRIMARY KEY,isRead VARCHAR(1000),toRead varchar(1000)); ",
                (err, result) => {
                    if (err) {
                        rej(err)
                        // console.log(err)
                    }
                    else {
                        res();
                    }
                });
        })
    for (let a in userData) {
        let element = userData[a];
        await new Promise((res, rej) => {
            connection.query("INSERT INTO user (id, isRead, toRead) VALUES (?,?,?);", [element.name, element.isRead, element.toRead], (err, result) => {
                if (err) {
                    rej(err)
                    // console.log(err)
                }
                else {
                    res();
                }
            })
        });

    }
    connection.end(() => {
        console.log('Connection Closed')
    })
}
initialize();


module.exports = connection;