var frames = [];

frames[frames.length] = `
    6
`;

frames[frames.length] = `
   6
`;

frames[frames.length] = `
  6
`;

frames[frames.length] = `
 6
`;

var fps = 5;
var index = 0;
var height = process.stdout.getWindowSize()[1];
var render = ()=> {
	
//	for(var i = 0; i < height; i++)
//	{
//		process.stdout.write('\r\n');
//	}
	process.stdout.write('\033[2J');
	process.stdout.write('\033[0f');

	
	if(index === frames.length)
		index = 0;
	process.stdout.write(frames[index++]);
}


setInterval(render, 1000 / fps);
