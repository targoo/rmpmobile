var maxTime = 1000;

var evenDoubler = function (v, callback) {
	var waitTime = Math.floor(Math.random()*(maxTime+1));
	if (v%2) {
		setTimeout(function() {
			callback(new Error('Old input'));
		}, waitTime);
	} else {
		setTimeout(function() {
			callback(null, v*2, waitTime);
		}, waitTime);
	}
}

var compt = 0;

for (var i = 0; i<10 ; i++) {
	console.log("calling evenDoubler" + i);
	evenDoubler(i, function (err, results, time) {
		if (err) {
			console.log("Error: " + err.message);
		} else {
			console.log("The results are: " + results + "(" + time + ")");
		}
		console.log(compt++);
	});
}

console.log("Start");