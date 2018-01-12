//inherit attributes from Drag
function LimitedDrag(id){
	Drag.call(this,id);
}
//inherit methods from Drag
for(var i in Drag.prototype){
	LimitedDrag.prototype[i] = Drag.prototype[i];
}

//Override
LimitedDrag.prototype.fnMouseMove = function(ev){
	var oEvent = ev || event;

	var left = oEvent.clientX - this.disX;
	var top = oEvent.clientY - this.disY;

	if(left < 0)
		left = 0;
	else if(left > document.documentElement.clientWidth - this.oDiv.offsetWidth)
		left = document.documentElement.clientWidth - this.oDiv.offsetWidth;

	if(top < 0)
		top = 0;

	this.oDiv.style.left = left + 'px';
	this.oDiv.style.top =  top + 'px';
}