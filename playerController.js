// Import Player Model
const Player = require('./playerModel');

// For index
exports.index = function (req, res) {
    Player.get(function (err, players) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Player Details Successfully!",
                data: players
            });
        }
    });
};

// For creating new Player Detail
exports.add = function (req, res) {
    var player = new Player();
    player.name = req.body.name ? req.body.name : player.name;
    player.position = req.body.position;
    player.age = req.body.age;
    player.height = req.body.height;
    player.nationality = req.body.nationality;
    player.rushingYards = req.body.rushingYards;
    player.touchdownThrown = req.body.touchdownThrown;
    player.sacks = req.body.sacks;
    player.madeFieldGoals = req.body.madeFieldGoals;
    player.missedFieldGoals = req.body.missedFieldGoals;
    player.catchesMade = req.body.catchesMade;

    // Save and check error
    player.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Player Detail Added!",
            data: player
        });
    });
};

// View Player Detail
exports.view = function (req, res) {
    Player.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
        res.json({
            message: 'Player Details',
            data: player
        });
    });
};

// Update Player Detail
exports.update = function (req, res) {
    console.log("Request body:", req.body);
    Player.findByIdAndUpdate(req.params.player_id, {
        $set: {
            name: req.body.name,
            position: req.body.position,
            age: req.body.age,
            height: req.body.height,
            nationality: req.body.nationality,
            rushingYards: req.body.rushingYards,
            touchdownThrown: req.body.touchdownThrown,
            sacks: req.body.sacks,
            madeFieldGoals: req.body.madeFieldGoals,
            missedFieldGoals: req.body.missedFieldGoals,
            catchesMade: req.body.catchesMade
        }
    }, { new: true, useFindAndModify: false }, function (err, player) {
        if (err) {
            console.error("Error updating player details:", err);
            res.json(err);
        } else {
            console.log("Player details updated successfully:", player);
            res.json({
                message: "Updated Player Details Successfully",
                data: player
            });
        }
    });
};

// Delete Player Detail
exports.delete = function (req, res) {
    Player.deleteOne({
        _id: req.params.player_id
    }, function (err, result) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Deleted Player Details'
        });
    });
};
