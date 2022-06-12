module.exports = (app) => {
  const path = require('path')
  
  app.get('/command/create', isLoggedIn , function(req,res) {
    res.sendFile(path.join(__dirname, "/pages/dark-theme/command.html"))
  })

  app.get('/', async (req,res) => {
    var a = path.join(__dirname,"/pages/login.html")

    res.sendFile(a)
  })

  app.get('/logo.png', async (req,res) => {
    var a = path.join(__dirname,"/assets/aoijs-logo.png")
    res.sendFile(a)
  })
  app.get('/bird.png', async (req,res) => {
    var a = path.join(__dirname,"/assets/aoi-bird.png")
    res.sendFile(a)
  })
  
  
  function isLoggedIn(req,res,next) {
    if(1==2){
      return next()
    }
    else {
      res.redirect('/')
    }
  }

}