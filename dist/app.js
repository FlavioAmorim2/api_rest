"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);


var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _UserRoutes = require('./routes/UserRoutes'); var _UserRoutes2 = _interopRequireDefault(_UserRoutes);
var _tokensRoutes = require('./routes/tokensRoutes'); var _tokensRoutes2 = _interopRequireDefault(_tokensRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _PhotoRoutes = require('./routes/PhotoRoutes'); var _PhotoRoutes2 = _interopRequireDefault(_PhotoRoutes);

class App{
  constructor(){
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(_express2.default.urlencoded({extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes(){
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users', _UserRoutes2.default);
    this.app.use('/tokens', _tokensRoutes2.default);
    this.app.use('/alunos', _alunoRoutes2.default);
    this.app.use('/Photos', _PhotoRoutes2.default);
  }
}

exports. default = new App().app;
