process.stdin.setEncoding('utf8');


var details = {
	"user1" : "1234",
	"user2" : "1234",
	"user3" : "1234",
}

process.stdin.on('readable', () => {
	
	//console.log(Object.keys(details).indexOf('user1'));
	var hasUserName = false;
	var needPwd = false;
	const input = String(process.stdin.read()).trim();

	
	
	if(input != null)
	{
		
		if (Object.keys(details).indexOf(input) !== -1) 
		{
			
			process.stdout.write('in it!!\n');
			hasUserName = true;
		}
		else
		{
			process.stdout.write('not in it\n');
			hasUserName = false;
		}
		
		if(hasUserName)
		{
			process.stdout.write('input password \n');
			needPwd = true;
		}
		else
		{
			
		}
		
			
	}
	
});