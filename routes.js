// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to Ass3.2 API'
    });
});

// Import Player Controller
var playerController = require('./playerController');

// Player routes
router.route('/players')
    .get(playerController.index)
    .post(playerController.add);

router.route('/players/:player_id')
    .get(playerController.view)
    .patch(playerController.update)
    .put(playerController.update)
    .delete(playerController.delete);

// Export API routes
module.exports = router;
