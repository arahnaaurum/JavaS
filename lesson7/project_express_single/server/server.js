const express = require('express');
const fs = require('fs');
const app = express();

/**
 * Активируем мидлвары
 */
app.use(express.json()); // Даем знать приложению, что работаем с json'ом
app.use('/', express.static('./public')); // запросы в корень нашего сайт отдают содержимое public

/**
 * API Каталога
 */
app.get('/api/products', (req, res) => {
  fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

/**
 * API Корзины
 */
app.get('/api/cart', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});


// функция статистики - start
function makeLogEntry (action, item, time) {
  const statInfo = {"action":action, "item":item, "time":time}
  console.log(statInfo)
    fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const stats = JSON.parse(data);
        stats.log.push(statInfo)
        fs.writeFile('./server/db/stats.json', JSON.stringify(stats), (err) => {
          if (err) {
            console.log(err);
          }
        })
      }
    });
}


// Добавление нового товара в корзине
app.post('/api/cart', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      // парсим текущую корзину
      const cart = JSON.parse(data);
      // добавляем новый товар
      cart.contents.push(req.body);
      // пишем обратно
      fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
      makeLogEntry(action = "add", item = req.body.product_name, time = new Date());
    }
  });
});

// Изменяем количество товара
app.put('/api/cart/:id', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      // парсим текущую корзину
      const cart = JSON.parse(data);
      // ищем товар по id
      const find = cart.contents.find(el => el.id_product === +req.params.id);
      // изменяем количество
      find.quantity += req.body.quantity;
      // пишем обратно
      fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
      makeLogEntry(action = "change quantity", item = req.body.product_name, time = new Date());
    }
  });
});

app.delete('/api/cart', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      // парсим текущую корзину
      const cart = JSON.parse(data);
      // удаляем товар
      cart.contents.splice(cart.contents.indexOf(req.body), 1)
      // пишем обратно
      fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
      makeLogEntry(action = "delete", item = req.body.product_name, time = new Date());
        // файл статистики - start
        // const now = new Date();
        // const statInfo = {"action":"delete", "item":req.body.product_name, "time":now}
        // fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
        //   if (err) {
        //     console.log(err);
        //   } else {
        //     const stats = JSON.parse(data);
        //     stats.log.push(statInfo)
        //     fs.writeFile('./server/db/stats.json', JSON.stringify(stats), (err) => {
        //       if (err) {
        //         console.log(err);
        //       }
        //     })
        //   }
        // });
      // файл статистики - end
    }
  });
});



/**
 * Запуск сервера
 * @type {string|number}
 */
// const port = process.env.PORT || 3000;
const port = 3000; // чтобы не смущало process.env.PORT (если не стартует на 3000, то меняем на другой 8080 или 8888)
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
