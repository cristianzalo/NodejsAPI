const {createContainer,asClass,asValue,asFunction} = require('awilix');

//config
const config = require('../config');
const app =require('./index');

//Services
const {HomeService,
        UserService,
        IdeaService,
        CommentService,
        AuthService} = require('../services');

//Controllers
const {HomeController,
        CommentController,
        UserController,
        IdeaController,
        AuthController} = require('../controllers');

//Routes
const {HomeRoutes,
        AuthRoutes,
        CommentRoutes,
        IdeaRoutes,
        UserRoutes} = require('../routes/index.routes');

const Routes =require('../routes');

//models
const {User,
        Comment,
        Idea} = require('../models');

//repository
const {CommentRepository,
        IdeaRepository,
        UserRepository} = require('../repositories');

const container = createContainer();

container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config:asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton()
}).register({
    HomeRoutes : asFunction(HomeRoutes).singleton(),
    UserRoutes : asFunction(UserRoutes).singleton(),
    IdeaRoutes : asFunction(IdeaRoutes).singleton(),
    CommentRoutes : asFunction(CommentRoutes).singleton(),
    AuthRoutes : asFunction(AuthRoutes).singleton(),
    
}).register({
    User : asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea)
}).register({
    CommentRepository : asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
});


module.exports= container;